import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const leadId = searchParams.get('lead_id')
  const limit = parseInt(searchParams.get('limit') || '50')

  let query = supabase.from('gtc_outreach').select('*').order('created_at', { ascending: false }).limit(limit)

  if (leadId) {
    query = query.eq('lead_id', leadId)
  }

  const { data, error } = await query
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // If no lead_id filter, join lead names
  if (!leadId && data.length > 0) {
    const leadIds = [...new Set(data.map(d => d.lead_id).filter(Boolean))]
    if (leadIds.length > 0) {
      const { data: leads } = await supabase.from('gtc_leads').select('id, name').in('id', leadIds)
      const nameMap = Object.fromEntries((leads || []).map(l => [l.id, l.name]))
      data.forEach(d => { d.lead_name = nameMap[d.lead_id] || null })
    }
  }

  return NextResponse.json({ outreach: data })
}

// Follow-up cadence: days to wait after each email
const FOLLOWUP_DAYS = [2, 4, 7]
const MAX_FOLLOWUPS = FOLLOWUP_DAYS.length

export async function POST(request) {
  const body = await request.json()

  const { data, error } = await supabase.from('gtc_outreach').insert({
    lead_id: body.lead_id,
    type: body.type || 'email',
    subject: body.subject || null,
    body: body.body || null,
    template_id: body.template_id || null,
  }).select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Update lead: status, outreach count, last_contacted, and schedule next follow-up
  if (body.lead_id) {
    try {
      // Get current lead state
      const { data: lead } = await supabase
        .from('gtc_leads')
        .select('status, outreach_count, followup_number')
        .eq('id', body.lead_id)
        .single()

      if (lead) {
        const newOutreachCount = (lead.outreach_count || 0) + 1
        const newFollowupNumber = (lead.followup_number || 0) + 1
        const now = new Date()

        const updates = {
          outreach_count: newOutreachCount,
          last_contacted: now.toISOString(),
          followup_number: newFollowupNumber,
          updated_at: now.toISOString(),
        }

        // Set status to contacted if still new
        if (lead.status === 'new') {
          updates.status = 'contacted'
        }

        // Schedule next follow-up or mark done
        if (newFollowupNumber <= MAX_FOLLOWUPS) {
          const daysOut = FOLLOWUP_DAYS[newFollowupNumber - 1]
          const followupDate = new Date(now)
          followupDate.setDate(followupDate.getDate() + daysOut)
          followupDate.setHours(9, 0, 0, 0) // 9 AM
          updates.next_followup = followupDate.toISOString()
        } else {
          // Max follow-ups reached with no response — mark not interested
          updates.next_followup = null
          if (lead.status === 'contacted') {
            updates.status = 'not_interested'
          }
        }

        await supabase.from('gtc_leads').update(updates).eq('id', body.lead_id)
      }
    } catch (e) {
      console.error('Failed to update lead follow-up:', e)
    }
  }

  return NextResponse.json({ outreach: data })
}
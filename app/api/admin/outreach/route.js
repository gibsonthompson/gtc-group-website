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

  // Update outreach count on lead
  if (body.lead_id) {
    const { data: lead } = await supabase.from('gtc_leads').select('outreach_count').eq('id', body.lead_id).single()
    if (lead) {
      await supabase.from('gtc_leads').update({
        outreach_count: (lead.outreach_count || 0) + 1,
        updated_at: new Date().toISOString()
      }).eq('id', body.lead_id)
    }
  }

  return NextResponse.json({ outreach: data })
}
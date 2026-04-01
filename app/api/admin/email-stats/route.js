import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  // Get today's count
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)

  const { count, error } = await supabase
    .from('gtc_email_log')
    .select('*', { count: 'exact', head: true })
    .gte('sent_at', todayStart.toISOString())

  if (error) return NextResponse.json({ today: 0, error: error.message })
  return NextResponse.json({ today: count || 0 })
}

export async function POST(request) {
  const body = await request.json()

  const { data, error } = await supabase.from('gtc_email_log').insert({
    lead_id: body.lead_id || null,
    lead_name: body.lead_name || null,
    subject: body.subject || null,
  }).select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ logged: true })
}
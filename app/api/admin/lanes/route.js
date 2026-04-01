import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('gtc_lanes').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lanes: data })
}

export async function POST(request) {
  const body = await request.json()

  if (body.bulk) {
    const lanes = body.bulk.map(l => ({
      origin_city: l.origin_city || null, origin_state: l.origin_state || null,
      destination_city: l.destination_city || null, destination_state: l.destination_state || null,
      miles: l.miles || null, rate_per_mile: l.rate_per_mile || null, total_rate: l.total_rate || null,
      equipment_type: l.equipment_type || null, frequency: l.frequency || null,
      shipper: l.shipper || null, notes: l.notes || null,
      status: l.status || 'active'
    }))
    const { data, error } = await supabase.from('gtc_lanes').insert(lanes).select()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ count: data.length })
  }

  const { data, error } = await supabase.from('gtc_lanes').insert({
    origin_city: body.origin_city, origin_state: body.origin_state,
    destination_city: body.destination_city, destination_state: body.destination_state,
    miles: body.miles || null, rate_per_mile: body.rate_per_mile || null, total_rate: body.total_rate || null,
    equipment_type: body.equipment_type || null, frequency: body.frequency || null,
    shipper: body.shipper || null, notes: body.notes || null,
    status: body.status || 'active'
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lane: data })
}

export async function DELETE(request) {
  const body = await request.json()
  const { error } = await supabase.from('gtc_lanes').delete().eq('id', body.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
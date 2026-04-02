import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const { data, error } = await supabase.from('gtc_leads').select('*').eq('id', id).single()
    if (error) return NextResponse.json({ error: error.message }, { status: 404 })
    return NextResponse.json({ lead: data })
  }

  // Supabase defaults to 1000 rows — explicitly set higher limit
  const { data, error } = await supabase
    .from('gtc_leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10000)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ leads: data, count: data.length })
}

export async function POST(request) {
  const body = await request.json()

  // Bulk import
  if (body.bulk) {
    const leads = body.bulk.map(l => ({
      name: l.name, email: l.email || null, phone: l.phone || null,
      company: l.company || null, dot_number: l.dot_number || null, mc_number: l.mc_number || null,
      fleet_size: l.fleet_size || null, area: l.area || null,
      source: l.source || 'csv_import', status: 'new'
    }))
    const { data, error } = await supabase.from('gtc_leads').insert(leads).select()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ count: data.length })
  }

  // Single create
  const { data, error } = await supabase.from('gtc_leads').insert({
    name: body.name, email: body.email || null, phone: body.phone || null,
    company: body.company || null, dot_number: body.dot_number || null, mc_number: body.mc_number || null,
    fleet_size: body.fleet_size || null, area: body.area || null,
    source: body.source || 'manual', status: 'new'
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lead: data })
}

export async function PATCH(request) {
  const body = await request.json()
  const { id, ...updates } = body
  updates.updated_at = new Date().toISOString()

  const { data, error } = await supabase.from('gtc_leads').update(updates).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lead: data })
}

export async function DELETE(request) {
  const body = await request.json()
  const { error } = await supabase.from('gtc_leads').delete().eq('id', body.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
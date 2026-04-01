import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase.from('gtc_templates').select('*').order('category').order('name')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ templates: data })
}

export async function POST(request) {
  const body = await request.json()
  const { data, error } = await supabase.from('gtc_templates').insert({
    name: body.name, subject: body.subject || null, body: body.body,
    category: body.category || 'general', type: body.type || 'email',
    is_default: body.is_default || false
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ template: data })
}

export async function PUT(request) {
  const body = await request.json()
  const { id, ...updates } = body
  updates.updated_at = new Date().toISOString()
  const { data, error } = await supabase.from('gtc_templates').update(updates).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ template: data })
}

export async function DELETE(request) {
  const body = await request.json()
  const { error } = await supabase.from('gtc_templates').delete().eq('id', body.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
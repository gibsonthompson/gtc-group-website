import { NextResponse } from 'next/server'

export async function POST(request) {
  const { states, minTrucks, maxTrucks } = await request.json()

  if (!states || states.length === 0) {
    return NextResponse.json({ error: 'No states provided' }, { status: 400 })
  }

  const result = await queryPrimary(states, minTrucks, maxTrucks)
  if (result) return NextResponse.json(result)

  const fallback = await queryFallback(states, minTrucks, maxTrucks)
  if (fallback) return NextResponse.json(fallback)

  return NextResponse.json({ error: 'FMCSA API unavailable. Try again in a few minutes.' }, { status: 502 })
}

// SMS Input Census (kjg3-diqy)
async function queryPrimary(states, minTrucks, maxTrucks) {
  try {
    const stateFilter = states.map(s => `phy_state='${s}'`).join(' OR ')
    const where = [
      `(${stateFilter})`,
      `nbr_power_unit IS NOT NULL`,
      `nbr_power_unit::number >= ${minTrucks || 1}`,
      `nbr_power_unit::number <= ${maxTrucks || 50}`,
      `pc_flag='false'`,
      `email_address IS NOT NULL`,
    ].join(' AND ')

    const params = new URLSearchParams({
      '$where': where,
      '$limit': '10000',
      '$select': 'dot_number,legal_name,dba_name,phy_city,phy_state,telephone,email_address,nbr_power_unit,driver_total,carrier_operation',
      '$order': 'nbr_power_unit::number DESC',
    })

    const url = `https://data.transportation.gov/resource/kjg3-diqy.json?${params.toString()}`
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } })

    if (!res.ok) {
      const err = await res.text()
      console.error('Primary API error:', res.status, err)
      return null
    }

    const data = await res.json()
    return { carriers: data, source: 'sms_census' }
  } catch (e) {
    console.error('Primary query failed:', e.message)
    return null
  }
}

// Company Census File (az4n-8mr2)
async function queryFallback(states, minTrucks, maxTrucks) {
  try {
    const stateFilter = states.map(s => `phy_state='${s}'`).join(' OR ')
    const where = [
      `(${stateFilter})`,
      `nbr_power_unit IS NOT NULL`,
      `nbr_power_unit::number >= ${minTrucks || 1}`,
      `nbr_power_unit::number <= ${maxTrucks || 50}`,
      `email_address IS NOT NULL`,
    ].join(' AND ')

    const params = new URLSearchParams({
      '$where': where,
      '$limit': '10000',
      '$select': 'dot_number,legal_name,dba_name,phy_city,phy_state,email_address,nbr_power_unit,driver_total,carrier_operation',
      '$order': 'nbr_power_unit::number DESC',
    })

    const url = `https://data.transportation.gov/resource/az4n-8mr2.json?${params.toString()}`
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } })

    if (!res.ok) {
      const err = await res.text()
      console.error('Fallback API error:', res.status, err)
      return null
    }

    const data = await res.json()
    const normalized = data.map(row => ({ ...row, telephone: row.telephone || row.phone || '' }))
    return { carriers: normalized, source: 'company_census' }
  } catch (e) {
    console.error('Fallback query failed:', e.message)
    return null
  }
}
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { states, minTrucks, maxTrucks } = await request.json()

  if (!states || states.length === 0) {
    return NextResponse.json({ error: 'No states provided' }, { status: 400 })
  }

  try {
    // Socrata SODA API uses lowercase column names
    // Dataset: SMS Input - Motor Carrier Census Information (kjg3-diqy)
    const stateFilter = states.map(s => `phy_state='${s}'`).join(' OR ')
    const where = [
      `(${stateFilter})`,
      `nbr_power_unit >= ${minTrucks || 1}`,
      `nbr_power_unit <= ${maxTrucks || 50}`,
      `pc_flag = 'false'`,
      `email_address IS NOT NULL`,
    ].join(' AND ')

    const params = new URLSearchParams({
      '$where': where,
      '$limit': '10000',
      '$select': 'dot_number,legal_name,dba_name,phy_city,phy_state,telephone,email_address,nbr_power_unit,driver_total,carrier_operation',
      '$order': 'nbr_power_unit DESC',
    })

    const url = `https://data.transportation.gov/resource/kjg3-diqy.json?${params.toString()}`

    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!res.ok) {
      const errText = await res.text()
      console.error('FMCSA API error:', res.status, errText)

      // Fallback to Company Census File dataset
      const fallbackParams = new URLSearchParams({
        '$where': where,
        '$limit': '10000',
        '$select': 'dot_number,legal_name,dba_name,phy_city,phy_state,telephone,email_address,nbr_power_unit,driver_total,carrier_operation',
        '$order': 'nbr_power_unit DESC',
      })

      const fallbackUrl = `https://data.transportation.gov/resource/az4n-8mr2.json?${fallbackParams.toString()}`
      const fallbackRes = await fetch(fallbackUrl, {
        headers: { 'Accept': 'application/json' },
      })

      if (!fallbackRes.ok) {
        const fallbackErr = await fallbackRes.text()
        console.error('Fallback API error:', fallbackRes.status, fallbackErr)
        return NextResponse.json({ error: 'FMCSA API unavailable. Try again in a few minutes.' }, { status: 502 })
      }

      const fallbackData = await fallbackRes.json()
      return NextResponse.json({ carriers: fallbackData, source: 'company_census' })
    }

    const data = await res.json()
    return NextResponse.json({ carriers: data, source: 'sms_census' })

  } catch (e) {
    console.error('FMCSA query error:', e)
    return NextResponse.json({ error: 'Failed to query FMCSA: ' + e.message }, { status: 500 })
  }
}
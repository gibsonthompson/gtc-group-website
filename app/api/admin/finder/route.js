import { NextResponse } from 'next/server'

export async function POST(request) {
  const { states, minTrucks, maxTrucks } = await request.json()

  if (!states || states.length === 0) {
    return NextResponse.json({ error: 'No states provided' }, { status: 400 })
  }

  try {
    // Build SoQL query for the FMCSA SMS Census dataset
    // Dataset: SMS Input - Motor Carrier Census Information
    // ID: kjg3-diqy on data.transportation.gov
    const stateFilter = states.map(s => `PHY_STATE='${s}'`).join(' OR ')
    const where = `(${stateFilter}) AND NBR_POWER_UNIT >= ${minTrucks || 1} AND NBR_POWER_UNIT <= ${maxTrucks || 50} AND PC_FLAG != 'Y' AND EMAIL_ADDRESS IS NOT NULL`

    const params = new URLSearchParams({
      '$where': where,
      '$limit': '10000',
      '$select': 'DOT_NUMBER,LEGAL_NAME,DBA_NAME,PHY_CITY,PHY_STATE,TELEPHONE,EMAIL_ADDRESS,NBR_POWER_UNIT,DRIVER_TOTAL,CARRIER_OPERATION',
    })

    const url = `https://data.transportation.gov/resource/kjg3-diqy.json?${params.toString()}`
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' },
    })

    if (!res.ok) {
      // Try the Company Census File as fallback (different dataset ID)
      const fallbackParams = new URLSearchParams({
        '$where': where,
        '$limit': '10000',
        '$select': 'DOT_NUMBER,LEGAL_NAME,DBA_NAME,PHY_CITY,PHY_STATE,TELEPHONE,EMAIL_ADDRESS,NBR_POWER_UNIT,DRIVER_TOTAL,CARRIER_OPERATION',
      })

      const fallbackUrl = `https://data.transportation.gov/resource/az4n-8mr2.json?${fallbackParams.toString()}`
      const fallbackRes = await fetch(fallbackUrl, {
        headers: { 'Accept': 'application/json' },
      })

      if (!fallbackRes.ok) {
        return NextResponse.json({ error: 'FMCSA API unavailable. Try again later.' }, { status: 502 })
      }

      const fallbackData = await fallbackRes.json()
      // Normalize column names to lowercase
      const carriers = normalizeKeys(fallbackData)
      return NextResponse.json({ carriers, source: 'company_census' })
    }

    const data = await res.json()
    const carriers = normalizeKeys(data)
    return NextResponse.json({ carriers, source: 'sms_census' })

  } catch (e) {
    console.error('FMCSA query error:', e)
    return NextResponse.json({ error: 'Failed to query FMCSA: ' + e.message }, { status: 500 })
  }
}

function normalizeKeys(data) {
  return data.map(row => {
    const normalized = {}
    Object.entries(row).forEach(([key, val]) => {
      normalized[key.toLowerCase()] = val
    })
    return normalized
  })
}

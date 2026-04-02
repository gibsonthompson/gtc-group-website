import { NextResponse } from 'next/server'

export async function POST(request) {
  const { domains } = await request.json()

  if (!domains || !Array.isArray(domains) || domains.length === 0) {
    return NextResponse.json({ results: [] })
  }

  // Check up to 30 domains per request
  const batch = domains.slice(0, 30)

  const results = await Promise.all(
    batch.map(async (domain) => {
      const hasWebsite = await checkDomain(domain)
      return { domain, hasWebsite }
    })
  )

  return NextResponse.json({ results })
}

async function checkDomain(domain, timeout = 5000) {
  // Try HTTPS first, then HTTP
  for (const protocol of ['https', 'http']) {
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), timeout)

      const res = await fetch(`${protocol}://${domain}`, {
        method: 'HEAD',
        signal: controller.signal,
        redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0' },
      })

      clearTimeout(timer)

      // Any response means something is live
      if (res.status < 500) {
        return true
      }
    } catch (e) {
      // Timeout, connection refused, DNS failure — try next protocol
      continue
    }
  }

  return false
}

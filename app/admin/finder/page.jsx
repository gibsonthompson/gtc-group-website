'use client'

import { useState } from 'react'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

export default function FinderPage() {
  const [states, setStates] = useState(['GA'])
  const [minTrucks, setMinTrucks] = useState(1)
  const [maxTrucks, setMaxTrucks] = useState(50)
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [checking, setChecking] = useState(false)
  const [checkProgress, setCheckProgress] = useState({ done: 0, total: 0 })
  const [importing, setImporting] = useState(false)
  const [imported, setImported] = useState(false)
  const [selected, setSelected] = useState(new Set())
  const [error, setError] = useState('')
  const [stats, setStats] = useState(null)

  const FREE_DOMAINS = new Set([
    'gmail.com','yahoo.com','hotmail.com','aol.com','outlook.com','msn.com','live.com',
    'icloud.com','me.com','mail.com','ymail.com','rocketmail.com','att.net','sbcglobal.net',
    'bellsouth.net','comcast.net','verizon.net','cox.net','charter.net','earthlink.net',
    'juno.com','netzero.com','protonmail.com','proton.me','zoho.com','gmx.com',
  ])

  const toggleState = (st) => {
    setStates(prev => prev.includes(st) ? prev.filter(s => s !== st) : [...prev, st])
  }

  const handleSearch = async () => {
    if (states.length === 0) { setError('Select at least one state'); return }
    setSearching(true)
    setError('')
    setResults([])
    setStats(null)
    setSelected(new Set())
    setImported(false)

    try {
      // Query FMCSA via our API route
      const r = await fetch('/api/admin/finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ states, minTrucks, maxTrucks })
      })
      const data = await r.json()

      if (data.error) { setError(data.error); setSearching(false); return }

      const carriers = data.carriers || []

      // Layer 1: Filter by email domain
      const withEmail = carriers.filter(c => c.email_address && c.email_address.includes('@'))
      const freeEmail = []
      const customDomain = []

      withEmail.forEach(c => {
        const domain = c.email_address.split('@')[1]?.toLowerCase()
        if (!domain) return
        if (FREE_DOMAINS.has(domain)) {
          freeEmail.push({ ...c, _hasWebsite: false, _reason: 'Free email — no website' })
        } else {
          customDomain.push({ ...c, _domain: domain })
        }
      })

      setStats({
        total: carriers.length,
        withEmail: withEmail.length,
        freeEmail: freeEmail.length,
        customDomain: customDomain.length,
      })

      // Set free email results immediately
      setResults(freeEmail)
      setSearching(false)

      // Layer 2: Check custom domains server-side
      if (customDomain.length > 0) {
        setChecking(true)
        const uniqueDomains = [...new Set(customDomain.map(c => c._domain))]
        setCheckProgress({ done: 0, total: uniqueDomains.length })

        // Batch check domains in chunks of 30
        const domainResults = new Map()
        const batchSize = 30

        for (let i = 0; i < uniqueDomains.length; i += batchSize) {
          const batch = uniqueDomains.slice(i, i + batchSize)
          try {
            const r = await fetch('/api/admin/check-domains', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ domains: batch })
            })
            const d = await r.json()
            if (d.results) {
              d.results.forEach(dr => domainResults.set(dr.domain, dr.hasWebsite))
            }
          } catch (e) {
            // If a batch fails, assume no website (conservative)
            batch.forEach(d => domainResults.set(d, false))
          }
          setCheckProgress({ done: Math.min(i + batchSize, uniqueDomains.length), total: uniqueDomains.length })
        }

        // Filter custom domain carriers — keep only those without a live website
        const noWebsiteCustom = customDomain.filter(c => {
          const hasWebsite = domainResults.get(c._domain)
          return !hasWebsite
        }).map(c => ({ ...c, _hasWebsite: false, _reason: 'Domain not live' }))

        setStats(prev => ({ ...prev, deadDomain: noWebsiteCustom.length, liveWebsite: customDomain.length - noWebsiteCustom.length }))
        setResults(prev => [...prev, ...noWebsiteCustom])
        setChecking(false)
      }

    } catch (e) {
      setError('Search failed: ' + e.message)
      setSearching(false)
    }
  }

  const toggleSelect = (idx) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx); else next.add(idx)
      return next
    })
  }

  const selectAll = () => {
    if (selected.size === results.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(results.map((_, i) => i)))
    }
  }

  const handleImport = async () => {
    const leads = results
      .filter((_, i) => selected.has(i))
      .map(c => ({
        name: c.dba_name || c.legal_name || '',
        email: (c.email_address || '').toLowerCase(),
        phone: (c.telephone || '').replace(/[^0-9]/g, ''),
        company: c.legal_name || '',
        dot_number: String(c.dot_number || ''),
        fleet_size: String(c.nbr_power_unit || ''),
        area: [c.phy_city, c.phy_state].filter(Boolean).join(', '),
        source: 'fmcsa_finder',
      }))

    if (leads.length === 0) return
    setImporting(true)

    try {
      const r = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bulk: leads })
      })
      const d = await r.json()
      setImported(true)
      setImporting(false)
    } catch (e) {
      setError('Import failed')
      setImporting(false)
    }
  }

  const formatPhone = (p) => {
    if (!p) return ''
    const c = String(p).replace(/\D/g, '')
    if (c.length === 10) return '(' + c.slice(0,3) + ') ' + c.slice(3,6) + '-' + c.slice(6)
    return p
  }

  return (
    <div className="px-4 sm:px-6 py-5 sm:py-8">
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Lead Finder</h1>
        <p className="text-sm text-gray-500 mt-0.5">Find carriers without a website from FMCSA data</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 mb-5">
        {/* State Selection */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-700 mb-2">States</label>
          <div className="flex flex-wrap gap-1.5">
            {US_STATES.map(st => (
              <button
                key={st}
                onClick={() => toggleState(st)}
                className={'px-2.5 py-1 rounded-md text-xs font-medium transition-colors ' + (states.includes(st) ? 'bg-[#0a1628] text-[#c9a227]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')}
              >
                {st}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setStates(['GA','FL','SC','NC','TN','AL'])} className="text-[10px] text-[#c9a227] font-medium hover:underline">Southeast</button>
            <button onClick={() => setStates(['TX','OK','AR','LA','NM'])} className="text-[10px] text-[#c9a227] font-medium hover:underline">South Central</button>
            <button onClick={() => setStates(['CA','OR','WA','NV','AZ'])} className="text-[10px] text-[#c9a227] font-medium hover:underline">West Coast</button>
            <button onClick={() => setStates([...US_STATES])} className="text-[10px] text-[#c9a227] font-medium hover:underline">All</button>
            <button onClick={() => setStates([])} className="text-[10px] text-gray-400 font-medium hover:underline">Clear</button>
          </div>
        </div>

        {/* Fleet Size */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Min Trucks</label>
            <input type="number" value={minTrucks} onChange={e => setMinTrucks(parseInt(e.target.value) || 1)} min={1} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Max Trucks</label>
            <input type="number" value={maxTrucks} onChange={e => setMaxTrucks(parseInt(e.target.value) || 50)} min={1} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={searching || checking || states.length === 0}
          className="w-full py-3 bg-[#0a1628] text-white font-semibold rounded-lg hover:bg-[#162d54] disabled:opacity-50 active:scale-[0.98] transition-all text-sm"
        >
          {searching ? 'Searching FMCSA...' : checking ? 'Checking websites...' : 'Search Carriers'}
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-lg p-3 text-sm bg-red-50 border border-red-200 text-red-700">{error}</div>
      )}

      {/* Progress */}
      {(searching || checking) && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
          {searching && (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-[#c9a227] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-700">Querying FMCSA database...</p>
            </div>
          )}
          {checking && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-700">Checking domains for live websites...</p>
                <span className="text-xs text-gray-500">{checkProgress.done}/{checkProgress.total}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#c9a227] rounded-full transition-all duration-300" style={{ width: (checkProgress.total > 0 ? (checkProgress.done / checkProgress.total) * 100 : 0) + '%' }} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Stats */}
      {stats && !searching && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <p className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.total?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Carriers found</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.withEmail?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Have email</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#c9a227]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.freeEmail?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Free email (no site)</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#c9a227]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{(stats.deadDomain || 0).toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Dead domain</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-5">
          <div className="px-4 sm:px-5 py-3 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={selectAll} className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-[#0a1628]">
                <div className={'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ' + (selected.size === results.length ? 'bg-[#c9a227] border-[#c9a227]' : 'border-gray-300')}>
                  {selected.size === results.length && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                </div>
                {selected.size === results.length ? 'Deselect all' : 'Select all'} ({results.length})
              </button>
            </div>
            {selected.size > 0 && (
              <button
                onClick={handleImport}
                disabled={importing || imported}
                className={'px-4 py-2 text-xs font-semibold rounded-lg transition-all ' + (imported ? 'bg-green-600 text-white' : 'bg-[#0a1628] text-white hover:bg-[#162d54] active:scale-[0.98]')}
              >
                {importing ? 'Importing...' : imported ? `Imported ${selected.size} leads` : `Import ${selected.size} leads`}
              </button>
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-4 py-2.5 w-10"></th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Company</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Phone</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Trucks</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Location</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase">Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {results.map((c, i) => (
                  <tr key={i} onClick={() => toggleSelect(i)} className="hover:bg-gray-50/50 cursor-pointer transition-colors">
                    <td className="px-4 py-3">
                      <div className={'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ' + (selected.has(i) ? 'bg-[#c9a227] border-[#c9a227]' : 'border-gray-300')}>
                        {selected.has(i) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-medium text-gray-900 text-sm">{c.dba_name || c.legal_name}</p>
                      {c.dba_name && c.legal_name && c.dba_name !== c.legal_name && <p className="text-xs text-gray-400">{c.legal_name}</p>}
                      {c.dot_number && <p className="text-xs text-gray-400">DOT {c.dot_number}</p>}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{(c.email_address || '').toLowerCase()}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{formatPhone(c.telephone)}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{c.nbr_power_unit || '--'}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{[c.phy_city, c.phy_state].filter(Boolean).join(', ')}</td>
                    <td className="px-4 py-3"><span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{c._reason}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-100">
            {results.map((c, i) => (
              <div key={i} onClick={() => toggleSelect(i)} className="p-4 active:bg-gray-50 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ' + (selected.has(i) ? 'bg-[#c9a227] border-[#c9a227]' : 'border-gray-300')}>
                    {selected.has(i) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{c.dba_name || c.legal_name}</p>
                    <p className="text-xs text-gray-500">{(c.email_address || '').toLowerCase()}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                      <span>{c.nbr_power_unit || '?'} trucks</span>
                      <span>{[c.phy_city, c.phy_state].filter(Boolean).join(', ')}</span>
                    </div>
                    <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">{c._reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && !searching && !checking && stats === null && (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <p className="text-sm text-gray-500">Select states and fleet size, then search</p>
          <p className="text-xs text-gray-400 mt-1">Pulls directly from the FMCSA census database</p>
        </div>
      )}
    </div>
  )
}

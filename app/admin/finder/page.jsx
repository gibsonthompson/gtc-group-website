'use client'

import { useState } from 'react'

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
]

const FREE_DOMAINS = new Set([
  'gmail.com','yahoo.com','hotmail.com','aol.com','outlook.com','msn.com','live.com',
  'icloud.com','me.com','mail.com','ymail.com','rocketmail.com','att.net','sbcglobal.net',
  'bellsouth.net','comcast.net','verizon.net','cox.net','charter.net','earthlink.net',
  'juno.com','netzero.com','protonmail.com','proton.me','zoho.com','gmx.com',
])

export default function FinderPage() {
  const [states, setStates] = useState(['GA'])
  const [minTrucks, setMinTrucks] = useState(1)
  const [maxTrucks, setMaxTrucks] = useState(50)
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [importing, setImporting] = useState(false)
  const [imported, setImported] = useState(false)
  const [importProgress, setImportProgress] = useState({ done: 0, total: 0 })
  const [selected, setSelected] = useState(new Set())
  const [error, setError] = useState('')
  const [stats, setStats] = useState(null)

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
    setImportProgress({ done: 0, total: 0 })

    try {
      const r = await fetch('/api/admin/finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ states, minTrucks, maxTrucks })
      })
      const data = await r.json()

      if (data.error) { setError(data.error); setSearching(false); return }

      const carriers = data.carriers || []

      // Filter: only carriers with free email domains (gmail, yahoo, etc)
      // These are guaranteed reachable AND guaranteed no website
      const leads = carriers
        .filter(c => c.email_address && c.email_address.includes('@'))
        .filter(c => {
          const domain = c.email_address.split('@')[1]?.toLowerCase()
          return domain && FREE_DOMAINS.has(domain)
        })

      setStats({ total: carriers.length, withEmail: carriers.filter(c => c.email_address?.includes('@')).length, leads: leads.length })
      setResults(leads)
    } catch (e) {
      setError('Search failed: ' + e.message)
    } finally {
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
    if (selected.size === results.length) setSelected(new Set())
    else setSelected(new Set(results.map((_, i) => i)))
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

    if (leads.length === 0) { setError('No leads selected'); return }

    setImporting(true)
    setError('')
    setImportProgress({ done: 0, total: leads.length })

    const batchSize = 200
    let totalImported = 0

    try {
      for (let i = 0; i < leads.length; i += batchSize) {
        const batch = leads.slice(i, i + batchSize)
        const r = await fetch('/api/admin/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bulk: batch })
        })

        if (!r.ok) {
          const errData = await r.json().catch(() => ({}))
          setError('Import failed on batch ' + Math.floor(i / batchSize + 1) + ': ' + (errData.error || r.status))
          break
        }

        const d = await r.json()
        totalImported += d.count || batch.length
        setImportProgress({ done: totalImported, total: leads.length })
      }

      if (totalImported > 0) setImported(true)
    } catch (e) {
      setError('Import failed: ' + e.message)
    } finally {
      setImporting(false)
    }
  }

  const formatPhone = (p) => {
    if (!p) return ''
    const c = String(p).replace(/\D/g, '')
    if (c.length === 10) return '(' + c.slice(0, 3) + ') ' + c.slice(3, 6) + '-' + c.slice(6)
    return p
  }

  return (
    <div className="px-4 sm:px-6 py-5 sm:py-8">
      <div className="mb-5">
        <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Lead Finder</h1>
        <p className="text-sm text-gray-500 mt-0.5">Carriers with no website and a reachable email</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 mb-5">
        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-700 mb-2">States</label>
          <div className="flex flex-wrap gap-1.5">
            {US_STATES.map(st => (
              <button key={st} onClick={() => toggleState(st)} className={'px-2.5 py-1 rounded-md text-xs font-medium transition-colors ' + (states.includes(st) ? 'bg-[#0a1628] text-[#c9a227]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200')}>
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

        <button onClick={handleSearch} disabled={searching || states.length === 0} className="w-full py-3 bg-[#0a1628] text-white font-semibold rounded-lg hover:bg-[#162d54] disabled:opacity-50 active:scale-[0.98] transition-all text-sm">
          {searching ? 'Searching FMCSA...' : 'Search Carriers'}
        </button>
      </div>

      {error && <div className="mb-4 rounded-lg p-3 text-sm bg-red-50 border border-red-200 text-red-700">{error}</div>}

      {searching && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5 flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#c9a227] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-700">Querying FMCSA database...</p>
        </div>
      )}

      {/* Stats */}
      {stats && !searching && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.total?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Carriers found</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.withEmail?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">Have email</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#c9a227]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.leads?.toLocaleString()}</p>
              <p className="text-[10px] text-gray-500">No website + reachable</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-5">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <button onClick={selectAll} className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-[#0a1628]">
              <div className={'w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ' + (selected.size === results.length ? 'bg-[#c9a227] border-[#c9a227]' : 'border-gray-300')}>
                {selected.size === results.length && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
              {selected.size === results.length ? 'Deselect all' : 'Select all'} ({results.length})
            </button>
            {selected.size > 0 && (
              <button onClick={handleImport} disabled={importing || imported} className={'px-4 py-2 text-xs font-semibold rounded-lg transition-all ' + (imported ? 'bg-green-600 text-white' : 'bg-[#0a1628] text-white hover:bg-[#162d54] active:scale-[0.98]')}>
                {importing ? `Importing ${importProgress.done}/${importProgress.total}...` : imported ? `Imported ${importProgress.done} leads` : `Import ${selected.size} leads`}
              </button>
            )}
          </div>

          <div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto">
            {results.map((c, i) => (
              <div key={i} onClick={() => toggleSelect(i)} className="p-4 hover:bg-gray-50/50 cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <div className={'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ' + (selected.has(i) ? 'bg-[#c9a227] border-[#c9a227]' : 'border-gray-300')}>
                    {selected.has(i) && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-gray-900 text-sm truncate">{c.dba_name || c.legal_name}</p>
                      <span className="flex-shrink-0 text-xs text-gray-400">{c.nbr_power_unit || '?'} trucks</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{(c.email_address || '').toLowerCase()}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      {c.dot_number && <span className="text-[10px] text-gray-400">DOT {c.dot_number}</span>}
                      <span className="text-[10px] text-gray-400">{[c.phy_city, c.phy_state].filter(Boolean).join(', ')}</span>
                      {c.telephone && <span className="text-[10px] text-gray-400">{formatPhone(c.telephone)}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && !searching && stats === null && (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <p className="text-sm text-gray-500">Select states and fleet size, then search</p>
          <p className="text-xs text-gray-400 mt-1">Finds for-hire carriers with no website and a working email</p>
        </div>
      )}

      {stats && results.length === 0 && !searching && (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <p className="text-sm text-gray-500">No carriers matched your filters</p>
          <p className="text-xs text-gray-400 mt-1">Try expanding the state selection or fleet size range</p>
        </div>
      )}
    </div>
  )
}
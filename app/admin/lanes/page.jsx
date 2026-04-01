'use client'

import { useState, useEffect } from 'react'
import LaneCSVImport from '../components/LaneCSVImport'

export default function LanesPage() {
  const [lanes, setLanes] = useState([])
  const [loading, setLoading] = useState(true)
  const [showImport, setShowImport] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => { fetchLanes() }, [])

  const fetchLanes = async () => {
    try {
      const r = await fetch('/api/admin/lanes')
      const d = await r.json()
      if (d.lanes) setLanes(d.lanes)
    } catch (e) {} finally { setLoading(false) }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this lane?')) return
    try {
      await fetch('/api/admin/lanes', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
      fetchLanes()
    } catch (e) {}
  }

  const filtered = filter === 'all' ? lanes : lanes.filter(l => l.status === filter)

  if (loading) return <div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-3 border-[#0a1628] border-t-transparent rounded-full animate-spin" /></div>

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Lanes</h1>
          <p className="text-sm text-gray-500">{lanes.length} total lanes</p>
        </div>
        <button onClick={() => setShowImport(true)} className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-lg hover:bg-[#162d54] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
          Import CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-4">
        {[{ v: 'all', l: 'All' }, { v: 'active', l: 'Active' }, { v: 'pending', l: 'Pending' }, { v: 'inactive', l: 'Inactive' }].map(f => (
          <button key={f.v} onClick={() => setFilter(f.v)} className={'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ' + (filter === f.v ? 'bg-[#0a1628] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50')}>
            {f.l}
            <span className={'ml-1.5 ' + (filter === f.v ? 'text-white/60' : 'text-gray-400')}>
              {f.v === 'all' ? lanes.length : lanes.filter(l => l.status === f.v).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          <p className="text-gray-500 text-sm">No lanes yet</p>
          <button onClick={() => setShowImport(true)} className="mt-2 text-sm text-[#c9a227] font-medium hover:underline">Import from CSV</button>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50/80">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Origin</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Destination</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Miles</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Rate</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Equipment</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Shipper</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-3.5 text-sm text-gray-900">{l.origin_city}, {l.origin_state}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-900">{l.destination_city}, {l.destination_state}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{l.miles || '--'}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{l.total_rate ? '$' + Number(l.total_rate).toLocaleString() : '--'}{l.rate_per_mile ? ` ($${l.rate_per_mile}/mi)` : ''}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{l.equipment_type || '--'}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{l.shipper || '--'}</td>
                    <td className="px-5 py-3.5">
                      <span className={'inline-flex px-2 py-0.5 rounded-full text-xs font-medium ' + (l.status === 'active' ? 'bg-green-100 text-green-700' : l.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500')}>{l.status}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button onClick={() => handleDelete(l.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((l) => (
              <div key={l.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{l.origin_city}, {l.origin_state} → {l.destination_city}, {l.destination_state}</p>
                    {l.shipper && <p className="text-xs text-gray-500">{l.shipper}</p>}
                  </div>
                  <span className={'inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ' + (l.status === 'active' ? 'bg-green-100 text-green-700' : l.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500')}>{l.status}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {l.miles && <span>{l.miles} mi</span>}
                  {l.total_rate && <span>${Number(l.total_rate).toLocaleString()}</span>}
                  {l.equipment_type && <span>{l.equipment_type}</span>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <LaneCSVImport isOpen={showImport} onClose={() => setShowImport(false)} onImportComplete={fetchLanes} />
    </div>
  )
}
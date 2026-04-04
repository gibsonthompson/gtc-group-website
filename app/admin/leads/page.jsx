'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import LeadCSVImport from '../components/LeadCSVImport'

const STATUSES = [
  { value: 'new', label: 'New', bg: 'bg-blue-100 text-blue-700' },
  { value: 'all', label: 'All' },
  { value: 'contacted', label: 'Contacted', bg: 'bg-yellow-100 text-yellow-700' },
  { value: 'responded', label: 'Responded', bg: 'bg-green-100 text-green-700' },
  { value: 'meeting_set', label: 'Meeting Set', bg: 'bg-purple-100 text-purple-700' },
  { value: 'client', label: 'Client', bg: 'bg-emerald-100 text-emerald-700' },
  { value: 'not_interested', label: 'Not Interested', bg: 'bg-gray-100 text-gray-500' },
]

const SOURCES = [
  { value: 'all', label: 'All Sources' },
  { value: 'fmcsa_finder', label: 'Finder', bg: 'bg-orange-100 text-orange-700' },
  { value: 'manual', label: 'Manual', bg: 'bg-gray-100 text-gray-600' },
  { value: 'csv_import', label: 'CSV', bg: 'bg-indigo-100 text-indigo-700' },
]

const getSourceBadge = (source) => {
  if (source === 'fmcsa_finder') return { label: 'Finder', bg: 'bg-orange-100 text-orange-700' }
  if (source === 'csv_import') return { label: 'CSV', bg: 'bg-indigo-100 text-indigo-700' }
  return null
}

export default function LeadsPage() {
  const searchParams = useSearchParams()
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(searchParams.get('status') || 'new')
  const [sourceFilter, setSourceFilter] = useState(searchParams.get('source') || 'all')
  const [search, setSearch] = useState('')
  const [showImport, setShowImport] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newLead, setNewLead] = useState({ name: '', email: '', phone: '', company: '', dot_number: '', fleet_size: '', area: '' })
  const [adding, setAdding] = useState(false)
  const [deleting, setDeleting] = useState(null)

  const fetchLeads = useCallback(async () => {
    try {
      const r = await fetch('/api/admin/leads')
      const d = await r.json()
      if (d.leads) setLeads(d.leads)
    } catch (e) {
      console.error('Failed to fetch leads:', e)
    } finally {
      setLoading(false)
    }
  }, [])

  // Fetch on mount + re-fetch when page becomes visible (back from email send)
  useEffect(() => {
    fetchLeads()
    const handleFocus = () => fetchLeads()
    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') fetchLeads()
    })
    return () => {
      window.removeEventListener('focus', handleFocus)
    }
  }, [fetchLeads])

  const handleAddLead = async (e) => {
    e.preventDefault()
    if (!newLead.name.trim()) return
    setAdding(true)
    try {
      const r = await fetch('/api/admin/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newLead) })
      if (r.ok) {
        setNewLead({ name: '', email: '', phone: '', company: '', dot_number: '', fleet_size: '', area: '' })
        setShowAddForm(false)
        fetchLeads()
      }
    } catch (e) {} finally { setAdding(false) }
  }

  const handleDelete = async (e, id) => {
    e.preventDefault() // Don't navigate to detail page
    e.stopPropagation()
    setDeleting(id)
    try {
      await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      // Remove from local state immediately — no re-fetch needed
      setLeads(prev => prev.filter(l => l.id !== id))
    } catch (e) {
      console.error('Delete failed:', e)
    } finally {
      setDeleting(null)
    }
  }

  const filtered = leads.filter(l => {
    if (filter !== 'all' && l.status !== filter) return false
    if (sourceFilter !== 'all' && (l.source || 'manual') !== sourceFilter) return false
    if (search) {
      const q = search.toLowerCase()
      return l.name?.toLowerCase().includes(q) || l.email?.toLowerCase().includes(q) || l.company?.toLowerCase().includes(q) || l.dot_number?.toLowerCase().includes(q) || l.area?.toLowerCase().includes(q)
    }
    return true
  })

  const getStatusBadge = (status) => STATUSES.find(s => s.value === status)?.bg || 'bg-gray-100 text-gray-600'
  const getStatusLabel = (status) => STATUSES.find(s => s.value === status)?.label || status
  const getStatusCount = (status) => {
    const base = sourceFilter === 'all' ? leads : leads.filter(l => (l.source || 'manual') === sourceFilter)
    return status === 'all' ? base.length : base.filter(l => l.status === status).length
  }
  const getSourceCount = (source) => {
    const base = filter === 'all' ? leads : leads.filter(l => l.status === filter)
    return source === 'all' ? base.length : base.filter(l => (l.source || 'manual') === source).length
  }
  const formatPhone = (phone) => { if (!phone) return ''; const c = phone.replace(/\D/g, ''); if (c.length === 10) return '(' + c.slice(0, 3) + ') ' + c.slice(3, 6) + '-' + c.slice(6); return phone }
  const timeAgo = (d) => { const s = Math.floor((Date.now() - new Date(d)) / 1000); if (s < 3600) return Math.floor(s / 60) + 'm ago'; if (s < 86400) return Math.floor(s / 3600) + 'h ago'; if (s < 604800) return Math.floor(s / 86400) + 'd ago'; return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }

  const finderCount = leads.filter(l => l.source === 'fmcsa_finder').length

  if (loading) return <div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-3 border-[#0a1628] border-t-transparent rounded-full animate-spin" /></div>

  return (
    <div className="px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>Leads</h1>
          <p className="text-sm text-gray-500">{leads.length} total{finderCount > 0 ? ` · ${finderCount} from Finder` : ''}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowImport(true)} className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            <span className="hidden sm:inline">CSV</span>
          </button>
          <button onClick={() => setShowAddForm(!showAddForm)} className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-lg hover:bg-[#162d54] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddLead} className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-5">
          <h3 className="font-semibold text-[#0a1628] mb-4 text-sm">Add Lead</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <input type="text" placeholder="Name *" value={newLead.name} onChange={(e) => setNewLead(p => ({ ...p, name: e.target.value }))} required style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            <input type="email" placeholder="Email" value={newLead.email} onChange={(e) => setNewLead(p => ({ ...p, email: e.target.value }))} style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            <input type="tel" placeholder="Phone" value={newLead.phone} onChange={(e) => setNewLead(p => ({ ...p, phone: e.target.value }))} style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            <input type="text" placeholder="Company" value={newLead.company} onChange={(e) => setNewLead(p => ({ ...p, company: e.target.value }))} style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            <input type="text" placeholder="DOT Number" value={newLead.dot_number} onChange={(e) => setNewLead(p => ({ ...p, dot_number: e.target.value }))} style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
            <input type="text" placeholder="Fleet Size" value={newLead.fleet_size} onChange={(e) => setNewLead(p => ({ ...p, fleet_size: e.target.value }))} style={{ fontSize: '16px' }} className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button type="button" onClick={() => setShowAddForm(false)} className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">Cancel</button>
            <button type="submit" disabled={adding || !newLead.name.trim()} className="px-4 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-lg hover:bg-[#162d54] disabled:opacity-50">{adding ? 'Adding...' : 'Add Lead'}</button>
          </div>
        </form>
      )}

      {/* Search */}
      <div className="mb-3">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input type="text" placeholder="Search name, email, company, DOT..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ fontSize: '16px' }} className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none" />
        </div>
      </div>

      {/* Source Filters */}
      <div className="mb-3 -mx-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1.5 min-w-max sm:min-w-0 sm:flex-wrap">
          {SOURCES.filter(s => s.value === 'all' || getSourceCount(s.value) > 0).map((s) => (
            <button key={s.value} onClick={() => setSourceFilter(s.value)} className={'flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ' + (sourceFilter === s.value ? 'bg-[#c9a227] text-[#0a1628]' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50')}>
              {s.label}<span className={'ml-1 ' + (sourceFilter === s.value ? 'text-[#0a1628]/50' : 'text-gray-400')}>{getSourceCount(s.value)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Status Filters */}
      <div className="mb-4 -mx-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
          {STATUSES.map((s) => (
            <button key={s.value} onClick={() => setFilter(s.value)} className={'flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ' + (filter === s.value ? 'bg-[#0a1628] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50')}>
              {s.label}<span className={'ml-1.5 ' + (filter === s.value ? 'text-white/60' : 'text-gray-400')}>{getStatusCount(s.value)}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-3">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

      {/* Lead Cards */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-10 text-center">
            <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <p className="text-gray-500 text-sm">{search ? 'No leads match your search' : 'No leads yet'}</p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <button onClick={() => setShowAddForm(true)} className="text-sm text-[#c9a227] font-medium hover:underline">Add manually</button>
              <span className="text-gray-300">or</span>
              <button onClick={() => setShowImport(true)} className="text-sm text-[#c9a227] font-medium hover:underline">Import CSV</button>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filtered.map((l) => {
              const srcBadge = getSourceBadge(l.source)
              return (
                <div key={l.id} className="relative group">
                  <Link href={'/admin/leads/' + l.id} className="block p-4 pr-12 hover:bg-gray-50/50 active:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-semibold text-gray-900 text-sm truncate">{l.name}</p>
                          {srcBadge && <span className={'flex-shrink-0 inline-flex px-1.5 py-0.5 rounded text-[9px] font-medium ' + srcBadge.bg}>{srcBadge.label}</span>}
                        </div>
                        <p className="text-xs text-gray-500">{l.company || 'No company'}{l.dot_number ? ' · DOT ' + l.dot_number : ''}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {l.email && <p className="text-xs text-gray-400 truncate">{l.email}</p>}
                          {l.phone && <p className="text-xs text-gray-400">{formatPhone(l.phone)}</p>}
                        </div>
                        {l.area && <p className="text-[10px] text-gray-400 mt-0.5">{l.area}</p>}
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        <span className={'inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ' + getStatusBadge(l.status)}>{getStatusLabel(l.status)}</span>
                        <p className="text-[10px] text-gray-400">{timeAgo(l.created_at)}</p>
                        {l.outreach_count > 0 && <p className="text-[10px] text-gray-400">{l.outreach_count} sent</p>}
                      </div>
                    </div>
                  </Link>
                  {/* Delete button */}
                  <button
                    onClick={(e) => handleDelete(e, l.id)}
                    disabled={deleting === l.id}
                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-gray-300 hover:text-red-500 hover:bg-red-50 active:bg-red-100 transition-colors sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    {deleting === l.id ? (
                      <div className="w-3 h-3 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <LeadCSVImport isOpen={showImport} onClose={() => setShowImport(false)} onImportComplete={fetchLeads} />
    </div>
  )
}
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [emailsToday, setEmailsToday] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [leads, setLeads] = useState([])
  const [searchFocused, setSearchFocused] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const [statsRes, leadsRes] = await Promise.all([
        fetch('/api/admin/email-stats'),
        fetch('/api/admin/leads'),
      ])
      const statsData = await statsRes.json()
      const leadsData = await leadsRes.json()
      setEmailsToday(statsData.today || 0)
      setLeads(leadsData.leads || [])
    } catch (e) {
      console.error('Dashboard fetch error:', e)
    } finally {
      setLoading(false)
    }
  }

  const emailPct = Math.min((emailsToday / 100) * 100, 100)
  const meterColor = emailsToday >= 100 ? '#16a34a' : emailsToday >= 50 ? '#c9a227' : '#0a1628'
  const meterBg = emailsToday >= 100 ? '#dcfce7' : emailsToday >= 50 ? '#fef9c3' : '#e8e6e1'

  const formatPhone = (phone) => {
    if (!phone) return ''
    const c = phone.replace(/\D/g, '')
    if (c.length === 10) return '(' + c.slice(0, 3) + ') ' + c.slice(3, 6) + '-' + c.slice(6)
    return phone
  }

  const searchResults = search.trim().length >= 2 ? leads.filter(l => {
    const ql = search.toLowerCase()
    const digits = search.replace(/\D/g, '')
    const phoneDigits = (l.phone || '').replace(/\D/g, '')
    return (l.name?.toLowerCase().includes(ql)) ||
      (l.email?.toLowerCase().includes(ql)) ||
      (l.company?.toLowerCase().includes(ql)) ||
      (l.dot_number?.toLowerCase().includes(ql)) ||
      (digits.length >= 2 && phoneDigits.includes(digits))
  }).slice(0, 8) : []

  const showResults = searchFocused && search.trim().length >= 2

  const getStatusBadge = (status) => {
    const map = {
      new: 'bg-blue-100 text-blue-700',
      contacted: 'bg-yellow-100 text-yellow-700',
      responded: 'bg-green-100 text-green-700',
      meeting_set: 'bg-purple-100 text-purple-700',
      client: 'bg-emerald-100 text-emerald-700',
      not_interested: 'bg-gray-100 text-gray-500',
    }
    return map[status] || 'bg-gray-100 text-gray-600'
  }
  const getStatusLabel = (status) => {
    const map = { new: 'New', contacted: 'Contacted', responded: 'Responded', meeting_set: 'Meeting Set', client: 'Client', not_interested: 'Not Interested' }
    return map[status] || status
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-3 border-[#0a1628] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 py-5 sm:py-8">
      {/* Search */}
      <div className="relative mb-5" ref={searchRef}>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            placeholder="Search by phone, name, email, company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            style={{ fontSize: '16px' }}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#c9a227]/30 focus:border-[#c9a227] outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>
        {showResults && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden max-h-[60vh] overflow-y-auto">
            {searchResults.length === 0 ? (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-gray-400">No leads found</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {searchResults.map((l) => (
                  <Link key={l.id} href={'/admin/leads/' + l.id} className="block px-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-sm truncate">{l.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{l.company || 'No company'}{l.dot_number ? ' · DOT ' + l.dot_number : ''}</p>
                        <div className="flex items-center gap-3 mt-1">
                          {l.phone && (
                            <span className="text-xs text-gray-600 font-medium">{formatPhone(l.phone)}</span>
                          )}
                          {l.email && (
                            <span className="text-xs text-gray-400 truncate">{l.email}</span>
                          )}
                        </div>
                      </div>
                      <span className={'flex-shrink-0 inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ' + getStatusBadge(l.status)}>{getStatusLabel(l.status)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchResults.length > 0 && (
              <Link href={'/admin/leads?search=' + encodeURIComponent(search)} className="block px-4 py-2.5 text-center text-xs font-medium text-[#c9a227] bg-gray-50 hover:bg-gray-100 border-t border-gray-100">
                View all in Leads →
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Email Meter */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-semibold text-[#0a1628]">Emails Sent Today</h2>
            <p className="text-xs text-gray-400 mt-0.5">Daily outreach progress</p>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: meterColor, fontFamily: "'Libre Baskerville', Georgia, serif" }}>{emailsToday}</span>
            <span className="text-sm text-gray-400 ml-1">/ 100</span>
          </div>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: meterBg }}>
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: emailPct + '%',
              backgroundColor: meterColor,
              minWidth: emailsToday > 0 ? '12px' : '0',
            }}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-gray-400">0</span>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-400">50</span>
            <span className="text-[10px] text-gray-400">100</span>
          </div>
        </div>
        {emailsToday >= 100 && (
          <div className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <p className="text-xs text-green-700 font-medium">Daily goal reached</p>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Link href="/admin/leads" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#c9a227] hover:shadow-sm transition-all group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] mx-auto mb-2 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          <p className="text-xs font-medium text-gray-600">Add Lead</p>
        </Link>
        <Link href="/admin/templates" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#c9a227] hover:shadow-sm transition-all group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] mx-auto mb-2 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <p className="text-xs font-medium text-gray-600">Templates</p>
        </Link>
        <Link href="/admin/lanes" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#c9a227] hover:shadow-sm transition-all group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] mx-auto mb-2 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
          <p className="text-xs font-medium text-gray-600">Lanes</p>
        </Link>
        <a href="mailto:gthompson@gtcadvisors.com" className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#c9a227] hover:shadow-sm transition-all group">
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] mx-auto mb-2 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.065 2.05-1.37 2.772-1.153.508.153.942.535 1.025 1.059.108.685-.378 1.232-.816 1.627-.39.354-.816.659-.816 1.267V13m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="text-xs font-medium text-gray-600">Support</p>
        </a>
      </div>
    </div>
  )
}
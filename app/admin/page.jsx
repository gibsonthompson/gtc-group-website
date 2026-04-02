'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ emailsToday: 0, totalLeads: 0, newLeads: 0, contactedLeads: 0, meetingsSet: 0, clients: 0, respondedLeads: 0 })
  const [recentOutreach, setRecentOutreach] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const [statsRes, leadsRes, outreachRes] = await Promise.all([
        fetch('/api/admin/email-stats'),
        fetch('/api/admin/leads'),
        fetch('/api/admin/outreach?limit=8'),
      ])
      const statsData = await statsRes.json()
      const leadsData = await leadsRes.json()
      const outreachData = await outreachRes.json()

      const leads = leadsData.leads || []
      setStats({
        emailsToday: statsData.today || 0,
        totalLeads: leads.length,
        newLeads: leads.filter(l => l.status === 'new').length,
        contactedLeads: leads.filter(l => l.status === 'contacted').length,
        respondedLeads: leads.filter(l => l.status === 'responded').length,
        meetingsSet: leads.filter(l => l.status === 'meeting_set').length,
        clients: leads.filter(l => l.status === 'client').length,
      })
      setRecentOutreach(outreachData.outreach || [])
    } catch (e) {
      console.error('Dashboard fetch error:', e)
    } finally {
      setLoading(false)
    }
  }

  const emailPct = Math.min((stats.emailsToday / 100) * 100, 100)
  const meterColor = stats.emailsToday >= 100 ? '#16a34a' : stats.emailsToday >= 50 ? '#c9a227' : '#0a1628'
  const meterBg = stats.emailsToday >= 100 ? '#dcfce7' : stats.emailsToday >= 50 ? '#fef9c3' : '#e8e6e1'

  const timeAgo = (d) => {
    if (!d) return ''
    const s = Math.floor((Date.now() - new Date(d)) / 1000)
    if (s < 60) return 'just now'
    if (s < 3600) return Math.floor(s / 60) + 'm ago'
    if (s < 86400) return Math.floor(s / 3600) + 'h ago'
    return Math.floor(s / 86400) + 'd ago'
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
      {/* Email Meter */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-semibold text-[#0a1628]">Emails Sent Today</h2>
            <p className="text-xs text-gray-400 mt-0.5">Daily outreach progress</p>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: meterColor, fontFamily: "'Libre Baskerville', Georgia, serif" }}>{stats.emailsToday}</span>
            <span className="text-sm text-gray-400 ml-1">/ 100</span>
          </div>
        </div>
        <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: meterBg }}>
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: emailPct + '%',
              backgroundColor: meterColor,
              minWidth: stats.emailsToday > 0 ? '12px' : '0',
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
        {stats.emailsToday >= 100 && (
          <div className="mt-3 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            <p className="text-xs text-green-700 font-medium">Daily goal reached</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Pipeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#0a1628]">Pipeline</h2>
            <span className="text-xs text-gray-400">{stats.totalLeads} total</span>
          </div>
          <div className="space-y-3">
            {[
              { label: 'New', count: stats.newLeads, color: '#3b82f6' },
              { label: 'Contacted', count: stats.contactedLeads, color: '#c9a227' },
              { label: 'Responded', count: stats.respondedLeads, color: '#22c55e' },
              { label: 'Meeting Set', count: stats.meetingsSet, color: '#8b5cf6' },
              { label: 'Client', count: stats.clients, color: '#0a1628' },
            ].map((stage) => {
              const pct = stats.totalLeads > 0 ? (stage.count / stats.totalLeads) * 100 : 0
              return (
                <div key={stage.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">{stage.label}</span>
                    <span className="text-xs font-semibold text-gray-800">{stage.count}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-500" style={{ width: Math.max(pct, stage.count > 0 ? 3 : 0) + '%', backgroundColor: stage.color }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Outreach */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#0a1628]">Recent Outreach</h2>
            <Link href="/admin/leads" className="text-xs text-[#c9a227] font-medium hover:underline">View all</Link>
          </div>
          {recentOutreach.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm text-gray-400">No outreach yet</p>
              <Link href="/admin/leads" className="text-xs text-[#c9a227] font-medium hover:underline mt-1 inline-block">Go to Leads</Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {recentOutreach.slice(0, 6).map((entry) => (
                <div key={entry.id} className="px-5 py-3 flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 bg-[#0a1628]/5">
                    <svg className="w-3.5 h-3.5 text-[#0a1628]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{entry.subject || 'Email sent'}</p>
                    <p className="text-xs text-gray-400">{entry.lead_name || 'Unknown'}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{timeAgo(entry.created_at)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
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
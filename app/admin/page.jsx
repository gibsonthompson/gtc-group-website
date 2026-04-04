'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [emailsToday, setEmailsToday] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchData() }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('/api/admin/email-stats')
      const data = await res.json()
      setEmailsToday(data.today || 0)
    } catch (e) {
      console.error('Dashboard fetch error:', e)
    } finally {
      setLoading(false)
    }
  }

  const emailPct = Math.min((emailsToday / 100) * 100, 100)
  const meterColor = emailsToday >= 100 ? '#16a34a' : emailsToday >= 50 ? '#c9a227' : '#0a1628'
  const meterBg = emailsToday >= 100 ? '#dcfce7' : emailsToday >= 50 ? '#fef9c3' : '#e8e6e1'

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
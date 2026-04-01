'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PIN = '2026'

const NAV_ITEMS = [
  { href: '/admin', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { href: '/admin/leads', label: 'Leads', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { href: '/admin/templates', label: 'Templates', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { href: '/admin/lanes', label: 'Lanes', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
]

export default function AdminLayout({ children }) {
  const [authed, setAuthed] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('gtc_admin') === 'true') {
      setAuthed(true)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin === PIN) {
      setAuthed(true)
      sessionStorage.setItem('gtc_admin', 'true')
    } else {
      setError(true)
      setPin('')
      setTimeout(() => setError(false), 2000)
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#0a1628] rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[#c9a227]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h1 className="text-lg font-bold text-[#0a1628]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>GTC Admin</h1>
              <p className="text-sm text-gray-500 mt-1">Enter PIN to continue</p>
            </div>
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              placeholder="----"
              autoFocus
              className={'w-full text-center text-2xl tracking-[0.5em] px-4 py-3 border rounded-lg outline-none transition-colors ' + (error ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20')}
              style={{ fontSize: '24px' }}
            />
            {error && <p className="text-sm text-red-500 text-center mt-2">Incorrect PIN</p>}
            <button type="submit" className="w-full mt-4 py-3 bg-[#0a1628] text-white font-semibold rounded-lg hover:bg-[#162d54] transition-colors text-sm">
              Enter
            </button>
          </div>
        </form>
      </div>
    )
  }

  const isActive = (href) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Top Bar */}
      <header className="bg-[#0a1628] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <span className="text-[#c9a227] font-bold text-sm" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>GTC Admin</span>
              <span className="hidden sm:inline text-white/30 text-xs">|</span>
              <nav className="hidden sm:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={'px-3 py-1.5 rounded-md text-sm font-medium transition-colors ' + (isActive(item.href) ? 'bg-white/10 text-[#c9a227]' : 'text-white/60 hover:text-white hover:bg-white/5')}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <Link href="/" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              View Site
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className="sm:hidden bg-white border-b border-gray-200 px-2 py-1.5 flex gap-1 overflow-x-auto scrollbar-hide">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={'flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ' + (isActive(item.href) ? 'bg-[#0a1628] text-[#c9a227]' : 'text-gray-500 hover:bg-gray-100')}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  )
}
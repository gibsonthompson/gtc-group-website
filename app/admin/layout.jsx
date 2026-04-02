'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PIN = '2026'

const NAV_ITEMS = [
  { href: '/admin', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { href: '/admin/leads', label: 'Leads', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { href: '/admin/templates', label: 'Templates', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { href: '/admin/lanes', label: 'Lanes', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
]

export default function AdminLayout({ children }) {
  const [authed, setAuthed] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('gtc_admin') === 'true') {
        setAuthed(true)
      }
      setChecking(false)
    }
  }, [])

  const handlePinChange = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 4)
    setPin(clean)
    setError(false)
    if (clean.length === 4) {
      if (clean === PIN) {
        setAuthed(true)
        sessionStorage.setItem('gtc_admin', 'true')
      } else {
        setError(true)
        setTimeout(() => { setPin(''); setError(false) }, 800)
      }
    }
  }

  if (checking) return null

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="w-full max-w-[280px] text-center">
          <img src="/icons/gtc-icon-192.png" alt="GTC" className="w-14 h-14 rounded-xl mx-auto mb-6" />
          <div className="flex justify-center gap-3 mb-6">
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                className={'w-3 h-3 rounded-full transition-all duration-200 ' + (
                  error ? 'bg-red-500' :
                  pin.length > i ? 'bg-[#c9a227]' : 'bg-white/20'
                )}
              />
            ))}
          </div>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={(e) => handlePinChange(e.target.value)}
            autoFocus
            className="opacity-0 absolute pointer-events-none"
            id="pin-input"
          />
          <label htmlFor="pin-input" className="block">
            <div className="grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6,7,8,9,null,0,null].map((n, i) => (
                n !== null ? (
                  <button
                    key={i}
                    onClick={() => handlePinChange(pin + String(n))}
                    className="w-full aspect-square rounded-full bg-white/[0.06] text-white text-xl font-medium flex items-center justify-center hover:bg-white/10 active:bg-white/15 transition-colors"
                    style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
                  >
                    {n}
                  </button>
                ) : (
                  i === 9 ? <div key={i} /> :
                  <button
                    key={i}
                    onClick={() => handlePinChange(pin.slice(0, -1))}
                    className="w-full aspect-square rounded-full flex items-center justify-center text-white/40 hover:text-white/60 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414-6.414A2 2 0 0110.828 5H21a1 1 0 011 1v12a1 1 0 01-1 1H10.828a2 2 0 01-1.414-.586L3 12z" /></svg>
                  </button>
                )
              ))}
            </div>
          </label>
          {error && <p className="text-red-400 text-xs mt-4">Incorrect PIN</p>}
        </div>
      </div>
    )
  }

  const isActive = (href) => {
    if (href === '/admin') return pathname === '/admin'
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex flex-col">
      {/* Desktop Top Bar */}
      <header className="hidden sm:block bg-[#0a1628] sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-6">
              <img src="/icons/gtc-icon-192.png" alt="GTC" className="w-7 h-7 rounded" />
              <nav className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={'px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ' + (isActive(item.href) ? 'bg-white/10 text-[#c9a227]' : 'text-white/50 hover:text-white/80')}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <Link href="/" className="text-white/30 hover:text-white/60 text-xs transition-colors">View Site</Link>
          </div>
        </div>
      </header>

      {/* Mobile Top Bar - navy extends behind status bar */}
      <header className="sm:hidden bg-[#0a1628] fixed top-0 left-0 right-0 z-40" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="flex items-center justify-center py-3">
          <img src="/icons/gtc-icon-192.png" alt="GTC" className="w-10 h-10 rounded-lg" />
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="sm:hidden" style={{ paddingTop: 'calc(env(safe-area-inset-top) + 64px)' }} />

      {/* Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full pb-20 sm:pb-6">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <div className="flex items-stretch">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={'flex-1 flex flex-col items-center justify-center py-2 transition-colors ' + (isActive(item.href) ? 'text-[#c9a227]' : 'text-gray-400')}
            >
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" strokeWidth={isActive(item.href) ? 2.5 : 1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className={'text-[10px] font-medium ' + (isActive(item.href) ? 'text-[#c9a227]' : 'text-gray-400')}>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
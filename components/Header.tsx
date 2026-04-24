'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { href: '/#what-we-do', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/blog', label: 'Insights' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,162,39,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="GTC Group"
              width={36}
              height={36}
              className="w-9 h-9 md:w-10 md:h-10 object-contain"
            />
            <div>
              <div className="font-display text-[15px] md:text-[17px] font-bold text-white leading-tight tracking-[-0.01em]">
                The GTC Group
              </div>
              <div className="font-display text-[8px] md:text-[9px] font-semibold text-gold-500/70 tracking-[0.12em] uppercase">
                Logistics Advisory
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display text-[13px] font-semibold text-white/50 hover:text-gold-400 tracking-[0.03em] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[12px] tracking-[0.06em] uppercase py-3 px-7 transition-colors duration-200"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-3 -mr-2 touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[70px] bg-navy-950 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="px-6 py-8 h-full overflow-y-auto">
          <ul className="space-y-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block font-display text-[16px] font-semibold text-white/70 py-4 border-b border-white/[0.06] hover:text-gold-400 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Link
                href="/book-call"
                className="block bg-gold-500 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase text-center py-4 hover:bg-gold-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </Link>
            </li>
          </ul>

          <div className="mt-10 pt-6 border-t border-white/[0.06] space-y-4">
            <a href="tel:7705332544" className="flex items-center gap-3 font-display text-[13px] text-white/40 hover:text-gold-400 transition-colors">
              <svg className="w-4 h-4 text-gold-500/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (770) 533-2544
            </a>
            <a href="mailto:jbrewer@gtcadvisers.com" className="flex items-center gap-3 font-display text-[13px] text-white/40 hover:text-gold-400 transition-colors">
              <svg className="w-4 h-4 text-gold-500/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              jbrewer@gtcadvisers.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
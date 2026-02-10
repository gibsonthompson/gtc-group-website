'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex items-center justify-between h-[70px] md:h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 md:gap-3">
            <Image 
              src="/logo.png" 
              alt="GTC Group" 
              width={36} 
              height={36} 
              className="rounded md:w-10 md:h-10"
            />
            <div className="hidden sm:block">
              <div className="font-display text-[16px] md:text-lg font-bold text-white leading-tight">The GTC Group</div>
              <div className="text-[9px] md:text-[10px] text-white/60 tracking-[0.08em] uppercase">Carrier Resources, Brokerage Results</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/#about" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[14px] text-white/80 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <Link href="/book-call" className="btn btn-primary text-[13px] py-2.5 px-5">
              Book a Call
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-3 -mr-2 touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div className={`lg:hidden fixed inset-0 top-[70px] bg-navy-900 transition-all duration-300 ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <nav className="px-6 py-6 h-full overflow-y-auto">
          <ul className="space-y-1">
            <li>
              <Link href="/#about" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#process" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                Process
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="block text-white/90 text-lg py-3 border-b border-white/10" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="pt-4">
              <Link href="/book-call" className="btn btn-primary w-full text-center" onClick={() => setMobileOpen(false)}>
                Book a Call
              </Link>
            </li>
          </ul>
          
          {/* Contact info in mobile menu */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
            <a href="tel:7705332544" className="flex items-center gap-3 text-white/60 text-sm">
              <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (770) 533-2544
            </a>
            <a href="mailto:jbrewer@gtcadvisers.com" className="flex items-center gap-3 text-white/60 text-sm">
              <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              jbrewer@gtcadvisers.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center">
              <span className="font-display text-xl font-bold text-navy-900">G</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-white leading-tight">The GTC Group</div>
              <div className="text-[10px] text-white/60 tracking-[0.08em] uppercase">Carrier Resources, Brokerage Results</div>
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
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-white/10">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              <li>
                <Link href="/#about" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  Process
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="block text-white/90 py-2" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-call" className="btn btn-primary w-full mt-4" onClick={() => setMobileOpen(false)}>
                  Book a Call
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
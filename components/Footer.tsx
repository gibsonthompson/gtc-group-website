import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image 
                src="/logo.png" 
                alt="The GTC Group" 
                width={40} 
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <div className="font-display text-lg font-bold text-white leading-tight">The GTC Group</div>
                <div className="text-[10px] text-white/60 tracking-[0.08em] uppercase">Carrier Resources, Brokerage Results</div>
              </div>
            </Link>
            <p className="text-[14px] text-white/55 leading-relaxed">
              Founded by industry veterans, we combine carrier resources to deliver enterprise-level pricing and support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-body text-[13px] font-bold tracking-[0.08em] uppercase mb-5">Services</h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/cost-reduction" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Cost Reduction
                </Link>
              </li>
              <li>
                <Link href="/services/revenue-growth" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Revenue Growth
                </Link>
              </li>
              <li>
                <Link href="/services/brand-marketing" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Brand & Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-body text-[13px] font-bold tracking-[0.08em] uppercase mb-5">Company</h5>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#about" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/55 text-[14px] hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-body text-[13px] font-bold tracking-[0.08em] uppercase mb-5">Contact</h5>
            <div className="space-y-3.5">
              <a href="mailto:jbrewer@gtcadvisers.com" className="flex items-start gap-3 text-white/55 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span className="text-[14px]">jbrewer@gtcadvisers.com</span>
              </a>
              <a href="tel:7705332544" className="flex items-start gap-3 text-white/55 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span className="text-[14px]">(770) 533-2544</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} The GTC Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
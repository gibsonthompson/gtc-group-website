import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 md:pt-20 pb-8">
      {/* Gold top rule */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-16 md:mb-20" />

      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12 md:pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="The GTC Group"
                width={36}
                height={36}
                className="w-9 h-9 md:w-10 md:h-10 object-contain"
              />
              <div>
                <div className="font-display text-[16px] md:text-[17px] font-bold text-white leading-tight tracking-[-0.01em]">The GTC Group</div>
                <div className="font-display text-[8px] md:text-[9px] font-semibold text-gold-500/60 tracking-[0.12em] uppercase">Logistics Advisory</div>
              </div>
            </Link>
            <p className="font-display text-[13px] md:text-[14px] font-normal text-white/35 leading-[1.7] max-w-[280px]">
              Brokerage-side intelligence applied to carrier operations. Rate
              renegotiation, cost reduction, and direct shipper relationships.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 mb-5">Services</h5>
            <ul className="space-y-3">
              <li><Link href="/services/cost-reduction" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Cost Reduction</Link></li>
              <li><Link href="/services/revenue-growth" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Revenue Growth</Link></li>
              <li><Link href="/services/brand-marketing" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Online Presence & Brand</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 mb-5">Company</h5>
            <ul className="space-y-3">
              <li><Link href="/team" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Our Team</Link></li>
              <li><Link href="/blog" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Insights</Link></li>
              <li><Link href="/book-call" className="font-display text-[13px] md:text-[14px] text-white/35 hover:text-gold-400 transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="font-display text-[11px] font-bold tracking-[0.12em] uppercase text-white/50 mb-5">Contact</h5>
            <div className="space-y-3">
              <a href="mailto:jbrewer@gtcadvisers.com" className="flex items-start gap-3 text-white/35 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4 text-gold-500/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="font-display text-[13px] md:text-[14px] break-all">jbrewer@gtcadvisers.com</span>
              </a>
              <a href="tel:7705332544" className="flex items-start gap-3 text-white/35 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4 text-gold-500/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-display text-[13px] md:text-[14px]">(770) 533-2544</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 md:pt-8">
          <p className="font-display text-[11px] text-white/25 tracking-[0.02em]">
            &copy; {new Date().getFullYear()} The GTC Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="font-display text-[11px] text-white/25 hover:text-gold-400 transition-colors">Terms</Link>
            <Link href="/privacy" className="font-display text-[11px] text-white/25 hover:text-gold-400 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team | The GTC Group',
  description: 'Former brokerage executives and logistics technology leaders. Meet the team behind GTC\u2019s carrier advisory practice.',
}

export default function TeamPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Our Team</span>
          </nav>

          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Our Team</span>
            </div>

            <h1 className="font-display text-hero text-white mb-6">
              Brokerage Expertise.
              <br />
              <span className="text-gold-400">Carrier Loyalty.</span>
            </h1>

            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/50 leading-[1.75] max-w-[620px]">
              Our leadership team has operated on both sides of the logistics
              industry — pricing carrier lanes at nationally ranked brokerages
              and building the technology that powers modern carrier operations.
              That dual perspective is what makes GTC different.
            </p>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">Leadership</span>
          </div>

          <h2 className="font-display text-h2 text-navy-900 mb-16 md:mb-20">Executive Team</h2>

          {/* Jacob */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 mb-16 md:mb-20 pb-16 md:pb-20 border-b border-navy-900/[0.08]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/team/team-1.jpg"
                alt="Jacob Brewer — Founder & CEO"
                fill
                className="object-cover grayscale-[30%]"
                sizes="320px"
              />
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[3px] bg-gold-500" />
              </div>
            </div>
            <div>
              <div className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-600 mb-2">Founder & CEO</div>
              <h3 className="font-display text-[28px] md:text-[32px] font-black text-navy-900 tracking-[-0.02em] mb-6">Jacob Brewer</h3>
              <div className="space-y-4 font-display text-[16px] font-normal text-navy-900/55 leading-[1.8] max-w-[560px]">
                <p>
                  Veteran freight brokerage executive with senior-level experience
                  at nationally ranked brokerages. Jacob spent years building the
                  margin models, rate structures, and shipper relationships that
                  brokerages use to maximize their own revenue — often at the
                  carrier&apos;s expense.
                </p>
                <p>
                  He founded GTC to bring that same intelligence to the carrier
                  side. His work focuses on reviewing carrier lane data, calling
                  brokers and shippers directly, and renegotiating rates using
                  the pricing frameworks he helped build. He also leads GTC&apos;s
                  dedicated sales operation, connecting carriers directly with
                  shippers to eliminate broker dependency.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a href="mailto:jbrewer@gtcadvisers.com" className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-gold-600 hover:text-gold-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  jbrewer@gtcadvisers.com
                </a>
                <a href="tel:7705332544" className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-gold-600 hover:text-gold-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  (770) 533-2544
                </a>
              </div>
            </div>
          </div>

          {/* Gibson */}
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/team/team-2.jpg"
                alt="Gibson Thompson — Chief Technology Officer"
                fill
                className="object-cover grayscale-[30%]"
                sizes="320px"
              />
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[3px] bg-gold-500" />
              </div>
            </div>
            <div>
              <div className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-600 mb-2">Chief Technology Officer</div>
              <h3 className="font-display text-[28px] md:text-[32px] font-black text-navy-900 tracking-[-0.02em] mb-6">Gibson Thompson</h3>
              <div className="space-y-4 font-display text-[16px] font-normal text-navy-900/55 leading-[1.8] max-w-[560px]">
                <p>
                  Technology leader with a background spanning logistics, SaaS,
                  and service industries. Gibson oversees the digital infrastructure
                  that powers GTC&apos;s advisory practice — the analytics, client
                  systems, and carrier websites that give independent carriers
                  access to the same optimization capabilities as large brokerages.
                </p>
                <p>
                  His focus is on building tools that translate operational data
                  into financial leverage — turning a carrier&apos;s lane history
                  and cost structure into actionable intelligence for rate
                  renegotiation and cost reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,162,39,0.06)_0%,transparent_70%)] rounded-full" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-h2 text-white mb-6">
            Ready to Work
            <span className="text-gold-400"> With Us?</span>
          </h2>
          <p className="font-display text-[17px] font-normal text-white/45 leading-[1.8] max-w-[540px] mx-auto mb-10">
            Schedule a call with our team. We&apos;ll assess your operation and
            show you exactly what GTC can do — no obligation.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-10 transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
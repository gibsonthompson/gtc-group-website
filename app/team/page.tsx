import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team | The GTC Group',
  description: 'Senior brokerage and carrier operations experience. Meet the team behind GTC\u2019s carrier advisory practice.',
}

export default function TeamPage() {
  return (
    <>
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Team</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Team</span>
          </div>
          <h1 className="font-display text-[28px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[600px] mb-5">Leadership</h1>
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px]">
            Senior experience across freight brokerage operations, carrier advisory, and logistics technology.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-14 mb-16 pb-16 border-b border-navy-900/[0.08]">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/team/team-1.png" alt="Jacob Brewer" fill className="object-cover grayscale-[20%]" sizes="200px" />
              <div className="absolute top-0 left-0 w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold-500" />
              </div>
            </div>
            <div>
              <div className="font-display text-[11px] font-semibold tracking-[0.12em] uppercase text-gold-600 mb-1">President & CEO</div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 tracking-[-0.02em] mb-5">Jacob Brewer</h2>
              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75] max-w-[520px]">
                <p>Senior-level brokerage experience at nationally ranked freight brokerages. Background in carrier rate structures, margin modeling, shipper contract negotiation, and lane pricing.</p>
                <p>At GTC, Jacob leads the advisory practice — auditing carrier rate sheets, renegotiating contracts directly with brokers and shippers, and managing the dedicated sales function that builds direct shipper relationships for carrier clients.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-5">
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

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-14">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/team/team-2.png" alt="Gibson Thompson" fill className="object-cover grayscale-[20%]" sizes="200px" />
              <div className="absolute top-0 left-0 w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold-500" />
              </div>
            </div>
            <div>
              <div className="font-display text-[11px] font-semibold tracking-[0.12em] uppercase text-gold-600 mb-1">Chief Technology Officer</div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 tracking-[-0.02em] mb-5">Gibson Thompson</h2>
              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75] max-w-[520px]">
                <p>Technology background spanning logistics, SaaS, and service industries. Responsible for the digital infrastructure that supports GTC&apos;s advisory practice — analytics systems, client platforms, and carrier websites.</p>
                <p>Focus area: translating carrier operational data into actionable intelligence for rate renegotiation and cost optimization.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <a href="mailto:gthompson@gtcadvisers.com" className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-gold-600 hover:text-gold-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  gthompson@gtcadvisers.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-4">Schedule a consultation.</h2>
          <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] mb-8">We assess your operation and identify the highest-impact opportunities — no obligation.</p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
        </div>
      </section>
    </>
  )
}
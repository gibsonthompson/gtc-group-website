import Link from 'next/link'

export const metadata = {
  title: 'Revenue Growth — Lane Optimization & Shipper Acquisition | The GTC Group',
  description: 'Rate renegotiation, direct shipper acquisition, and lane optimization for carrier operations. Reduce broker dependency and improve per-load revenue.',
}

export default function RevenueGrowthPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-500">Revenue Growth</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Revenue Growth</span>
          </div>
          <h1 className="font-display text-[28px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[640px] mb-5">
            Lane Optimization, Rate Renegotiation & Direct Shipper Acquisition
          </h1>
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px] mb-8">
            We renegotiate your existing lane rates using current market intelligence, then build direct shipper relationships that reduce broker dependency and improve per-mile revenue.
          </p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Consultation</Link>
        </div>
      </section>

      {/* ── BROKER COST ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">The Problem</span>
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Broker margins are the largest variable cost most carriers don&apos;t track.
              </h2>
              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75]">
                <p>
                  Every load that moves through a broker has a spread — the difference between the shipper&apos;s payment and your rate. That spread is typically 15–25% of gross, and it compounds across every load, every lane, every week.
                </p>
                <p>
                  For a 50-truck fleet running consistent freight, the total margin transferred to brokers can exceed $500K annually. Direct shipper contracts eliminate it. Our sales team builds those relationships on your behalf.
                </p>
              </div>
            </div>

            <div className="bg-white border border-navy-900/[0.06] p-6 md:p-8">
              <h3 className="font-display text-[16px] font-bold text-navy-900 mb-6">Annual Cost of Broker Dependency Per Truck</h3>
              <div className="space-y-4">
                {[
                  { label: 'Broker commissions (15–25%)', amount: '$18,000–$30,000' },
                  { label: 'Load board subscriptions', amount: '$3,600–$7,200' },
                  { label: 'Deadhead miles', amount: '$8,000–$15,000' },
                  { label: 'Spot rate volatility', amount: '$5,000–$12,000' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between pb-4 border-b border-navy-900/[0.06] last:border-0 last:pb-0">
                    <span className="font-display text-[13px] text-navy-900/55">{item.label}</span>
                    <span className="font-display text-[13px] font-bold text-navy-900 whitespace-nowrap ml-4">{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-navy-900 p-4 flex items-center justify-between">
                <span className="font-display text-[12px] font-medium text-white/50">Total annual cost</span>
                <span className="font-display text-[20px] font-extrabold text-gold-400">$34K–$64K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Process</span>
          </div>
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-12 max-w-[460px]">
            We handle the sales function. You run the freight.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { n: '01', title: 'Operation Review', body: 'We document your preferred lanes, equipment type, capacity, schedule constraints, and rate requirements. We only pursue freight that fits your operation.' },
              { n: '02', title: 'Prospecting & Negotiation', body: 'Our sales team contacts shippers directly, negotiates contract rates, and manages the process. You approve every deal before freight moves.' },
              { n: '03', title: 'Execution', body: 'Direct shipper contracts mean consistent freight at higher rates with planned routes. The relationship belongs to you — we built it.' },
            ].map((step, i) => (
              <div key={step.n} className={`p-6 md:p-8 border-t border-white/[0.06] ${i > 0 ? 'md:border-l' : ''}`}>
                <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-3">{step.n}</div>
                <h3 className="font-display text-[15px] font-bold text-white mb-2 tracking-[-0.01em]">{step.title}</h3>
                <p className="font-display text-[13px] font-normal text-white/40 leading-[1.7]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">Outcomes</span>
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Direct shipper contracts improve revenue, predictability, and asset value.
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Broker Margin Elimination', body: '15–25% of every brokered load goes to the intermediary. On direct contracts, that revenue stays in your operation.' },
                  { title: 'Freight Consistency', body: 'Contract rates and regular loads allow planning of schedules, routes, and driver assignments weeks in advance.' },
                  { title: 'Reduced Deadhead', body: 'Planned lanes with round-trip potential reduce empty miles and increase revenue per mile driven.' },
                  { title: 'Business Equity', body: 'Shipper relationships are transferable assets. Load board subscriptions are not.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-5 h-5 bg-gold-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-display text-[14px] font-bold text-navy-900 mb-0.5">{item.title}</h4>
                      <p className="font-display text-[13px] font-normal text-navy-900/45 leading-[1.7]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-navy-900/[0.06] p-6 md:p-8">
              <h3 className="font-display text-[16px] font-bold text-navy-900 mb-6">Typical Engagement Results</h3>
              <div className="space-y-5">
                {[
                  { label: 'Revenue Increase', value: '18–25%', width: '22%' },
                  { label: 'New Dedicated Lanes (90 Days)', value: '3–5', width: '40%' },
                  { label: 'Broker Dependency Reduction', value: '50–70%', width: '60%' },
                  { label: 'Deadhead Reduction', value: '30–40%', width: '35%' },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-display text-[12px] text-navy-900/45">{m.label}</span>
                      <span className="font-display text-[13px] font-bold text-navy-900">{m.value}</span>
                    </div>
                    <div className="h-1.5 bg-navy-900/[0.06] overflow-hidden">
                      <div className="h-full bg-gold-500" style={{ width: m.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-4">
            Request a lane review.
          </h2>
          <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] mb-8">
            We review your current lanes, broker relationships, and rate structure — then document where direct contracts would change the numbers.
          </p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
        </div>
      </section>
    </>
  )
}
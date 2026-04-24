import Link from 'next/link'

export const metadata = {
  title: 'Cost Reduction — Insurance, Fuel & Maintenance | The GTC Group',
  description: 'Pooled purchasing across our carrier network delivers fleet-rate pricing on insurance, fuel, and maintenance. Average savings of $3–8K per truck annually.',
}

export default function CostReductionPage() {
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
            <span className="text-gold-500">Cost Reduction</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Cost Reduction</span>
          </div>
          <h1 className="font-display text-[28px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[640px] mb-5">
            Insurance, Fuel & Maintenance at Fleet-Rate Pricing
          </h1>
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px] mb-8">
            We aggregate purchasing volume across our carrier network and negotiate as a single buyer. Your trucks get priced at the same tier as 500-truck fleets — same coverage, same fuel, lower cost.
          </p>
          <Link href="/book-call" className="btn btn-primary">Request a Cost Analysis</Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">The Mechanism</span>
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Volume-based pricing without the volume requirement.
              </h2>
              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75]">
                <p>
                  Insurance companies, fuel networks, and maintenance shops all use tiered pricing based on unit count. A carrier with 50 trucks gets one rate. A carrier with 500 gets another. The coverage and product are identical — the only variable is leverage.
                </p>
                <p>
                  GTC aggregates the volume of every carrier in our network into a single purchasing entity. Vendors see the combined fleet count, not your individual operation. The result is fleet-tier pricing applied to your trucks regardless of your actual fleet size.
                </p>
                <p className="text-navy-900/70 font-medium">
                  You retain full authority and independence. The only thing that changes is what you pay.
                </p>
              </div>
            </div>

            {/* Savings table */}
            <div className="bg-white border border-navy-900/[0.06] p-6 md:p-8">
              <h3 className="font-display text-[16px] font-bold text-navy-900 mb-6">Annual Cost Comparison Per Truck</h3>
              <div className="space-y-5">
                {[
                  { label: 'Insurance', retail: '$15,000', gtc: '$11,500', save: '$3,500' },
                  { label: 'Fuel', retail: '$72,000', gtc: '$67,500', save: '$4,500' },
                  { label: 'Maintenance', retail: '$12,000', gtc: '$10,600', save: '$1,400' },
                ].map((row) => (
                  <div key={row.label} className="pb-5 border-b border-navy-900/[0.06] last:border-0 last:pb-0">
                    <div className="font-display text-[13px] font-semibold text-navy-900 mb-2">{row.label}</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="font-display text-[10px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">Retail</div>
                        <div className="font-display text-[14px] font-semibold text-navy-900/40 line-through">{row.retail}</div>
                      </div>
                      <div>
                        <div className="font-display text-[10px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">With GTC</div>
                        <div className="font-display text-[14px] font-bold text-navy-900">{row.gtc}</div>
                      </div>
                      <div>
                        <div className="font-display text-[10px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">Savings</div>
                        <div className="font-display text-[14px] font-bold text-gold-500">{row.save}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-navy-900 p-4 text-center">
                <div className="font-display text-[10px] font-medium text-white/40 tracking-[0.08em] uppercase mb-1">Total Annual Savings Per Truck</div>
                <div className="font-display text-[28px] font-extrabold text-gold-400">$9,400</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE AREAS ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Coverage Areas</span>
          </div>
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-12 max-w-[460px]">
            Three categories of immediate cost reduction.
          </h2>

          {[
            { n: '01', title: 'Insurance', body: 'Liability, cargo, and physical damage at fleet-tier rates. We work directly with underwriters — not local agents who lack volume leverage. Typical premium reduction of 15–25% with identical coverage terms.', stat: '$3,000+', label: 'avg. annual savings per truck' },
            { n: '02', title: 'Fuel', body: 'Discounted fuel cards accepted at thousands of locations nationwide. At 6 MPG and 100K miles per year, $0.10–$0.15 per gallon off translates to $1,600–$2,500 in annual savings per truck.', stat: '$4,000+', label: 'avg. annual savings per truck' },
            { n: '03', title: 'Maintenance', body: 'Preferred pricing at repair shops, tire dealers, and parts suppliers across our network. Fleet-rate labor costs and priority scheduling — the same access large carriers negotiate.', stat: '$1,400+', label: 'avg. annual savings per truck' },
          ].map((item, i) => (
            <div key={item.n} className={`border-t ${i === 2 ? 'border-b' : ''} border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 items-start`}>
              <div>
                <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">{item.n}</div>
                <h3 className="font-display text-[17px] md:text-[19px] font-bold text-white mb-3 tracking-[-0.01em]">{item.title}</h3>
                <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[540px]">{item.body}</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-display text-[20px] font-extrabold text-gold-400">{item.stat}</div>
                <div className="font-display text-[11px] text-white/30">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-4">
            Request a cost analysis.
          </h2>
          <p className="font-display text-[15px] font-normal text-navy-900/45 leading-[1.75] mb-8">
            We review your current insurance, fuel, and maintenance spend and document the specific gaps — no obligation.
          </p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
        </div>
      </section>
    </>
  )
}
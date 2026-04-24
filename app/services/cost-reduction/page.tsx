import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Cost Reduction — Insurance, Fuel & Maintenance | The GTC Group',
  description: 'Pool purchasing power across our carrier network to access fleet-rate pricing on insurance, fuel, and maintenance. Average savings of $3–8K per truck annually.',
}

export default function CostReductionPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#what-we-do" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-500">Cost Reduction</span>
          </nav>

          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Cost Reduction</span>
            </div>

            <h1 className="font-display text-hero text-white mb-6">
              Your Vendors Price
              <br />
              You by <span className="text-gold-400">Truck Count.</span>
              <br />
              We Change the Count.
            </h1>

            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/50 leading-[1.75] max-w-[600px] mb-10">
              Insurance companies, fuel networks, and maintenance shops all use
              tiered volume pricing. A 50-truck carrier gets one rate. A 500-truck
              operation gets another. We aggregate our entire network&apos;s volume
              and negotiate as a single entity — your trucks get priced like
              they&apos;re part of the larger fleet.
            </p>

            <Link
              href="/book-call"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors duration-200"
            >
              Get Your Cost Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE VOLUME GAP ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">The Mechanism</span>
              </div>

              <h2 className="font-display text-h2 text-navy-900 mb-8">
                Volume Leverage Without
                <span className="text-gold-600"> the Volume</span>
              </h2>

              <div className="space-y-5 font-display text-[16px] font-normal text-navy-900/55 leading-[1.8]">
                <p>
                  The pricing gap between independent carriers and large fleets
                  isn&apos;t about risk profile or safety record — it&apos;s
                  about leverage. A carrier with 60 trucks gets retail rates. A
                  carrier with 600 gets wholesale. The coverage is identical. The
                  fuel is identical. The only variable is how many units the
                  vendor sees on the other side of the table.
                </p>
                <p>
                  GTC aggregates the purchasing volume of every carrier in our
                  network and negotiates as a single buyer. Your 60 trucks get
                  priced alongside hundreds of others — because from the
                  vendor&apos;s perspective, that&apos;s exactly what they are.
                </p>
                <p className="text-navy-900/75 font-medium">
                  You keep your authority. You keep your independence. You just
                  stop overpaying.
                </p>
              </div>
            </div>

            {/* Savings breakdown */}
            <div className="bg-white border border-navy-900/[0.06] p-8 md:p-10">
              <h3 className="font-display text-[18px] font-bold text-navy-900 mb-8 tracking-[-0.01em]">Annual Cost Per Truck</h3>

              <div className="space-y-6">
                {[
                  { label: 'Insurance', retail: '$15,000', gtc: '$11,500', save: '$3,500' },
                  { label: 'Fuel', retail: '$72,000', gtc: '$67,500', save: '$4,500' },
                  { label: 'Maintenance', retail: '$12,000', gtc: '$10,600', save: '$1,400' },
                ].map((row) => (
                  <div key={row.label} className="pb-6 border-b border-navy-900/[0.06] last:border-0 last:pb-0">
                    <div className="font-display text-[14px] font-semibold text-navy-900 mb-3">{row.label}</div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="font-display text-[11px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">Retail</div>
                        <div className="font-display text-[15px] font-semibold text-navy-900/40 line-through">{row.retail}</div>
                      </div>
                      <div>
                        <div className="font-display text-[11px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">With GTC</div>
                        <div className="font-display text-[15px] font-bold text-navy-900">{row.gtc}</div>
                      </div>
                      <div>
                        <div className="font-display text-[11px] font-medium text-navy-900/30 tracking-[0.08em] uppercase mb-1">You Save</div>
                        <div className="font-display text-[15px] font-bold text-gold-500">{row.save}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-navy-900 p-5 text-center">
                <div className="font-display text-[11px] font-medium text-white/40 tracking-[0.08em] uppercase mb-1">Total Annual Savings Per Truck</div>
                <div className="font-display text-[36px] font-black text-gold-400">$9,400</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE AREAS ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Where We Negotiate</span>
          </div>

          <h2 className="font-display text-h2 text-white mb-16 md:mb-20 max-w-[600px]">
            Three Areas of
            <span className="text-gold-400"> Immediate Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: '01',
                title: 'Insurance',
                body: 'Liability, cargo, and physical damage at fleet-tier rates. Same coverage, same deductibles, same limits — 15–25% lower premiums. We work directly with underwriters, not through local agents who lack volume leverage.',
                stat: '$3,000+',
                statLabel: 'avg. annual savings per truck',
              },
              {
                n: '02',
                title: 'Fuel',
                body: 'Discounted fuel cards accepted at thousands of locations nationwide. At 6 MPG and 100K miles per year, $0.10–$0.15 per gallon off translates to $1,600–$2,500 annually per truck. The savings are immediate.',
                stat: '$4,000+',
                statLabel: 'avg. annual savings per truck',
              },
              {
                n: '03',
                title: 'Maintenance',
                body: 'Preferred pricing at repair shops, tire dealers, and parts suppliers across our network. Priority scheduling. Fleet-rate labor costs. The same access large carriers negotiate — without running hundreds of trucks.',
                stat: '$1,400+',
                statLabel: 'avg. annual savings per truck',
              },
            ].map((item) => (
              <div key={item.n} className="bg-navy-800 p-8 md:p-10 border border-white/[0.04]">
                <span className="font-display text-[56px] font-black text-white/[0.04] leading-none select-none">{item.n}</span>
                <h3 className="font-display text-h3 text-white mt-2 mb-4">{item.title}</h3>
                <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] mb-6">{item.body}</p>
                <div className="pt-5 border-t border-white/[0.06]">
                  <div className="font-display text-[28px] font-black text-gold-400">{item.stat}</div>
                  <div className="font-display text-[11px] font-medium text-white/30 tracking-[0.05em]">{item.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-h2 text-navy-900 mb-6">
            See Your Savings
            <span className="text-gold-600"> in Writing</span>
          </h2>
          <p className="font-display text-[17px] font-normal text-navy-900/50 leading-[1.8] max-w-[540px] mx-auto mb-10">
            Book a call. We&apos;ll pull your current insurance, fuel, and
            maintenance spend and show you exactly where the gaps are —
            no obligation, no pressure.
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
import Link from 'next/link'

export const metadata = {
  title: 'Cost Reduction Services | The GTC Group',
  description: 'Pool your purchasing power with our carrier network to access fleet-rate pricing on insurance, fuel, and maintenance. Average savings of $3–8K per truck annually.',
}

export default function CostReductionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-3 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/#how-we-help" className="text-white/60 hover:text-gold-400 transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Cost Reduction</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-label">Cost Reduction</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Cut Costs Like the <span className="text-gold-400">Big Carriers</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Large fleets pay 15–40% less for insurance, fuel, and maintenance — purely because of volume. We pool our carrier network&apos;s purchasing power so you get the same rates without running 500 trucks.
            </p>
            <Link href="/book-call" className="btn btn-primary">
              Get Your Cost Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Mechanism</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Volume Leverage Without the Volume
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Insurance companies, fuel networks, and maintenance shops all offer tiered pricing based on volume. A carrier with 3 trucks gets retail rates. A carrier with 300 gets wholesale. The math is straightforward — more volume means more leverage at the negotiating table.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                GTC aggregates the purchasing volume of our entire carrier network and negotiates as a single entity. Your 3 trucks get priced like they&apos;re part of a 300-truck fleet — because from the vendor&apos;s perspective, they are.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You keep your independence. You keep your authority. You just stop overpaying.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display text-xl text-navy-900 mb-6">The Volume Gap</h3>
              <div className="space-y-5">
                {[
                  { label: 'Insurance (annual, per truck)', solo: '$15,000', gtc: '$11,500', save: '$3,500' },
                  { label: 'Fuel (annual, per truck)', solo: '$72,000', gtc: '$67,500', save: '$4,500' },
                  { label: 'Maintenance (annual, per truck)', solo: '$12,000', gtc: '$10,600', save: '$1,400' },
                ].map((row) => (
                  <div key={row.label} className="pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="text-sm font-medium text-navy-900 mb-2">{row.label}</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Retail</div>
                        <div className="text-sm font-semibold text-gray-500 line-through">{row.solo}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">With GTC</div>
                        <div className="text-sm font-bold text-navy-900">{row.gtc}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">You Save</div>
                        <div className="text-sm font-bold text-gold-500">{row.save}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-navy-900 rounded-lg p-4 text-center">
                  <div className="text-xs text-white/50 mb-1">Total Annual Savings Per Truck</div>
                  <div className="font-display text-2xl font-bold text-gold-400">$9,400</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Where We Negotiate</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">Three Areas of Immediate Savings</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-3">Insurance</h3>
              <p className="text-gray-600 mb-4">
                Liability, cargo, and physical damage at fleet rates. Most of our carriers see 15–25% lower premiums with identical coverage — same deductibles, same limits, lower price.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gold-500 font-bold text-2xl">$3,000+</div>
                <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
              </div>
            </div>

            <div className="bg-cream-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-3">Fuel</h3>
              <p className="text-gray-600 mb-4">
                Discounted fuel cards accepted at thousands of locations nationwide. At 6 MPG and 100K miles per year, even $0.05/gallon off saves over $800 annually. Our carriers typically save $0.10–$0.15.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gold-500 font-bold text-2xl">$4,000+</div>
                <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
              </div>
            </div>

            <div className="bg-cream-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-3">Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Preferred pricing at repair shops, tire dealers, and parts suppliers in our network. Priority scheduling when you need it — no waiting behind the fleet accounts that currently get first call.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gold-500 font-bold text-2xl">$1,400+</div>
                <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            See Your Savings Potential
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free call. We&apos;ll pull your current insurance, fuel, and maintenance spend and show you exactly where the gaps are — no obligation.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
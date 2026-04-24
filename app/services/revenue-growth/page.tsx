import Link from 'next/link'

export const metadata = {
  title: 'Revenue Growth Services | The GTC Group',
  description: 'Our dedicated sales team builds direct shipper relationships for your carrier operation — cutting broker fees and securing consistent, profitable freight.',
}

export default function RevenueGrowthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-3 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/#how-we-help" className="text-white/60 hover:text-gold-400 transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Revenue Growth</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-label">Revenue Growth</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Your Sales Team, <span className="text-gold-400">Our Expertise</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Load boards and brokers cost the average owner-operator $31K+ per year in fees, cuts, and deadhead miles. Our sales team builds direct shipper relationships so you keep more of every load.
            </p>
            <Link href="/book-call" className="btn btn-primary">
              Start Growing Revenue
            </Link>
          </div>
        </div>
      </section>

      {/* The Real Cost of Load Boards */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Real Cost</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Load Boards Are Costing You More Than You Think
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most carriers know brokers take a cut. But the full cost goes deeper than the commission line. Between subscription fees ($300–$600/month), broker margins (15–25% of each load), and the deadhead miles you run chasing spot loads, the total damage adds up fast.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Direct shipper relationships eliminate all three. You get consistent freight at higher rates with planned routes — and every dollar that used to go to a middleman stays in your operation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display text-xl text-navy-900 mb-6">Annual Cost of Load Board Dependency</h3>
              <div className="space-y-4">
                {[
                  { label: 'Broker commissions (15–25%)', amount: '$18,000–$30,000' },
                  { label: 'Load board subscriptions', amount: '$3,600–$7,200' },
                  { label: 'Deadhead miles (unpaid repositioning)', amount: '$8,000–$15,000' },
                  { label: 'Rate volatility (spot vs. contract)', amount: '$5,000–$12,000' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-bold text-navy-900 whitespace-nowrap ml-4">{item.amount}</span>
                  </div>
                ))}
                <div className="bg-navy-900 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-white/70">Total annual cost</span>
                  <span className="font-display text-xl font-bold text-gold-400">$34K–$64K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">We Sell. You Drive.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              You shouldn&apos;t have to be a salesperson and a truck driver. We handle the prospecting, negotiation, and contract management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">1</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">We Learn Your Operation</h3>
              <p className="text-gray-600">
                Your preferred lanes, equipment type, capacity, schedule constraints, and rate requirements. We only pursue freight that actually works for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">2</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">We Prospect & Close</h3>
              <p className="text-gray-600">
                Our sales team contacts shippers directly, negotiates contract rates, and handles the back-and-forth. You get the final say on every deal.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">3</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">You Run the Freight</h3>
              <p className="text-gray-600">
                Direct shipper contracts mean predictable revenue, planned routes, and no broker skimming off the top. The relationship is yours — we just built it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Why Direct Relationships</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Every Dollar a Broker Takes Is a Dollar You Earned
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Eliminate Broker Margins</h4>
                    <p className="text-gray-600">15–25% of every load goes to the broker. On direct contracts, that money is yours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Predictable Freight</h4>
                    <p className="text-gray-600">Contract rates and regular loads mean you can plan your weeks, your routes, and your revenue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Build Real Equity</h4>
                    <p className="text-gray-600">Shipper relationships are assets that grow in value. Load board access is a subscription you&apos;re renting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Reduce Deadhead</h4>
                    <p className="text-gray-600">Planned lanes with round-trip potential mean fewer empty miles and more revenue per mile driven.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display text-xl text-navy-900 mb-6">What Our Carriers Typically See</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Revenue Increase</span>
                    <span className="font-bold text-navy-900">18–25%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" style={{width: '22%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">New Dedicated Lanes (First 90 Days)</span>
                    <span className="font-bold text-navy-900">3–5</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" style={{width: '40%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Broker Dependency Reduction</span>
                    <span className="font-bold text-navy-900">50–70%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" style={{width: '60%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 text-sm">Deadhead Mile Reduction</span>
                    <span className="font-bold text-navy-900">30–40%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" style={{width: '35%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Grow Your Revenue?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a call and we&apos;ll talk through your lanes, capacity, and what direct shipper freight could look like for your operation.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
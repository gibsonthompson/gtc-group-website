import Link from 'next/link'

export const metadata = {
  title: 'Revenue Growth Services | The GTC Group',
  description: 'Our sales team works as your dedicated lane acquisition partner, building direct shipper relationships to grow your revenue.',
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
            <Link href="/#services" className="text-white/60 hover:text-gold-400 transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Revenue Growth</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-label">Revenue Growth</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Your Sales Team, <span className="text-gold-400">Our Expertise</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Stop losing 15-25% to brokers. Our dedicated sales team builds direct shipper relationships for you—so you keep more of every load.
            </p>
            <Link href="/book-call" className="btn btn-primary">
              Start Growing Revenue
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">How It Works</span>
            <h2 className="font-display text-4xl text-navy-900 mb-4">We Sell, You Drive</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">1</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">We Learn Your Operation</h3>
              <p className="text-gray-600">
                Your lanes, equipment, capacity, and preferences. We understand what freight works for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">2</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">We Prospect & Close</h3>
              <p className="text-gray-600">
                Our sales team reaches out to shippers, negotiates rates, and secures contracts on your behalf.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-900 font-display text-2xl font-bold">3</div>
              <h3 className="font-display text-xl text-navy-900 mb-3">You Run the Freight</h3>
              <p className="text-gray-600">
                Direct shipper relationships mean better rates, consistent freight, and no broker fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Why Direct Relationships</span>
              <h2 className="font-display text-4xl text-navy-900 mb-6">
                Keep What You Earn
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">No Broker Fees</h4>
                    <p className="text-gray-600">Brokers typically take 15-25%. That money stays in your pocket.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Consistent Freight</h4>
                    <p className="text-gray-600">Long-term contracts mean predictable revenue, not load-board gambling.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Build Equity</h4>
                    <p className="text-gray-600">Shipper relationships are assets. You&apos;re building value, not renting access.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="font-display text-2xl text-navy-900 mb-6">Average Results</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Revenue Increase</span>
                    <span className="font-bold text-navy-900">18-25%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 rounded-full" style={{width: '22%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">New Lanes (First 90 Days)</span>
                    <span className="font-bold text-navy-900">3-5</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 rounded-full" style={{width: '40%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Broker Dependency Reduction</span>
                    <span className="font-bold text-navy-900">50-70%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-500 rounded-full" style={{width: '60%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Ready to Grow Your Revenue?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a call and we&apos;ll discuss your lanes, capacity, and revenue goals.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Cost Reduction Services | The GTC Group',
  description: 'Pool your purchasing power with other carriers to get brokerage-level rates on insurance, fuel, and maintenance.',
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
            <Link href="/#services" className="text-white/60 hover:text-gold-400 transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Cost Reduction</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-label">Cost Reduction</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Cut Costs Like the <span className="text-gold-400">Big Carriers</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Insurance, fuel, and maintenance costs eat into your margins. By pooling purchasing power across our carrier network, we negotiate rates you could never get alone.
            </p>
            <Link href="/book-call" className="btn btn-primary">
              Get Your Cost Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">What We Negotiate</span>
            <h2 className="font-display text-4xl text-navy-900 mb-4">Three Areas of Savings</h2>
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
                Liability, cargo, and physical damage coverage at fleet rates. Average savings of 15-25% on annual premiums.
              </p>
              <div className="text-gold-500 font-bold text-2xl">$3,000+</div>
              <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
            </div>

            <div className="bg-cream-100 rounded-xl p-8">
              <div className="w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl text-navy-900 mb-3">Fuel</h3>
              <p className="text-gray-600 mb-4">
                Discounted fuel cards with nationwide network access. Save $0.05-0.15 per gallon at thousands of locations.
              </p>
              <div className="text-gold-500 font-bold text-2xl">$4,000+</div>
              <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
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
                Preferred pricing at repair shops, tire dealers, and parts suppliers. Priority scheduling and fleet discounts.
              </p>
              <div className="text-gold-500 font-bold text-2xl">$1,400+</div>
              <div className="text-gray-500 text-sm">avg. annual savings per truck</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            See Your Savings Potential
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free call and we&apos;ll analyze your current costs to show exactly where we can help.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}

'use client'

import Link from 'next/link'

const results = [
  {
    slug: 'insurance-savings',
    category: 'Cost Reduction',
    title: 'How Carriers Save $3–8K Per Truck on Insurance',
    description: 'Most small and mid-size fleets overpay for coverage through local agents. GTC\'s pooled network unlocks enterprise-level rates with identical or better coverage.',
    metric: '$3–8K',
    metricLabel: 'Saved per truck/year',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'dedicated-lanes',
    category: 'Revenue Growth',
    title: 'Ditching Load Boards for Dedicated Lanes',
    description: 'Broker fees and deadhead miles eat 15–25% of revenue. GTC connects carriers directly with shippers—no middlemen, no bidding wars, consistent freight.',
    metric: '15–25%',
    metricLabel: 'Typical revenue increase',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'full-service-partnership',
    category: 'Full Service',
    title: 'The Full-Service Partnership: Cost, Revenue & Brand',
    description: 'Mid-size fleets that address insurance, freight sourcing, and brand simultaneously see compounding returns—typically $100–200K in first-year value.',
    metric: '$100–200K',
    metricLabel: 'Typical first-year value',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Results</span>
          </nav>
          
          <span className="inline-block text-gold-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            Proven Results
          </span>
          
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] text-white font-bold leading-[1.1] tracking-[-0.02em] max-w-[700px] mb-6">
            Real Results for Real Carriers.
          </h1>
          
          <p className="text-xl text-white/70 max-w-[550px] leading-relaxed">
            See how independent carriers and small fleets use GTC's pooled buying power to cut costs, grow revenue, and compete with the big players.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-8 pr-6 md:pr-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-500 mb-1">35+</p>
              <p className="text-sm text-gray-500">Carriers in network</p>
            </div>
            <div className="py-8 px-6 md:px-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-1">$3–8K</p>
              <p className="text-sm text-gray-500">Avg. savings per truck</p>
            </div>
            <div className="py-8 px-6 md:px-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-1">15–25%</p>
              <p className="text-sm text-gray-500">Revenue increase typical</p>
            </div>
            <div className="py-8 pl-6 md:pl-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-1">90 Days</p>
              <p className="text-sm text-gray-500">To measurable ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((item) => (
              <Link 
                key={item.slug}
                href={`/results/${item.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="h-[200px] bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                  <span className="absolute bottom-4 left-4 bg-gold-500 text-navy-900 py-1.5 px-3 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy-900 leading-tight mb-3 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-display text-2xl font-bold text-gold-500">{item.metric}</p>
                      <p className="text-xs text-gray-500">{item.metricLabel}</p>
                    </div>
                    <span className="text-gold-500 group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
              Who We Work With
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold mb-4">
              Results Across Fleet Sizes & Freight Types
            </h2>
            <p className="text-gray-600 max-w-[550px] mx-auto">
              From single-truck owner-operators to 100+ truck fleets, GTC's pooled resources deliver value regardless of your operation's scale.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-cream-100 rounded-lg">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy-900 mb-2">Owner-Operators</h3>
              <p className="text-sm text-gray-600">1-truck operations looking for stability and better rates</p>
            </div>

            <div className="text-center p-6 bg-cream-100 rounded-lg">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy-900 mb-2">Small Fleets</h3>
              <p className="text-sm text-gray-600">5–15 trucks ready to professionalize operations</p>
            </div>

            <div className="text-center p-6 bg-cream-100 rounded-lg">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy-900 mb-2">Mid-Size Carriers</h3>
              <p className="text-sm text-gray-600">15–50 trucks scaling beyond founder-led sales</p>
            </div>

            <div className="text-center p-6 bg-cream-100 rounded-lg">
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy-900 mb-2">Regional Fleets</h3>
              <p className="text-sm text-gray-600">50–100+ trucks seeking enterprise-level advantages</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <span className="inline-block text-gold-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
            Get Started
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
            Ready to See What's Possible?
          </h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">
            Schedule a free consultation to see how GTC can help your operation cut costs, grow revenue, and compete at the enterprise level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-call" 
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3.5 px-8 rounded transition-colors"
            >
              Book a Free Consultation
            </Link>
            <Link 
              href="/#services" 
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white hover:bg-white hover:text-navy-900 text-white font-bold py-3.5 px-8 rounded transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
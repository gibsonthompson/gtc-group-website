'use client'

import Link from 'next/link'

export default function InsuranceSavingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900" />
        
        <div className="relative max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/cost-reduction" className="hover:text-gold-400 transition-colors">Cost Reduction</Link>
            <span>/</span>
            <span className="text-white">Insurance Savings</span>
          </nav>
          
          <span className="inline-block bg-gold-500 text-navy-900 py-1.5 px-3 text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mb-6">
            Cost Reduction
          </span>
          
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-bold leading-[1.15] tracking-[-0.02em] max-w-[800px] mb-6">
            Your Fleet Is Probably Overpaying for Insurance. <span className="text-gold-400">Here's Why.</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-[600px] leading-relaxed">
            Most small and mid-size carriers pay thousands more per truck than they should—simply because they don't have the buying power to negotiate enterprise-level rates. GTC changes that.
          </p>
        </div>
      </section>

      {/* Typical Results Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 text-center pt-6 mb-0">Typical Client Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-8 pr-6 md:pr-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-500">$3–8K</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Saved Per Truck/Year</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">Same</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Coverage Limits</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">&lt;2 Weeks</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Assessment to Binding</p>
            </div>
            <div className="py-8 pl-6 md:pl-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">A-Rated</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Carrier Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr,340px] gap-12 lg:gap-16">
            
            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              
              {/* The Problem */}
              <div className="bg-white rounded-lg p-8 mb-10 shadow-sm">
                <h2 className="font-display text-2xl text-navy-900 font-bold mb-4 mt-0">The Loyalty Tax</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Most carriers stick with the same insurance agent for years—sometimes decades. The relationship feels comfortable. The agent says the rates are competitive. But without access to the broader market, there's no way to verify that. And more often than not, loyalty is costing you real money.
                </p>
              </div>

              <p>
                Here's the reality: insurance providers price based on volume and risk pool. A local agent representing a handful of trucking clients simply can't negotiate the same rates as a network representing 35+ carriers. It's not about the agent being bad at their job—it's about leverage they don't have.
              </p>

              <p>
                The gap is significant. Across GTC's client base, carriers switching from local agents to our pooled network save an average of <strong>$3,000–$8,000 per truck annually</strong>—with identical or better coverage.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                <p className="text-red-800 font-semibold mb-2">Signs You're Overpaying</p>
                <ul className="text-red-700 text-sm space-y-1 mb-0 list-none pl-0">
                  <li>• You've been with the same agent for 3+ years without a competitive review</li>
                  <li>• Your premiums increased when you added trucks but didn't decrease when you hit safety milestones</li>
                  <li>• Your agent doesn't specialize in commercial trucking insurance</li>
                  <li>• You've never been shown quotes from more than two carriers</li>
                  <li>• You're paying more than $20K per truck for primary liability, physical damage, and cargo combined</li>
                </ul>
              </div>

              <p>
                If any of those apply, there's a strong chance you're leaving money on the table—money that could go toward driver pay, equipment, or cash reserves.
              </p>

              {/* How It Works */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">How GTC Reduces Your Insurance Costs</h2>

              <p>
                The model is straightforward: GTC pools the purchasing power of dozens of carriers to negotiate rates that individual operators can't access on their own. Insurance providers offer volume discounts to groups that represent diversified risk and lower administrative costs—the same economics that benefit mega-carriers.
              </p>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden my-8">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Free Policy Assessment</h3>
                    <p className="text-sm text-gray-600 mb-0">We review your current policies, claims history, fleet size, and coverage requirements. No cost, no obligation. Takes about 48 hours.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Market Comparison</h3>
                    <p className="text-sm text-gray-600 mb-0">We source quotes from A-rated carriers through our network—rates your current agent likely doesn't have access to. You see exactly what you'd save.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Seamless Transition</h3>
                    <p className="text-sm text-gray-600 mb-0">If the numbers work, we handle the transition. Same or better coverage, lower premiums, no gap in protection. Typically complete in under two weeks.</p>
                  </div>
                </div>
              </div>

              {/* Where the Savings Come From */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Where the Savings Come From</h2>

              <p>
                Insurance for commercial trucking typically breaks into three major categories. GTC's network negotiates across all of them:
              </p>

              <div className="bg-navy-900 text-white rounded-lg p-8 my-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-2">Primary Liability</p>
                    <p className="text-white/80 text-sm mb-3">The biggest line item for most fleets. Pooled volume typically reduces this by 15–25% over individual agent rates.</p>
                    <p className="font-display text-xl font-bold">Largest Savings</p>
                  </div>
                  <div>
                    <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-2">Physical Damage</p>
                    <p className="text-white/80 text-sm mb-3">Fleet-wide policies with proper deductible structures consistently outperform per-truck coverage from local agents.</p>
                    <p className="font-display text-xl font-bold">Significant Savings</p>
                  </div>
                  <div>
                    <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-2">Cargo Coverage</p>
                    <p className="text-white/80 text-sm mb-3">Often the most overpriced category for small carriers. Network rates can cut cargo premiums substantially.</p>
                    <p className="font-display text-xl font-bold">Often Overlooked</p>
                  </div>
                </div>
              </div>

              <p>
                In many cases, the new policies actually improve coverage—adding roadside assistance, downtime protection, or higher cargo limits at lower total cost. Better coverage for less money isn't a sales pitch; it's what happens when you have market leverage.
              </p>

              {/* What Carriers Do With the Savings */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">What Carriers Do With the Savings</h2>

              <p>
                For a 12-truck fleet saving $47,000 a year, or a 30-truck operation saving $90,000+, that money creates real operational flexibility:
              </p>

              <div className="bg-white rounded-lg p-8 my-8 shadow-sm">
                <div className="space-y-4">
                  {[
                    { label: 'Driver retention', desc: 'Competitive pay and sign-on bonuses funded by cost savings, not margin compression' },
                    { label: 'Equipment upgrades', desc: 'Safety technology, ELD systems, and preventive maintenance that reduce future claims' },
                    { label: 'Cash reserves', desc: 'Buffer for slow seasons, unexpected repairs, and growth opportunities' },
                    { label: 'Fleet expansion', desc: 'Adding trucks is easier when your per-unit operating cost is $3–8K lower' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-gray-700 mb-0"><strong className="text-navy-900">{item.label}:</strong> {item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Is This Right For You */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Is This Right For Your Fleet?</h2>

              <p>
                GTC's insurance procurement works for carriers of all sizes, but the savings scale with fleet size. Here's what we typically see:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-sm font-bold text-gray-500 mb-2">1–5 Trucks</p>
                  <p className="font-display text-2xl font-bold text-gold-500 mb-1">$3–15K</p>
                  <p className="text-xs text-gray-500">Annual savings range</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-sm font-bold text-gray-500 mb-2">6–20 Trucks</p>
                  <p className="font-display text-2xl font-bold text-gold-500 mb-1">$20–80K</p>
                  <p className="text-xs text-gray-500">Annual savings range</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-sm font-bold text-gray-500 mb-2">20+ Trucks</p>
                  <p className="font-display text-2xl font-bold text-gold-500 mb-1">$80K+</p>
                  <p className="text-xs text-gray-500">Annual savings range</p>
                </div>
              </div>

              <p>
                The assessment is free. If we can't beat your current rates with equal or better coverage, you've lost nothing but a 15-minute phone call. If we can, you'll see the numbers before making any decision.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              
              {/* Quick Comparison */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Local Agent vs. GTC Network</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { metric: 'Carrier access', before: '2–3 options', after: '15+ A-rated' },
                    { metric: 'Buying power', before: 'Individual fleet', after: '35+ carrier pool' },
                    { metric: 'Rate review', before: 'At renewal only', after: 'Ongoing monitoring' },
                    { metric: 'Trucking expertise', before: 'Varies', after: 'Industry-specific' },
                    { metric: 'Cost per truck', before: '$20K+ average', after: '$3–8K less' },
                  ].map((item, i) => (
                    <div key={item.metric} className={`flex justify-between items-center ${i < 4 ? 'pb-3 border-b border-gray-100' : ''}`}>
                      <span className="text-gray-500">{item.metric}</span>
                      <div className="text-right">
                        <span className="text-red-500 line-through text-xs block">{item.before}</span>
                        <span className="text-green-600 font-semibold">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coverage Areas */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Coverage We Optimize</h3>
                <ul className="space-y-3">
                  {[
                    'Primary auto liability',
                    'Physical damage',
                    'Motor truck cargo',
                    'General liability',
                    'Workers\' compensation',
                    'Umbrella / excess liability',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results at a Glance */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Client Results</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { type: '12-truck regional, Southeast', result: '$47K saved in Year 1' },
                    { type: 'Owner-operator, OTR', result: '$4,200 saved on renewal' },
                    { type: '30-truck fleet, Mid-Atlantic', result: '$68K insurance + $31K fuel' },
                  ].map(item => (
                    <div key={item.type} className="bg-cream-100 rounded p-3">
                      <p className="text-gray-500 text-xs mb-1">{item.type}</p>
                      <p className="font-semibold text-navy-900 mb-0">{item.result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-navy-900 rounded-lg p-6 text-center">
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  See What You Could Save
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Free, no-obligation assessment of your current insurance costs.
                </p>
                <Link 
                  href="/book-call" 
                  className="inline-flex items-center justify-center w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 px-6 rounded transition-colors"
                >
                  Book Your Free Assessment
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-center block">Beyond Insurance</p>
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold text-center mb-12">
            Cost Reduction Is Just the Start
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <Link href="/services/revenue-growth" className="group bg-cream-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Revenue Growth</span>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Dedicated Lanes & Direct Shipper Access
              </h3>
              <p className="text-sm text-gray-600 mb-0">
                Stop competing on load boards. Let GTC's sales team connect you with shippers who need consistent capacity.
              </p>
            </Link>

            <Link href="/services/brand-marketing" className="group bg-cream-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Brand & Marketing</span>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Professional Presence & Visibility
              </h3>
              <p className="text-sm text-gray-600 mb-0">
                Website, brand identity, and marketing that makes shippers take your operation seriously.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
            Ready to Stop Overpaying?
          </h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">
            Join the carriers who've discovered what pooled buying power can do for their bottom line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-call" 
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3.5 px-8 rounded transition-colors"
            >
              Book a Free Consultation
            </Link>
            <Link 
              href="/services/cost-reduction" 
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white hover:bg-white hover:text-navy-900 text-white font-bold py-3.5 px-8 rounded transition-colors"
            >
              Explore All Cost Reduction
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
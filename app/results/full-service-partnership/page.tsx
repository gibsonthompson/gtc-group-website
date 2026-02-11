'use client'

import Link from 'next/link'

export default function FullServicePartnershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900" />
        
        <div className="relative max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-gold-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Full Service Partnership</span>
          </nav>
          
          <span className="inline-block bg-gold-500 text-navy-900 py-1.5 px-3 text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mb-6">
            Full Service
          </span>
          
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-bold leading-[1.15] tracking-[-0.02em] max-w-[800px] mb-6">
            Growing Your Fleet Shouldn't Mean <span className="text-gold-400">Shrinking Your Margins.</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-[600px] leading-relaxed">
            Mid-size carriers often scale trucks faster than infrastructure. GTC's full-service partnership addresses cost, revenue, and brand simultaneously—so growth actually hits the bottom line.
          </p>
        </div>
      </section>

      {/* Typical Results Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 text-center pt-6 mb-0">Typical First-Year Value for a 20–40 Truck Fleet</p>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-8 pr-6 md:pr-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-500">$100–200K</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Total Value</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">3 Pillars</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Integrated Services</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">90 Days</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">To Measurable ROI</p>
            </div>
            <div className="py-8 pl-6 md:pl-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">1 Partner</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Not Five Vendors</p>
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
                <h2 className="font-display text-2xl text-navy-900 font-bold mb-4 mt-0">The Scaling Trap</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Going from 8 trucks to 30 is an achievement. But too many carriers discover that growth without infrastructure is a trap—every new truck adds revenue on paper but erodes margin in practice. Insurance climbs faster than the fleet. Fuel costs are unmanaged. Half the loads still come through brokers. And the company website looks like it was built in 2015.
                </p>
              </div>

              <p>
                This is the growth plateau that catches mid-size carriers off guard. You're too big to operate like a small fleet but too small to access the enterprise-level resources that control costs and attract direct shipper relationships.
              </p>

              <p>
                Most carriers try to solve these problems one at a time—shop insurance here, negotiate fuel there, maybe hire a sales person eventually. The piecemeal approach is slow, expensive, and the improvements don't compound.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <p className="text-amber-800 font-semibold mb-2">Signs Your Growth Is Outpacing Your Infrastructure</p>
                <ul className="text-amber-700 text-sm space-y-1 mb-0 list-none pl-0">
                  <li>• Insurance premiums growing faster than your fleet</li>
                  <li>• No fuel program—still paying close to retail</li>
                  <li>• 30%+ of loads still sourced through brokers</li>
                  <li>• Website that doesn't reflect the size of your operation</li>
                  <li>• No dedicated resource pursuing shipper contracts</li>
                  <li>• Adding trucks but margin per truck is declining</li>
                </ul>
              </div>

              <p>
                GTC's full-service partnership exists specifically for carriers in this position. Instead of five vendors and five relationships, you get one partner addressing cost, revenue, and brand simultaneously.
              </p>

              {/* Three Pillars */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Three Pillars, One Partnership</h2>

              <p>
                GTC's full-service engagement attacks margin compression from every angle at once. Here's what each pillar delivers:
              </p>

              <div className="space-y-6 my-10">
                {/* Pillar 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-navy-900 px-6 py-4">
                    <h3 className="text-white font-display font-bold text-lg m-0">Pillar 1: Cost Reduction</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      Insurance procurement through our pooled network, bulk fuel purchasing programs, and vendor negotiations across your operating expenses. The goal: enterprise-level costs at mid-size fleet scale.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">$3–8K</p>
                        <p className="text-xs text-gray-500">Insurance savings per truck</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">8–15%</p>
                        <p className="text-xs text-gray-500">Typical fuel cost reduction</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-navy-900 px-6 py-4">
                    <h3 className="text-white font-display font-bold text-lg m-0">Pillar 2: Revenue Growth</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      Dedicated sales representation to pursue direct shipper contracts and reduce broker dependency. Our team works your lanes, builds relationships with shippers, and negotiates rates on your behalf.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">15–25%</p>
                        <p className="text-xs text-gray-500">Revenue increase typical</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">0%</p>
                        <p className="text-xs text-gray-500">Broker fees on new lanes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-navy-900 px-6 py-4">
                    <h3 className="text-white font-display font-bold text-lg m-0">Pillar 3: Brand & Marketing</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      Professional website, capability deck, and marketing presence that positions your operation for shipper RFPs and inbound leads. Shippers vet carriers online before responding to outreach—your brand needs to match your capability.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">60 Days</p>
                        <p className="text-xs text-gray-500">To inbound leads</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">RFP-Ready</p>
                        <p className="text-xs text-gray-500">Professional positioning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Compounding Effect */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Why Comprehensive Beats Piecemeal</h2>

              <p>
                The real power of a full-service engagement isn't addition—it's multiplication. Lower costs mean more margin to reinvest. Direct shipper relationships mean higher revenue per mile. A professional brand means inbound opportunities you'd never get otherwise. Each pillar amplifies the others.
              </p>

              <div className="bg-navy-900 text-white rounded-lg p-8 my-8">
                <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-4">Typical Full-Service Value Breakdown (20–40 Truck Fleet)</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Insurance & fuel savings</span>
                    <span className="font-display text-xl font-bold">$60–100K</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Eliminated broker fees</span>
                    <span className="font-display text-xl font-bold">$30–60K</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Brand & inbound lead value</span>
                    <span className="font-display text-xl font-bold">$15–30K</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gold-400 font-bold text-lg">Estimated First-Year Total</span>
                    <span className="font-display text-3xl font-bold text-gold-400">$100–200K</span>
                  </div>
                </div>
              </div>

              <p>
                That's <strong>$4,000–$6,000 per truck</strong> in first-year value—with compound benefits as shipper relationships deepen, brand presence generates more leads, and insurance rates improve with a stronger safety profile over time.
              </p>

              {/* Key Principles */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Principles That Drive Results</h2>

              <p>
                Whether you're a 15-truck operation or a 50-truck fleet, the fundamentals are the same:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span><strong>Scaling trucks without scaling infrastructure is a trap.</strong> Every new truck adds fixed costs. Without enterprise-level buying power, those costs compound against you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span><strong>Broker dependency limits your ceiling.</strong> The fastest path to sustainable margin is direct shipper relationships. Every broker load is 15–25% you're leaving on the table.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span><strong>Brand matters more than most carriers realize.</strong> Shippers vet carriers online before responding to outreach. A professional presence isn't vanity—it's a sales tool.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span><strong>Comprehensive beats piecemeal.</strong> Addressing cost, revenue, and brand simultaneously creates compounding returns that isolated improvements can't match.</span>
                </li>
              </ul>

              <p>
                GTC exists to give mid-size carriers the resources of an enterprise operation without the overhead of building those capabilities in-house. One partnership, three pillars, measurable ROI.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              
              {/* What's Included */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Full-Service Includes</h3>
                <ul className="space-y-3">
                  {[
                    'Insurance procurement',
                    'Fuel purchasing program',
                    'Lane acquisition & sales',
                    'Direct shipper connections',
                    'Website design & SEO',
                    'Capability deck creation',
                    'Marketing strategy',
                    'Ongoing account management',
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

              {/* Best For */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Best For</h3>
                <div className="space-y-3 text-sm">
                  {[
                    'Fleets with 10–50+ trucks',
                    'Carriers growing but losing margin',
                    'Operations dependent on brokers for 30%+ of loads',
                    'Companies without a dedicated sales team',
                    'Fleets with outdated or no web presence',
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results at a Glance */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Client Results</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { type: '30-truck fleet, Southeast', result: '$180K first-year value across all 3 pillars' },
                    { type: '15-truck carrier, Texas', result: 'Broker dependency dropped from 45% to 12%' },
                    { type: '22-truck operation, Midwest', result: '$127K combined savings + revenue gains' },
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
                  Ready for a Full Assessment?
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  See how GTC can address cost, revenue, and brand for your fleet.
                </p>
                <Link 
                  href="/book-call" 
                  className="inline-flex items-center justify-center w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 px-6 rounded transition-colors"
                >
                  Book Your Free Consultation
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-center block">Explore Individual Services</p>
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold text-center mb-12">
            Not Ready for Full Service? Start With One Pillar.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <Link href="/services/cost-reduction" className="group bg-cream-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Pillar 1</span>
              <h3 className="font-display text-base font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Cost Reduction
              </h3>
              <p className="text-sm text-gray-600 mb-0">Insurance, fuel, and operating expense optimization.</p>
            </Link>

            <Link href="/services/revenue-growth" className="group bg-cream-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Pillar 2</span>
              <h3 className="font-display text-base font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Revenue Growth
              </h3>
              <p className="text-sm text-gray-600 mb-0">Dedicated lanes and direct shipper connections.</p>
            </Link>

            <Link href="/services/brand-marketing" className="group bg-cream-100 rounded-lg p-6 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Pillar 3</span>
              <h3 className="font-display text-base font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Brand & Marketing
              </h3>
              <p className="text-sm text-gray-600 mb-0">Professional presence that wins shipper confidence.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
            What Could Your Fleet Unlock?
          </h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">
            Whether you're 10 trucks or 100, GTC helps you operate like an enterprise without becoming one.
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
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
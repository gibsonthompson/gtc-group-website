'use client'

import Link from 'next/link'

export default function DedicatedLanesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900" />
        
        <div className="relative max-w-[1200px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/revenue-growth" className="hover:text-gold-400 transition-colors">Revenue Growth</Link>
            <span>/</span>
            <span className="text-white">Dedicated Lanes</span>
          </nav>
          
          <span className="inline-block bg-gold-500 text-navy-900 py-1.5 px-3 text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mb-6">
            Revenue Growth
          </span>
          
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-bold leading-[1.15] tracking-[-0.02em] max-w-[800px] mb-6">
            Stop Gambling on Load Boards. <span className="text-gold-400">Start Building Dedicated Lanes.</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-[600px] leading-relaxed">
            Owner-operators and small fleets lose thousands every month to broker fees and deadhead miles. GTC connects you directly with shippers who need consistent capacity—no middlemen, no bidding wars.
          </p>
        </div>
      </section>

      {/* Typical Results Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 text-center pt-6 mb-0">Typical Client Results Within 90 Days</p>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-8 pr-6 md:pr-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-500">15–25%</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Revenue Increase</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">0%</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Broker Fees</p>
            </div>
            <div className="py-8 px-6 md:px-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">&lt;5%</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Deadhead Miles</p>
            </div>
            <div className="py-8 pl-6 md:pl-8 text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">Weekly</p>
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mt-2">Guaranteed Freight</p>
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
                <h2 className="font-display text-2xl text-navy-900 font-bold mb-4 mt-0">The Load Board Trap</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  Most independent carriers start the same way: get your authority, sign up for DAT or Truckstop, and start refreshing at 4 AM. Some weeks are solid. Others, you sit for days waiting on a decent load. The inconsistency is what kills profitability—and eventually, the business itself.
                </p>
              </div>

              <p>
                Load boards create a race to the bottom. Hundreds of carriers compete for the same freight while brokers capture 15–25% of the margin. The system is designed to work for brokers—not for the people actually moving the freight.
              </p>

              <p>
                The math is brutal: between broker fees, deadhead miles chasing loads, and unpredictable downtime, many owner-operators gross less than they made as company drivers. More stress, more risk, less money.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8">
                <p className="text-red-800 font-semibold mb-2">The Real Cost of Load Board Dependency</p>
                <ul className="text-red-700 text-sm space-y-1 mb-0 list-none pl-0">
                  <li>• 15–25% of revenue lost to broker fees on every load</li>
                  <li>• Unpredictable weekly income makes planning impossible</li>
                  <li>• 15–20% of miles run empty chasing the next load</li>
                  <li>• No relationships means no leverage on rates</li>
                  <li>• Constant competition against thousands of other carriers</li>
                </ul>
              </div>

              <p>
                This isn't a driver problem—it's a structural problem. And the solution isn't working harder on the same platforms. It's getting off them entirely.
              </p>

              {/* The Solution */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">How GTC Gets You Off the Boards</h2>

              <p>
                GTC's lane acquisition service does one thing: connect carriers directly with shippers who need consistent, reliable capacity. No brokers. No bidding wars. Just straightforward relationships where both sides benefit.
              </p>

              <p>
                Here's how it works:
              </p>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden my-8">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">1</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">We Assess Your Operation</h3>
                    <p className="text-sm text-gray-600 mb-0">Equipment type, preferred lanes, home time needs, safety record. We build a profile of what makes you the right fit for specific shippers.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">2</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">We Match You With Shippers</h3>
                    <p className="text-sm text-gray-600 mb-0">Our sales team works our shipper network to find dedicated lanes that match your operation. We negotiate rates on your behalf—rates without broker markup built in.</p>
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-navy-900 rounded flex items-center justify-center mb-4">
                      <span className="text-gold-400 font-display font-bold text-lg">3</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 mb-2">You Run Consistent Freight</h3>
                    <p className="text-sm text-gray-600 mb-0">Same lanes, same customers, every week. You build a direct relationship with the shipper. No more refreshing load boards at 4 AM.</p>
                  </div>
                </div>
              </div>

              {/* Why It Works */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Why Direct Shipper Relationships Win</h2>

              <p>
                The difference between load board freight and dedicated lanes isn't incremental—it's structural. When you remove the broker from the equation, both the carrier and the shipper come out ahead.
              </p>

              <div className="bg-navy-900 text-white rounded-lg p-8 my-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-3">For the Carrier</p>
                    <ul className="space-y-2 text-white/80 text-sm">
                      {['Consistent weekly freight—no downtime','Higher per-mile rates without broker fees','Predictable schedule and home time','Minimal deadhead miles between loads'].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-gold-400 text-sm font-bold tracking-wide uppercase mb-3">For the Shipper</p>
                    <ul className="space-y-2 text-white/80 text-sm">
                      {['Reliable, vetted capacity they can count on','Lower total cost without broker markup','Consistent service quality from the same driver','Direct communication—no telephone game'].map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                This is the model that mid-size and enterprise shippers already use with their core carriers. GTC simply opens that door for owner-operators and small fleets who don't have a dedicated sales team knocking on shipper doors.
              </p>

              {/* Results */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">What Our Clients Typically See</h2>

              <p>
                Results vary by operation size, equipment type, and market conditions. But across our client base, the pattern is consistent: carriers who transition from load board dependency to dedicated lanes see meaningful improvements within the first 90 days.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-gold-500 mb-1">15–25%</p>
                  <p className="text-sm text-gray-600">Gross revenue increase</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-navy-900 mb-1">&lt;5%</p>
                  <p className="text-sm text-gray-600">Deadhead mile percentage</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="font-display text-3xl font-bold text-navy-900 mb-1">90 Days</p>
                  <p className="text-sm text-gray-600">Average time to first lane</p>
                </div>
              </div>

              <p>
                The revenue increase comes from two places: higher per-mile rates (because there's no broker taking a cut) and dramatically fewer empty miles. Most load board-dependent carriers run 15–20% deadhead. Our clients typically drop below 5%.
              </p>

              {/* Who It's For */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Is This Right For Your Operation?</h2>

              <p>
                GTC's lane acquisition service works best for carriers who are tired of the inconsistency and ready to build something more stable. Specifically:
              </p>

              <div className="bg-white rounded-lg p-8 my-8 shadow-sm">
                <div className="space-y-4">
                  {[
                    { label: 'Owner-operators', desc: 'running 1–3 trucks who want consistent freight without chasing load boards every morning' },
                    { label: 'Small fleets (4–30 trucks)', desc: 'that need dedicated lanes to stabilize revenue and reduce dispatcher workload' },
                    { label: 'Carriers with clean safety records', desc: 'who want to leverage their professionalism into direct shipper relationships' },
                    { label: 'Operations stuck in the broker cycle', desc: 'losing 15–25% of every load to middlemen and ready for a better model' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <svg className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-gray-700 mb-0"><strong className="text-navy-900">{item.label}</strong> {item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                If you're running freight and leaving money on the table to brokers, there's a better way. Let's talk about what dedicated lanes could look like for your specific operation.
              </p>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              
              {/* Quick Comparison */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Load Boards vs. Dedicated Lanes</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { metric: 'Freight source', before: 'Broker-controlled', after: 'Direct shipper' },
                    { metric: 'Weekly consistency', before: 'Unpredictable', after: 'Guaranteed' },
                    { metric: 'Broker fees', before: '15–25%', after: '0%' },
                    { metric: 'Deadhead miles', before: '15–20%', after: '<5%' },
                    { metric: 'Rate negotiation', before: 'Race to bottom', after: 'Fair market rate' },
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

              {/* Services Included */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {[
                    'Dedicated sales representation',
                    'Shipper network access',
                    'Lane matching & negotiation',
                    'Rate analysis & benchmarking',
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

              {/* Results at a Glance */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Results at a Glance</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { type: 'Owner-operator, Southeast', result: '+23% revenue in 90 days' },
                    { type: '8-truck fleet, Midwest', result: '$12K/mo in recovered broker fees' },
                    { type: '15-truck carrier, Texas', result: 'Deadhead reduced from 18% to 4%' },
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
                  Ready to Ditch the Load Boards?
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Let GTC's sales team find dedicated lanes that match your operation.
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

      {/* Other Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="section-label text-center block">More Ways GTC Helps Carriers</p>
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold text-center mb-12">
            Revenue Growth Is Just the Start
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            <Link href="/services/cost-reduction" className="group bg-cream-100 rounded-lg p-8 hover:shadow-lg transition-all">
              <span className="inline-block bg-navy-900 text-gold-400 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm mb-4">Cost Reduction</span>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                Insurance, Fuel & Operating Costs
              </h3>
              <p className="text-sm text-gray-600 mb-0">
                Pooled buying power and vendor negotiations that save carriers thousands per truck annually.
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
            Your Freight Shouldn't Be a Gamble
          </h2>
          <p className="text-white/70 mb-8 max-w-[500px] mx-auto">
            Carriers who build direct shipper relationships build stable, profitable operations. Let us show you how.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-call" 
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3.5 px-8 rounded transition-colors"
            >
              Book a Free Consultation
            </Link>
            <Link 
              href="/services/revenue-growth" 
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white hover:bg-white hover:text-navy-900 text-white font-bold py-3.5 px-8 rounded transition-colors"
            >
              Explore Revenue Growth Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
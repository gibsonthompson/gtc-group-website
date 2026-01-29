'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FullServiceCaseStudy() {
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
            <Link href="/#results" className="hover:text-gold-400 transition-colors">Results</Link>
            <span>/</span>
            <span className="text-white">Cornerstone Logistics</span>
          </nav>
          
          <span className="inline-block bg-gold-500 text-navy-900 py-1.5 px-3 text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm mb-6">
            Full Service Partnership
          </span>
          
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-bold leading-[1.15] tracking-[-0.02em] max-w-[800px] mb-6">
            How a 30-Truck Fleet Unlocked <span className="text-gold-400">$180,000 in First-Year Value</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-[600px] leading-relaxed">
            Cornerstone Logistics was growing fast but bleeding money on operating costs. A comprehensive GTC partnership changed the trajectory of their business.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="py-8 pr-6 md:pr-8">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-2">Total Value</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-500">$180K</p>
            </div>
            <div className="py-8 px-6 md:px-8">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-2">Fleet Size</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">30 Trucks</p>
            </div>
            <div className="py-8 px-6 md:px-8">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-2">Services Used</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">All 3</p>
            </div>
            <div className="py-8 pl-6 md:pl-8">
              <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-2">Timeframe</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">Year 1</p>
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
              
              {/* The Challenge */}
              <div className="bg-white rounded-lg p-8 mb-10 shadow-sm">
                <h2 className="font-display text-2xl text-navy-900 font-bold mb-4 mt-0">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed mb-0">
                  <strong>Cornerstone Logistics Group</strong> had grown from 8 trucks to 30 in just four years. CEO <strong>Tamara Okonkwo</strong> had built something real—but the rapid expansion was creating problems that threatened to undo everything.
                </p>
              </div>

              <p>
                "We were winning on revenue but losing on margin," Tamara explained. "Every new truck we added felt like it was costing more to operate than the last one. Insurance was killing us. Fuel costs were all over the place. And we were still chasing freight on load boards like we were a five-truck operation."
              </p>

              <p>
                The core issue: Cornerstone had scaled their trucks but hadn't scaled their infrastructure. They were operating a mid-size fleet with small-carrier resources—and paying the premium that comes with it.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <p className="text-amber-800 font-semibold mb-2">The Growing Pains of a Scaling Fleet</p>
                <ul className="text-amber-700 text-sm space-y-1 mb-0 list-none pl-0">
                  <li>• Insurance premiums increasing faster than fleet size</li>
                  <li>• No fuel program—paying retail at the pump</li>
                  <li>• 40% of loads still sourced from brokers</li>
                  <li>• Outdated website driving zero inbound leads</li>
                  <li>• No dedicated sales team to pursue shipper contracts</li>
                </ul>
              </div>

              <p>
                Cornerstone needed a partner who could address all of these challenges at once—not five different vendors with five different relationships to manage. That's when they found The GTC Group.
              </p>

              {/* The Partnership */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">The Partnership</h2>
              
              <p>
                GTC proposed a comprehensive engagement spanning all three of their service pillars: cost reduction, revenue growth, and brand development. For Cornerstone, this meant attacking margin compression from every angle simultaneously.
              </p>

              <blockquote className="border-l-4 border-gold-500 pl-6 my-8 italic text-gray-700">
                "Most consultants want to do one thing well. GTC said they could help us across the board—and they backed it with a guarantee. If they didn't deliver ROI in the first week, we'd pay nothing. That got my attention."
                <footer className="text-sm text-gray-500 mt-2 not-italic">— Tamara Okonkwo, CEO</footer>
              </blockquote>

              <p>
                Over the first 90 days, GTC deployed resources across Cornerstone's operation:
              </p>

              {/* Three Pillars */}
              <div className="space-y-6 my-10">
                {/* Pillar 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-navy-900 px-6 py-4">
                    <h3 className="text-white font-display font-bold text-lg m-0">Pillar 1: Cost Reduction</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">
                      GTC restructured Cornerstone's insurance across their 30-truck fleet, negotiating through their carrier network for enterprise-level rates. They also enrolled Cornerstone in their bulk fuel purchasing program.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">$68,000</p>
                        <p className="text-xs text-gray-500">Insurance savings</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">$31,000</p>
                        <p className="text-xs text-gray-500">Fuel savings</p>
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
                      GTC's dedicated sales team worked to reduce Cornerstone's broker dependency. Within six months, they'd secured three direct shipper contracts covering 60% of the fleet's capacity.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">$54,000</p>
                        <p className="text-xs text-gray-500">Eliminated broker fees</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">3</p>
                        <p className="text-xs text-gray-500">Direct shipper contracts</p>
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
                      GTC rebuilt Cornerstone's web presence from scratch—professional design, SEO optimization, and a capability deck that positioned them for shipper RFPs. The site started generating inbound leads within 60 days.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">$27,000</p>
                        <p className="text-xs text-gray-500">Est. lead value (Year 1)</p>
                      </div>
                      <div className="bg-cream-100 rounded p-4 text-center">
                        <p className="font-display text-2xl font-bold text-gold-500">12</p>
                        <p className="text-xs text-gray-500">Qualified inbound leads</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Value Breakdown */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Total Value Breakdown</h2>

              <p>
                When you add up the impact across all three pillars, the numbers are substantial:
              </p>

              <div className="bg-navy-900 text-white rounded-lg p-8 my-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Insurance savings</span>
                    <span className="font-display text-xl font-bold">$68,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Fuel program savings</span>
                    <span className="font-display text-xl font-bold">$31,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Eliminated broker fees</span>
                    <span className="font-display text-xl font-bold">$54,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Inbound lead value</span>
                    <span className="font-display text-xl font-bold">$27,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gold-400 font-bold text-lg">First-Year Total</span>
                    <span className="font-display text-3xl font-bold text-gold-400">$180,000</span>
                  </div>
                </div>
              </div>

              <p>
                That's <strong>$6,000 per truck</strong> in first-year value—with compound benefits in subsequent years as shipper relationships deepen and the new brand presence continues generating leads.
              </p>

              {/* The Transformation */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">The Transformation</h2>

              <p>
                Beyond the dollars, Cornerstone's operation fundamentally changed. They went from a reactive business—always chasing the next load—to a proactive one with predictable revenue, controlled costs, and a professional market presence.
              </p>

              <blockquote className="border-l-4 border-gold-500 pl-6 my-8 italic text-gray-700">
                "We were acting like a small fleet pretending to be bigger. Now we actually operate like the 30-truck company we are. We have systems. We have relationships. We have margin. It's a completely different business."
                <footer className="text-sm text-gray-500 mt-2 not-italic">— Tamara Okonkwo, CEO</footer>
              </blockquote>

              <p>
                Cornerstone is now positioned to grow to 50 trucks over the next two years—growth that would have been unsustainable under their previous cost structure. The infrastructure GTC helped build scales with them.
              </p>

              {/* Key Takeaways */}
              <h2 className="font-display text-2xl text-navy-900 font-bold mt-12 mb-4">Key Takeaways</h2>

              <p>
                For mid-size fleets facing similar challenges, Cornerstone's experience highlights several principles:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span><strong>Scaling trucks without scaling infrastructure is a trap.</strong> Every new truck adds fixed costs—insurance, fuel, maintenance. Without enterprise-level buying power, those costs compound.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span><strong>Broker dependency limits your ceiling.</strong> The fastest path to sustainable margin is direct shipper relationships. Every load through a broker is 15-25% you're leaving on the table.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span><strong>Brand matters more than most carriers realize.</strong> Shippers vet carriers online before responding to outreach. A professional web presence isn't vanity—it's a sales tool.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span><strong>Comprehensive beats piecemeal.</strong> Addressing cost, revenue, and brand simultaneously creates compounding returns. One partner who understands the full picture outperforms five specialists.</span>
                </li>
              </ul>

            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              
              {/* Company Profile */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Company Profile</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500 mb-1">Company</dt>
                    <dd className="font-semibold text-navy-900">Cornerstone Logistics Group</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">Headquarters</dt>
                    <dd className="font-semibold text-navy-900">Charlotte, North Carolina</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">Fleet Size</dt>
                    <dd className="font-semibold text-navy-900">30 Class 8 tractors</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">Primary Freight</dt>
                    <dd className="font-semibold text-navy-900">Dry van, OTR</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 mb-1">Founded</dt>
                    <dd className="font-semibold text-navy-900">2020</dd>
                  </div>
                </dl>
              </div>

              {/* Services Used */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">GTC Services Used</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Insurance Procurement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Fuel Program</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Lane Acquisition</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Direct Shipper Connections</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Website Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Marketing Strategy</span>
                  </li>
                </ul>
              </div>

              {/* Value Summary */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-4">Value Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Cost Reduction</span>
                    <span className="font-bold text-navy-900">$99,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Revenue Growth</span>
                    <span className="font-bold text-navy-900">$54,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Brand & Marketing</span>
                    <span className="font-bold text-navy-900">$27,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-gold-500">Total</span>
                    <span className="font-bold text-gold-500 text-lg">$180,000</span>
                  </div>
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
                <p className="text-white/50 text-xs mt-4">
                  1-week ROI guarantee
                </p>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold text-center mb-12">
            More Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {/* Related 1 */}
            <Link href="/case-studies/insurance-savings" className="group bg-cream-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-[180px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590496793907-51d60f3d9c68?auto=format&fit=crop&w=800&q=80')"}}>
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                <span className="absolute bottom-4 left-4 bg-gold-500 text-navy-900 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">
                  Cost Reduction
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  Regional Carrier Saves $47K on Insurance
                </h3>
                <p className="text-sm text-gray-600">
                  A 12-truck fleet discovered they were overpaying by thousands per truck. GTC's pooled buying power changed that.
                </p>
              </div>
            </Link>

            {/* Related 2 */}
            <Link href="/case-studies/dedicated-lanes" className="group bg-cream-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-[180px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80')"}}>
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                <span className="absolute bottom-4 left-4 bg-gold-500 text-navy-900 py-1 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">
                  Revenue Growth
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  OTR Operator Increases Revenue 23%
                </h3>
                <p className="text-sm text-gray-600">
                  Struggling with load board inconsistency, this owner-operator found stability through direct shipper connections.
                </p>
              </div>
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
            Whether you're 10 trucks or 100, GTC can help you operate like an enterprise without becoming one.
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
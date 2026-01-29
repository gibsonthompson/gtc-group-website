'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-start bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden pt-[100px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.12]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-navy-900 to-transparent" />
        <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-6">
          <div className="max-w-[720px] !text-left [&>*]:text-left">
            <div className="inline-flex items-center gap-[10px] bg-gold-500/[0.12] border border-gold-500/25 py-[10px] px-[18px] rounded mb-7 animate-fadeInUp">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-gold-400">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold-400">Logistics Advisory Services</span>
            </div>
            <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-6 animate-fadeInUp animation-delay-100">
              Level the Playing Field Against <span className="text-gold-400">Big Brokerages</span>
            </h1>
            <p className="text-[18px] text-white/75 mb-9 max-w-[560px] leading-[1.8] animate-fadeInUp animation-delay-200">
              Founded by industry veterans, The GTC Group combines carrier resources to deliver brokerage-level pricing on insurance, fuel, maintenance, and driver services—plus direct sales support to grow your business.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-300">
              <Link href="/book-call" className="btn btn-primary">
                Book a Call
              </Link>
              <Link href="#services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-[72px] pt-9 border-t border-white/10 animate-fadeInUp animation-delay-400">
              <div className="text-left">
                <div className="font-display text-[40px] font-bold text-gold-400 leading-none mb-2">1 Week</div>
                <div className="text-[13px] text-white/60 tracking-[0.02em]">To see ROI or it&apos;s free</div>
              </div>
              <div className="text-left">
                <div className="font-display text-[40px] font-bold text-gold-400 leading-none mb-2">$8,400</div>
                <div className="text-[13px] text-white/60 tracking-[0.02em]">Avg. annual savings per truck</div>
              </div>
              <div className="text-left">
                <div className="font-display text-[40px] font-bold text-gold-400 leading-none mb-2">35+</div>
                <div className="text-[13px] text-white/60 tracking-[0.02em]">Carriers in our network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section id="about" className="relative py-[100px] bg-cream-100">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="lg:pr-5">
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-6">
                Built by Brokerage Professionals, For Carriers
              </h2>
              <p className="text-[16px] text-gray-600 leading-[1.8] mb-[18px]">
                The GTC Group was founded by former brokerage professionals who saw an unfair landscape: large nationwide carriers and brokerages commanding better rates and resources while independent carriers struggled to compete.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.8] mb-[18px]">
                We changed that. By combining the buying power of our carrier clients, we negotiate the same—or better—deals that mega-brokerages enjoy. You get access to bulk pricing on fuel, insurance, maintenance, and driver services without losing your independence.
              </p>
              <p className="text-[16px] text-gray-600 leading-[1.8] mb-8">
                Our team has collectively managed over $500 million in freight and negotiated thousands of carrier contracts. We know exactly what levers to pull to maximize your profitability.
              </p>
              <Link href="#services" className="btn btn-outline">
                See How We Help
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" 
                alt="Professional trucking fleet operations"
                className="rounded shadow-xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full border-[3px] border-gold-500 rounded -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="section-label">The Challenge</span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-5">
            What&apos;s Holding Your Business Back?
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-[60px]">
            Independent carriers face systemic disadvantages in the logistics industry. We eliminate them.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] gap-8 items-stretch">
            {/* Problem Card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-l-4 border-gray-500 rounded p-11 text-left">
              <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.625rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-4">The Problem</h3>
              <p className="text-[15px] text-gray-600 mb-5">As an independent carrier, you&apos;re at a disadvantage from day one:</p>
              <ul className="space-y-0">
                <li className="py-[10px] pl-6 relative text-[15px] text-gray-700 border-b border-black/[0.06] before:content-['→'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Paying premium rates for insurance, fuel, and maintenance</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-gray-700 border-b border-black/[0.06] before:content-['→'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Limited access to high-value lanes and direct shipper relationships</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-gray-700 border-b border-black/[0.06] before:content-['→'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Competing against mega-carriers with deeper resources</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-gray-700 border-b border-black/[0.06] before:content-['→'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">No leverage to renegotiate existing contracts</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-gray-700 before:content-['→'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Marketing and sales stretched thin while you focus on operations</li>
              </ul>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center lg:rotate-0 rotate-90 py-4 lg:py-0">
              <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* Solution Card */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-700 border-l-4 border-gold-500 rounded p-11 text-left">
              <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.625rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-4">The GTC Solution</h3>
              <p className="text-[15px] text-white/80 mb-5">We pool carrier resources to give you enterprise-level advantages:</p>
              <ul className="space-y-0">
                <li className="py-[10px] pl-6 relative text-[15px] text-white border-b border-white/10 before:content-['→'] before:absolute before:left-0 before:text-gold-400 before:font-semibold">Bulk-negotiated rates on insurance, fuel, maintenance, and driver services</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-white border-b border-white/10 before:content-['→'] before:absolute before:left-0 before:text-gold-400 before:font-semibold">Dedicated sales team finding and securing profitable lanes on your behalf</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-white border-b border-white/10 before:content-['→'] before:absolute before:left-0 before:text-gold-400 before:font-semibold">Direct connections to shippers—cutting out unnecessary middlemen</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-white border-b border-white/10 before:content-['→'] before:absolute before:left-0 before:text-gold-400 before:font-semibold">Renegotiation of your current contracts for immediate savings</li>
                <li className="py-[10px] pl-6 relative text-[15px] text-white before:content-['→'] before:absolute before:left-0 before:text-gold-400 before:font-semibold">Professional website, marketing, and online presence management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-[100px] bg-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="section-label">What We Do</span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-5">
            Comprehensive Carrier Support
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-14">
            Three pillars of service designed to reduce your costs, increase your revenue, and strengthen your market position.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Cost Reduction */}
            <div className="animate-on-scroll bg-white rounded shadow-md p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-5">
                <svg className="w-[26px] h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-3">Cost Reduction</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-5">Leverage our collective buying power to access rates typically reserved for large fleets.</p>
              <ul className="space-y-1.5 mb-[18px]">
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Insurance procurement & optimization</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Bulk fuel purchasing programs</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Maintenance network access</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Driver services & recruitment</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Equipment financing</li>
              </ul>
              <Link href="/services/cost-reduction" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>

            {/* Revenue Growth */}
            <div className="animate-on-scroll bg-white rounded shadow-md p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-5">
                <svg className="w-[26px] h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                  <path d="M17 6h6v6"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-3">Revenue Growth</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-5">Our sales team works to expand your business and maximize your rates.</p>
              <ul className="space-y-1.5 mb-[18px]">
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Dedicated sales representation</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Lane acquisition & optimization</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Direct shipper connections</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Rate renegotiation services</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Contract management</li>
              </ul>
              <Link href="/services/revenue-growth" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>

            {/* Brand & Marketing */}
            <div className="animate-on-scroll bg-white rounded shadow-md p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold-500 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-5">
                <svg className="w-[26px] h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-3">Brand & Marketing</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7] mb-5">Professional presence to compete with established carriers.</p>
              <ul className="space-y-1.5 mb-[18px]">
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Professional website design</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Online reputation management</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Marketing strategy & execution</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Digital presence optimization</li>
                <li className="py-1.5 pl-[18px] relative text-[14px] text-gray-700 before:content-['✓'] before:absolute before:left-0 before:text-gold-500 before:font-semibold">Brand identity development</li>
              </ul>
              <Link href="/services/brand-marketing" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="relative py-[100px] bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden">
        <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,162,39,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
            <div>
              <span className="section-label">Our Promise</span>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-5">
                ROI in Week One—<span className="text-gold-400">Or It&apos;s Free</span>
              </h2>
              <p className="text-[16px] text-white/75 leading-[1.8] mb-7">
                We&apos;re so confident in our ability to deliver results that we put our money where our mouth is. If we don&apos;t make you back our fee within the first week of paid service, you pay nothing.
              </p>
              <p className="text-[16px] text-white/75 leading-[1.8] mb-7">
                No other logistics advisory firm offers this guarantee because no one else has our track record. We succeed when you succeed—it&apos;s that simple.
              </p>
              <Link href="/book-call" className="btn btn-primary">
                Claim Your Free Assessment
              </Link>
            </div>
            <div className="bg-white/[0.04] border-2 border-gold-500 rounded-md p-9 text-center">
              <div className="w-[72px] h-[72px] bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-9 h-9 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="font-display text-[1.5rem] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-3.5">1-Week Money-Back Guarantee</h3>
              <p className="text-[15px] text-white/65 leading-[1.7]">
                If we don&apos;t deliver ROI equal to our fee within your first week of paid service, you receive a full refund. Zero risk, maximum upside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-5">
            From Assessment to Results in Days
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-14">
            Our streamlined process gets you operational and seeing savings faster than you&apos;d expect.
          </p>
          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-500 to-gold-300" />
            
            {/* Step 1 */}
            <div className="animate-on-scroll relative pt-[92px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-navy-900 rounded-full flex items-center justify-center shadow-lg z-[2]">
                <span className="font-display text-[28px] font-bold text-gold-400">1</span>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5">Discovery Call</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7]">We learn about your operation, current challenges, and goals. No commitment required.</p>
            </div>

            {/* Step 2 */}
            <div className="animate-on-scroll relative pt-[92px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-navy-900 rounded-full flex items-center justify-center shadow-lg z-[2]">
                <span className="font-display text-[28px] font-bold text-gold-400">2</span>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5">Assessment</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7]">Within 1 day, we complete a comprehensive review of your costs, contracts, and opportunities.</p>
            </div>

            {/* Step 3 */}
            <div className="animate-on-scroll relative pt-[92px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-navy-900 rounded-full flex items-center justify-center shadow-lg z-[2]">
                <span className="font-display text-[28px] font-bold text-gold-400">3</span>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5">Implementation</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7]">By day 7, we&apos;ve completed all integrations and begun implementing cost-saving measures.</p>
            </div>

            {/* Step 4 */}
            <div className="animate-on-scroll relative pt-[92px]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[72px] bg-navy-900 rounded-full flex items-center justify-center shadow-lg z-[2]">
                <span className="font-display text-[28px] font-bold text-gold-400">4</span>
              </div>
              <h4 className="font-display text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5">Growth</h4>
              <p className="text-[14px] text-gray-600 leading-[1.7]">Week 2 begins paid service—our sales team starts securing lanes and renegotiating rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Results */}
      <section id="results" className="py-[100px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="section-label">Results</span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-5">
            Real Savings, Real Growth
          </h2>
          <p className="text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-14">
            See how carriers like you have transformed their operations with The GTC Group.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Case 1 - Insurance Savings */}
            <Link href="/case-studies/insurance-savings" className="animate-on-scroll bg-white rounded overflow-hidden shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="h-[180px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590496793907-51d60f3d9c68?auto=format&fit=crop&w=800&q=80')"}}>
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                <span className="absolute bottom-3.5 left-3.5 z-[2] bg-gold-500 text-navy-900 py-1.5 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">Cost Reduction</span>
              </div>
              <div className="p-6 text-left">
                <h4 className="font-display text-[1.1rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5 group-hover:text-gold-600 transition-colors">Regional carrier slashes insurance costs</h4>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-[18px]">A 12-truck operation was overpaying for insurance by working with a local agent. GTC pooled their coverage with other carriers.</p>
                <div className="flex items-center justify-between pt-3.5 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[26px] font-bold text-gold-500">$47K</span>
                    <span className="text-[13px] text-gray-500">Annual savings</span>
                  </div>
                  <span className="text-gold-500 group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Case 2 - Dedicated Lanes */}
            <Link href="/case-studies/dedicated-lanes" className="animate-on-scroll bg-white rounded overflow-hidden shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="h-[180px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=80')"}}>
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                <span className="absolute bottom-3.5 left-3.5 z-[2] bg-gold-500 text-navy-900 py-1.5 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">Revenue Growth</span>
              </div>
              <div className="p-6 text-left">
                <h4 className="font-display text-[1.1rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5 group-hover:text-gold-600 transition-colors">OTR operator lands dedicated lanes</h4>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-[18px]">Struggling to find consistent freight, this owner-operator relied on load boards. GTC connected them directly with shippers.</p>
                <div className="flex items-center justify-between pt-3.5 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[26px] font-bold text-gold-500">+23%</span>
                    <span className="text-[13px] text-gray-500">Revenue in 90 days</span>
                  </div>
                  <span className="text-gold-500 group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Case 3 - Full Service */}
            <Link href="/case-studies/full-service-partnership" className="animate-on-scroll bg-white rounded overflow-hidden shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
              <div className="h-[180px] bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80')"}}>
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />
                <span className="absolute bottom-3.5 left-3.5 z-[2] bg-gold-500 text-navy-900 py-1.5 px-2.5 text-[10px] font-bold tracking-[0.08em] uppercase rounded-sm">Full Service</span>
              </div>
              <div className="p-6 text-left">
                <h4 className="font-display text-[1.1rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2.5 group-hover:text-gold-600 transition-colors">Growing fleet gets enterprise treatment</h4>
                <p className="text-[14px] text-gray-600 leading-[1.7] mb-[18px]">A 30-truck fleet needed fuel savings, better lanes, and a professional web presence to compete for contracts.</p>
                <div className="flex items-center justify-between pt-3.5 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[26px] font-bold text-gold-500">$180K</span>
                    <span className="text-[13px] text-gray-500">First-year value</span>
                  </div>
                  <span className="text-gold-500 group-hover:translate-x-1 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* View All Link */}
          <div className="mt-12">
            <Link href="/case-studies" className="btn btn-outline">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-[100px] bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.08]" />
        <div className="relative z-[2] max-w-[720px] mx-auto px-6 text-center">
          <span className="section-label">Get Started</span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-5">
            Ready to Stop Leaving Money on the Table?
          </h2>
          <p className="text-[17px] text-white/75 leading-[1.8] mb-9">
            Schedule a free discovery call with our team. We&apos;ll assess your operation, identify immediate savings opportunities, and show you exactly how we can help—no obligation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/book-call" className="btn btn-primary">
              Book a Call
            </Link>
            <a href="mailto:jbrewer@gtcadvisers.com" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
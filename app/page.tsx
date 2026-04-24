'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
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
      <section className="relative min-h-screen flex items-center justify-start bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden pt-24 pb-12 md:pt-[100px] md:pb-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-[0.12]" />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-navy-900 to-transparent" />
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="max-w-[720px] !text-left [&>*]:text-left">
            <h1 className="font-display text-[clamp(1.75rem,5vw,3.25rem)] text-white font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-6 animate-fadeInUp">
              Level the Playing Field Against <span className="text-gold-400">Big Brokerages</span>
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/75 mb-7 md:mb-9 max-w-[560px] leading-[1.7] md:leading-[1.8] animate-fadeInUp animation-delay-100">
              The GTC Group combines independent carriers&apos; buying power to deliver enterprise-level pricing on insurance, fuel, and maintenance — plus a dedicated sales team to grow your freight book.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp animation-delay-200">
              <Link href="/book-call" className="btn btn-primary">
                Book a Call
              </Link>
              <Link href="#how-we-help" className="btn btn-secondary">
                How We Help
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 mt-12 md:mt-[72px] pt-7 md:pt-9 border-t border-white/10 animate-fadeInUp animation-delay-300">
              <div className="text-left">
                <div className="font-display text-[24px] md:text-[40px] font-bold text-gold-400 leading-none mb-1 md:mb-2">1 Week</div>
                <div className="text-[11px] md:text-[13px] text-white/60 tracking-[0.02em]">To see ROI or it&apos;s free</div>
              </div>
              <div className="text-left">
                <div className="font-display text-[24px] md:text-[40px] font-bold text-gold-400 leading-none mb-1 md:mb-2">$3–8K</div>
                <div className="text-[11px] md:text-[13px] text-white/60 tracking-[0.02em]">Avg. savings per truck/year</div>
              </div>
              <div className="text-left">
                <div className="font-display text-[24px] md:text-[40px] font-bold text-gold-400 leading-none mb-1 md:mb-2">35+</div>
                <div className="text-[11px] md:text-[13px] text-white/60 tracking-[0.02em]">Carriers in our network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem — single focused section instead of separate About + Problem/Solution */}
      <section className="relative py-16 md:py-[100px] bg-cream-100 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500" />
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <span className="section-label">The Problem</span>
              <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-6">
                Independent Carriers Pay More for Everything
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.7] md:leading-[1.8] mb-6">
                Large fleets and brokerages negotiate volume discounts on insurance, fuel, maintenance, and lane access. Independent carriers get retail pricing on all of it — not because they run worse operations, but because they lack the leverage that comes with scale.
              </p>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.7] md:leading-[1.8] mb-6 md:mb-8">
                We built GTC to fix that. Our founders spent years on the brokerage side watching these systems work against smaller carriers. Now we use the same playbook — pooled volume, direct relationships, aggressive negotiation — on your behalf.
              </p>
              <Link href="/book-call" className="btn btn-outline">
                See What You Could Save
              </Link>
            </div>

            {/* Stacked cost cards — visual variety instead of side-by-side problem/solution */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Insurance',
                  problem: 'Small carriers pay $12K–$18K per truck through local agents who don\'t have volume leverage.',
                  solution: 'Our pooled network gets you fleet-rate pricing — same coverage, 15–25% less per year.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Fuel',
                  problem: 'At 6 MPG and 100K miles/year, every cent per gallon is $167 in annual cost. Most owner-operators overpay by 15–30 cents.',
                  solution: 'Discounted fuel cards across a nationwide network. $0.05–$0.15/gallon off at thousands of locations.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Maintenance',
                  problem: 'Independent carriers pay list price at repair shops and tire dealers. Fleets of 50+ get priority scheduling and bulk rates.',
                  solution: 'Preferred pricing across our repair and parts network — fleet discounts without running a fleet.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 6h6v6" />
                    </svg>
                  ),
                  title: 'Freight & Revenue',
                  problem: 'Load board dependency costs $31K+/year between subscription fees, broker cuts, and deadhead miles.',
                  solution: 'Our sales team builds direct shipper relationships for you — consistent freight, no middlemen.',
                },
              ].map((item) => (
                <div key={item.title} className="animate-on-scroll bg-white rounded-lg p-5 md:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-[1.05rem] md:text-[1.15rem] text-navy-900 font-bold mb-2">{item.title}</h3>
                      <p className="text-[13px] md:text-[14px] text-gray-500 leading-[1.6] mb-2">{item.problem}</p>
                      <p className="text-[13px] md:text-[14px] text-navy-900 leading-[1.6] font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="how-we-help" className="py-16 md:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 text-center">
          <span className="section-label">What We Do</span>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-5">
            Three Ways We Put Money Back in Your Operation
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-10 md:mb-14">
            Reduce what you spend, increase what you earn, and look like the serious operation you are.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {/* Cost Reduction */}
            <div className="animate-on-scroll bg-cream-100 rounded-lg p-6 md:p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-500/30">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-4 md:mb-5">
                <svg className="w-6 h-6 md:w-[26px] md:h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.125rem] md:text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2 md:mb-3">Cost Reduction</h4>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.7] mb-4 md:mb-5">Pooled purchasing power on the line items that eat your margins — insurance, fuel, maintenance, and driver services.</p>
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <span className="font-display text-2xl font-bold text-gold-500">$3–8K</span>
                <span className="text-xs text-gray-500">saved per truck/year</span>
              </div>
              <Link href="/services/cost-reduction" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>

            {/* Revenue Growth */}
            <div className="animate-on-scroll bg-cream-100 rounded-lg p-6 md:p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-500/30">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-4 md:mb-5">
                <svg className="w-6 h-6 md:w-[26px] md:h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                  <path d="M17 6h6v6"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.125rem] md:text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2 md:mb-3">Revenue Growth</h4>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.7] mb-4 md:mb-5">A dedicated sales team that prospects shippers, negotiates rates, and secures lanes — so you can focus on running freight.</p>
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <span className="font-display text-2xl font-bold text-gold-500">15–25%</span>
                <span className="text-xs text-gray-500">typical revenue increase</span>
              </div>
              <Link href="/services/revenue-growth" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>

            {/* Brand & Marketing */}
            <div className="animate-on-scroll bg-cream-100 rounded-lg p-6 md:p-10 text-left relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold-500/30">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded flex items-center justify-center mb-4 md:mb-5">
                <svg className="w-6 h-6 md:w-[26px] md:h-[26px] text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4 className="font-display text-[1.125rem] md:text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-2 md:mb-3">Brand & Marketing</h4>
              <p className="text-[13px] md:text-[14px] text-gray-600 leading-[1.7] mb-4 md:mb-5">Professional website, Google Business Profile, and marketing materials — everything shippers look for before they pick up the phone.</p>
              <div className="flex items-center gap-2 mb-4 md:mb-5">
                <span className="font-display text-2xl font-bold text-gold-500">80%</span>
                <span className="text-xs text-gray-500">of shippers research online first</span>
              </div>
              <Link href="/services/brand-marketing" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-500 hover:text-navy-900 hover:gap-2.5 transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee — full-width asymmetric layout for visual variety */}
      <section className="relative py-16 md:py-[100px] bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden">
        <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,162,39,0.08)_0%,transparent_70%)] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(201,162,39,0.05)_0%,transparent_70%)] rounded-full" />
        <div className="relative z-[2] max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center">
            <div>
              <span className="section-label">Our Promise</span>
              <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-white font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-5">
                ROI in Week One—<span className="text-gold-400">Or It&apos;s Free</span>
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.7] md:leading-[1.8] mb-5 md:mb-7">
                If we don&apos;t save you more than our fee within your first week of paid service, you pay nothing. No caveats, no fine print. We take on the risk because we know what the numbers look like before we start.
              </p>
              <Link href="/book-call" className="btn btn-primary">
                Claim Your Free Assessment
              </Link>
            </div>
            <div className="bg-white/[0.04] border-2 border-gold-500 rounded-md p-6 md:p-9 text-center">
              <div className="w-14 h-14 md:w-[72px] md:h-[72px] bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5">
                <svg className="w-7 h-7 md:w-9 md:h-9 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="font-display text-[1.25rem] md:text-[1.5rem] text-white font-bold leading-[1.3] tracking-[-0.02em] mb-3">1-Week Money-Back Guarantee</h3>
              <p className="text-[14px] md:text-[15px] text-white/65 leading-[1.7]">
                Full refund if we don&apos;t deliver ROI equal to our fee within your first week of paid service. Zero risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-[100px] bg-cream-100">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 text-center">
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-5">
            Assessment to Savings in Days, Not Months
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 max-w-[640px] mx-auto leading-[1.7] mb-10 md:mb-14">
            No lengthy onboarding. No six-month ramp. You see numbers within the first week.
          </p>
          
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-500 to-gold-300" />
            
            {[
              { n: '1', t: 'Discovery Call', d: "30 minutes. We learn your operation, your lanes, your pain points. No commitment." },
              { n: '2', t: 'Cost Assessment', d: "Within 24 hours we review your insurance, fuel spend, and contracts. You see the gaps." },
              { n: '3', t: 'Quick Wins', d: "By day 7, cost-saving measures are live. This is when the guarantee clock starts." },
              { n: '4', t: 'Growth Phase', d: "Week 2+: our sales team starts securing dedicated lanes and renegotiating your rates." },
            ].map(step => (
              <div key={step.n} className="animate-on-scroll relative pt-16 md:pt-[92px]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 md:w-[72px] md:h-[72px] bg-navy-900 rounded-full flex items-center justify-center shadow-lg z-[2]">
                  <span className="font-display text-xl md:text-[28px] font-bold text-gold-400">{step.n}</span>
                </div>
                <h4 className="font-display text-[1rem] md:text-[1.25rem] text-navy-900 font-bold leading-[1.3] tracking-[-0.02em] mb-1.5 md:mb-2.5">{step.t}</h4>
                <p className="text-[12px] md:text-[14px] text-gray-600 leading-[1.6] md:leading-[1.7]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For — replaces the old case studies section */}
      <section className="py-16 md:py-[100px] bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-label">Who We Work With</span>
            <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-navy-900 font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-5">
              Built for Carriers Who Want to Compete
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-on-scroll relative bg-navy-900 rounded-lg p-7 md:p-9 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(201,162,39,0.12)_0%,transparent_70%)] rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative">
                <div className="font-display text-[40px] md:text-[48px] font-bold text-gold-400/20 leading-none mb-2">01</div>
                <h3 className="font-display text-[1.1rem] md:text-[1.25rem] text-white font-bold mb-3">Owner-Operators</h3>
                <p className="text-[13px] md:text-[14px] text-white/65 leading-[1.7]">
                  Running 1–5 trucks and paying retail on everything. You know the rates are unfair but don&apos;t have the volume to negotiate. We give you that volume.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll relative bg-navy-900 rounded-lg p-7 md:p-9 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(201,162,39,0.12)_0%,transparent_70%)] rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative">
                <div className="font-display text-[40px] md:text-[48px] font-bold text-gold-400/20 leading-none mb-2">02</div>
                <h3 className="font-display text-[1.1rem] md:text-[1.25rem] text-white font-bold mb-3">Small Fleets (5–25 trucks)</h3>
                <p className="text-[13px] md:text-[14px] text-white/65 leading-[1.7]">
                  Big enough to have real expenses, too small to get fleet pricing. This is where GTC has the most immediate impact — savings compound fast across 5+ trucks.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll relative bg-navy-900 rounded-lg p-7 md:p-9 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle,rgba(201,162,39,0.12)_0%,transparent_70%)] rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative">
                <div className="font-display text-[40px] md:text-[48px] font-bold text-gold-400/20 leading-none mb-2">03</div>
                <h3 className="font-display text-[1.1rem] md:text-[1.25rem] text-white font-bold mb-3">Growing Carriers</h3>
                <p className="text-[13px] md:text-[14px] text-white/65 leading-[1.7]">
                  Ready to move past load boards and build a real book of business. Our sales team and brand services help you look and operate like the established carrier you&apos;re becoming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-16 md:py-[100px] bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-[2] max-w-[720px] mx-auto px-5 md:px-6 text-center">
          <span className="section-label">Get Started</span>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] text-white font-bold leading-[1.2] md:leading-[1.3] tracking-[-0.02em] mb-4 md:mb-5">
            Find Out What You&apos;re Overpaying — Free
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/75 leading-[1.7] md:leading-[1.8] mb-7 md:mb-9">
            30-minute discovery call. We&apos;ll review your current costs, identify the biggest savings opportunities, and give you a clear picture of what GTC can do — whether you sign up or not.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-visible') }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Carrier Advisory</span>
          </div>

          <h1 className="font-display text-[28px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[660px] mb-5 opacity-0 animate-fade-up-1">
            Rate Negotiation, Cost Reduction & Shipper Acquisition for Carrier Operations
          </h1>

          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px] mb-8 opacity-0 animate-fade-up-2">
            The GTC Group provides advisory services to trucking carriers — renegotiating lane rates, reducing insurance and fuel costs through pooled purchasing, and building direct shipper relationships that eliminate broker dependency.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 opacity-0 animate-fade-up-3">
            <Link href="/book-call" className="btn btn-primary">Schedule a Consultation</Link>
            <Link href="#services" className="btn btn-secondary">Our Services</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-14 mt-14 md:mt-20 pt-6 border-t border-white/[0.06]">
            {[
              { value: '$500M+', label: 'In freight managed by our team' },
              { value: '$3–8K', label: 'Avg. annual savings per truck' },
              { value: '7 Days', label: 'To measurable ROI' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[22px] md:text-[28px] font-extrabold text-gold-400 leading-none">{stat.value}</div>
                <div className="font-display text-[11px] md:text-[12px] font-medium text-white/30 mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">
            <div className="reveal relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/team/team-1.png" alt="Jacob Brewer, Founder & CEO" fill className="object-cover grayscale-[20%]" sizes="260px" />
                <div className="absolute top-0 left-0 w-10 h-10">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gold-500" />
                </div>
              </div>
              <div className="mt-3">
                <div className="font-display text-[13px] font-bold text-navy-900">Jacob Brewer</div>
                <div className="font-display text-[11px] font-semibold text-gold-600 tracking-[0.08em] uppercase">Founder & CEO</div>
              </div>
            </div>

            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">About</span>
              </div>

              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Advisory Services for Trucking Carriers
              </h2>

              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75]">
                <p>
                  The GTC Group was founded to address a structural problem in the carrier market: independent and mid-size carriers consistently pay more for insurance, fuel, maintenance, and lane access than their freight volume warrants — because they negotiate individually rather than collectively.
                </p>
                <p>
                  Our team brings senior brokerage and carrier operations experience to every engagement. We audit existing rate structures, renegotiate contracts directly with brokers and shippers, and aggregate purchasing volume across our carrier network to secure fleet-tier pricing on operating costs.
                </p>
                <p>
                  We also maintain a dedicated sales function that builds direct shipper relationships on behalf of our carrier clients — reducing load board dependency and improving per-mile revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Services</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-14">
            <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] max-w-[460px]">
              Rate Negotiation, Cost Reduction & Revenue Growth
            </h2>
            <p className="font-display text-[13px] font-normal text-white/35 leading-[1.7] max-w-[320px]">
              Each service is structured to produce measurable financial impact within the first 30 days of engagement.
            </p>
          </div>

          {/* Service rows */}
          <div className="reveal border-t border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">01</div>
              <h3 className="font-display text-[17px] md:text-[19px] font-bold text-white mb-3 tracking-[-0.01em]">Lane Optimization & Rate Renegotiation</h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[540px]">
                We review your existing lane data — routes, rates, broker and shipper contacts — and renegotiate each contract using current market intelligence. No operational disruption. Immediate impact on per-load revenue.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[20px] font-extrabold text-gold-400">15–25%</div>
              <div className="font-display text-[11px] text-white/30">typical revenue increase</div>
            </div>
          </div>

          <div className="reveal border-t border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">02</div>
              <h3 className="font-display text-[17px] md:text-[19px] font-bold text-white mb-3 tracking-[-0.01em]">Insurance, Fuel & Maintenance Cost Reduction</h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[540px]">
                We aggregate purchasing volume across our carrier network and negotiate fleet-rate pricing with insurance underwriters, fuel card providers, and maintenance networks. Same coverage. Lower cost.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[20px] font-extrabold text-gold-400">$3–8K</div>
              <div className="font-display text-[11px] text-white/30">saved per truck annually</div>
            </div>
          </div>

          <div className="reveal border-t border-b border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">03</div>
              <h3 className="font-display text-[17px] md:text-[19px] font-bold text-white mb-3 tracking-[-0.01em]">Direct Shipper Acquisition & Online Presence</h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[540px]">
                Our sales team prospects shippers, negotiates contract rates, and builds direct relationships on your behalf. We also build and manage carrier websites and Google Business Profiles — the digital infrastructure shippers require before awarding freight.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[20px] font-extrabold text-gold-400">80%</div>
              <div className="font-display text-[11px] text-white/30">of shippers research online</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">Engagement Process</span>
          </div>

          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-12 max-w-[440px]">
            From initial assessment to measurable results in seven days.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Consultation', body: 'A 30-minute call to understand your operation — fleet size, primary lanes, current broker and shipper relationships, and cost structure.' },
              { n: '02', title: 'Assessment', body: 'Within 24 hours, we complete a full review of your rate sheets, insurance policies, fuel spend, and existing contracts. Gaps are documented.' },
              { n: '03', title: 'Implementation', body: 'Rate renegotiation and cost reduction measures begin by day seven. This is when the performance guarantee takes effect.' },
              { n: '04', title: 'Ongoing Advisory', body: 'Continued lane optimization, direct shipper acquisition, and contract management as your operation evolves.' },
            ].map((step) => (
              <div key={step.n} className="reveal">
                <div className="font-display text-[11px] font-semibold text-gold-600 tracking-[0.1em] uppercase mb-2">{step.n}</div>
                <h3 className="font-display text-[15px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">{step.title}</h3>
                <p className="font-display text-[13px] font-normal text-navy-900/45 leading-[1.7]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Performance Guarantee</span>
              </div>

              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-5">
                Measurable ROI within the first week of paid engagement — or a full refund.
              </h2>

              <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] max-w-[480px] mb-6">
                We conduct a thorough assessment before taking on any engagement. If the data doesn&apos;t support a clear return, we don&apos;t proceed. When we do proceed, we guarantee results.
              </p>

              <Link href="/book-call" className="btn btn-primary">Schedule a Consultation</Link>
            </div>

            <div className="bg-white/[0.04] border border-gold-500/30 p-6 text-center">
              <svg className="w-7 h-7 text-gold-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div className="font-display text-[14px] font-bold text-white mb-1">7-Day Money-Back Guarantee</div>
              <div className="font-display text-[12px] font-normal text-white/35">Full refund if ROI doesn&apos;t exceed our fee.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-4">
              Request a consultation.
            </h2>

            <p className="font-display text-[15px] font-normal text-navy-900/45 leading-[1.75] mb-8">
              A 30-minute call to review your current operation and identify the highest-impact opportunities. No obligation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
              <a href="mailto:jbrewer@gtcadvisers.com" className="btn btn-outline">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </>
  )
}
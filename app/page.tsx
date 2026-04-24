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
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-up">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Logistics Advisory</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[28px] md:text-[40px] lg:text-[44px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[680px] mb-5 opacity-0 animate-fade-up-1">
            We Know What Your Brokers Charge. We Used to Set Those Rates.
          </h1>

          {/* Subhead */}
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px] mb-8 opacity-0 animate-fade-up-2">
            The GTC Group is a logistics advisory firm founded by former brokerage executives. We renegotiate your existing rates, reduce your operating costs, and build direct shipper relationships — using the same pricing intelligence your brokers use on you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 opacity-0 animate-fade-up-3">
            <Link href="/book-call" className="btn btn-primary">
              Book a Call
            </Link>
            <Link href="#services" className="btn btn-secondary">
              How We Help
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-14 mt-14 md:mt-20 pt-6 border-t border-white/[0.06]">
            {[
              { value: '$500M+', label: 'Freight managed by our team' },
              { value: '$3–8K', label: 'Avg. savings per truck/year' },
              { value: '7 Days', label: 'To ROI — or you don\u2019t pay' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[22px] md:text-[28px] font-extrabold text-gold-400 leading-none">{stat.value}</div>
                <div className="font-display text-[11px] md:text-[12px] font-medium text-white/30 mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <div className="reveal relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/team/team-1.jpg"
                  alt="Jacob Brewer, Founder & CEO"
                  fill
                  className="object-cover grayscale-[20%]"
                  sizes="280px"
                />
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

            {/* Copy */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">Who We Are</span>
              </div>

              <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Former brokerage executives who switched sides.
              </h2>

              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75]">
                <p>
                  Our team spent years at nationally ranked brokerages — building the margin models, pricing carrier lanes, and structuring the contracts that brokerages use to maximize their own revenue. We saw exactly how those numbers worked because we ran them.
                </p>
                <p>
                  GTC exists because we decided to apply that knowledge for carriers instead of against them. We take your existing lane data, call your brokers and shippers directly, and renegotiate from a position of knowledge. We also negotiate fleet-rate pricing on insurance, fuel, and maintenance by pooling volume across our carrier network.
                </p>
                <p className="text-navy-900/70 font-medium">
                  No guesswork. No middlemen. Just better numbers on the freight you&apos;re already running.
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
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">What We Do</span>
          </div>

          <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-12 md:mb-14 max-w-[500px]">
            Three services. Each one pays for itself.
          </h2>

          {/* Service 1 — Lane Optimization */}
          <div className="reveal border-t border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">01</div>
              <h3 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">
                Lane Optimization & Rate Renegotiation
              </h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[560px]">
                We take your existing lane data — usually an Excel sheet of routes, rates, and brokers — and call every one of them. Using brokerage-side pricing intelligence, we renegotiate your rates contract by contract. No new lanes. No operational disruption. Just better numbers.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[22px] font-extrabold text-gold-400">15–25%</div>
              <div className="font-display text-[11px] text-white/30">revenue increase typical</div>
            </div>
          </div>

          {/* Service 2 — Cost Reduction */}
          <div className="reveal border-t border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">02</div>
              <h3 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">
                Insurance, Fuel & Maintenance
              </h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[560px]">
                Your three largest variable costs after payroll. We aggregate purchasing volume across our carrier network and negotiate fleet-rate pricing — the same rates 500-truck operations get. Your trucks, their pricing tier.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[22px] font-extrabold text-gold-400">$3–8K</div>
              <div className="font-display text-[11px] text-white/30">saved per truck/year</div>
            </div>
          </div>

          {/* Service 3 — Online Presence */}
          <div className="reveal border-t border-b border-white/[0.06] py-8 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-6 items-start">
            <div>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mb-2">03</div>
              <h3 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">
                Online Presence & Brand
              </h3>
              <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] max-w-[560px]">
                Shippers vet carriers online before awarding freight. After the double-brokering fraud wave, AI screening tools now filter out carriers with no digital footprint. We build professional websites with MC/DOT verification, safety records, and quote forms — plus Google Business Profile management.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-display text-[22px] font-extrabold text-gold-400">80%</div>
              <div className="font-display text-[11px] text-white/30">of shippers research online first</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">How It Works</span>
          </div>

          <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-12 max-w-[440px]">
            Assessment to results in seven days.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Discovery Call', body: '30 minutes. We learn your operation — fleet size, lanes, broker relationships, what\u2019s working and what isn\u2019t. No commitment.' },
              { n: '02', title: 'Cost & Rate Review', body: 'Within 24 hours we review your rate sheets, insurance policies, fuel spend, and contracts. You see the gaps in writing.' },
              { n: '03', title: 'Implementation', body: 'By day 7 we\u2019ve started renegotiating rates and implementing cost reductions. This is when the guarantee kicks in.' },
              { n: '04', title: 'Ongoing Growth', body: 'Our sales team builds direct shipper relationships, optimizes lanes, and continuously renegotiates as your operation evolves.' },
            ].map((step) => (
              <div key={step.n} className="reveal">
                <div className="font-display text-[11px] font-semibold text-gold-600 tracking-[0.1em] uppercase mb-2">{step.n}</div>
                <h3 className="font-display text-[16px] font-bold text-navy-900 mb-2 tracking-[-0.01em]">{step.title}</h3>
                <p className="font-display text-[13px] font-normal text-navy-900/45 leading-[1.7]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Guarantee</span>
              </div>

              <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-5">
                ROI in week one — or you don&apos;t pay.
              </h2>

              <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] max-w-[480px] mb-6">
                If we don&apos;t deliver a return equal to our fee within seven days of paid engagement, you get a full refund. We offer this because we review your numbers before we start — we already know what&apos;s there before we agree to take you on.
              </p>

              <Link href="/book-call" className="btn btn-primary">
                Book Your Assessment
              </Link>
            </div>

            <div className="bg-white/[0.04] border border-gold-500/30 p-6 md:p-8 text-center">
              <svg className="w-8 h-8 text-gold-500 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div className="font-display text-[15px] font-bold text-white mb-1">7-Day Money-Back Guarantee</div>
              <div className="font-display text-[13px] font-normal text-white/35">Full refund if ROI doesn&apos;t cover our fee.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="font-display text-[24px] md:text-[30px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-4">
              See what your brokers already know.
            </h2>

            <p className="font-display text-[15px] font-normal text-navy-900/45 leading-[1.75] mb-8">
              30-minute discovery call. We review your operation, identify the highest-impact opportunities, and give you a clear picture — whether you engage us or not.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/book-call" className="btn btn-primary">
                Book a Call
              </Link>
              <a href="mailto:jbrewer@gtcadvisers.com" className="btn btn-outline">
                Email Us
              </a>
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
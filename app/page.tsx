'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[100dvh] flex items-end bg-navy-950 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/90" />

        {/* Hero image — replace src with your AI-generated image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-advisory.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12] mix-blend-luminosity"
            priority
          />
        </div>

        {/* Gold top rule */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32">
          <div className="max-w-[900px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up">
              <div className="h-[1px] w-10 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">
                Logistics Advisory
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-hero text-white mb-6 opacity-0 animate-fade-up-delay-1">
              We&apos;ve Been on the
              <br />
              <span className="text-gold-400">Brokerage Side.</span>
              <br />
              Now We Work
              <br className="hidden md:block" /> for Yours.
            </h1>

            {/* Subhead */}
            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/55 leading-[1.75] max-w-[620px] mb-10 opacity-0 animate-fade-up-delay-2">
              The GTC Group is a logistics advisory firm built by former brokerage
              executives. We apply carrier-side intelligence to renegotiate your
              rates, reduce your operating costs, and build direct shipper
              relationships — for fleets ready to stop leaving margin on the table.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up-delay-3">
              <Link
                href="/book-call"
                className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors duration-200"
              >
                Book a Call
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex items-center justify-center border border-white/20 hover:border-gold-500/50 text-white/70 hover:text-gold-400 font-display font-semibold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-all duration-200"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '$500M+', label: 'Freight managed by our team' },
                { value: '35+', label: 'Carriers in our network' },
                { value: '$3–8K', label: 'Avg. savings per truck/year' },
                { value: '1 Week', label: 'To ROI — or it\u2019s free' },
              ].map((stat, i) => (
                <div key={stat.label} className={`reveal opacity-0 translate-y-4 transition-all duration-700 delay-[${i * 100}ms]`}>
                  <div className="font-display text-stat text-gold-400">{stat.value}</div>
                  <div className="font-display text-[12px] md:text-[13px] font-medium text-white/35 tracking-[0.02em] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE INSIDER ANGLE ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="reveal relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/team/team-1.png"
                  alt="Jacob Brewer — President & CEO, The GTC Group"
                  fill
                  className="object-cover grayscale-[30%]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-500" />
                  <div className="absolute top-0 left-0 h-full w-[3px] bg-gold-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-navy-900 px-6 py-4">
                <div className="font-display text-[13px] font-bold text-white tracking-[0.02em]">Jacob Brewer</div>
                <div className="font-display text-[11px] font-medium text-gold-500 tracking-[0.1em] uppercase">President & CEO</div>
              </div>
            </div>

            {/* Copy */}
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">
                  The Insider Advantage
                </span>
              </div>

              <h2 className="font-display text-h2 text-navy-900 mb-8">
                Your Brokers Know Exactly What Your Lanes Are Worth.
                <span className="text-gold-600"> So Do We.</span>
              </h2>

              <div className="space-y-5 font-display text-[16px] font-normal text-navy-900/60 leading-[1.8]">
                <p>
                  GTC was founded by former brokerage executives who spent years
                  on the other side of the negotiating table — pricing carrier
                  lanes, structuring contracts, and building the margin models
                  that brokerages use to maximize their own revenue. We know
                  exactly how those numbers work because we used to run them.
                </p>
                <p>
                  Now we apply that same intelligence for carriers. We review your
                  existing rate sheets, call your brokers and shippers directly,
                  and renegotiate from a position of knowledge — not guesswork.
                  The result is better rates on your current lanes, lower costs
                  on insurance and fuel, and direct shipper relationships that
                  eliminate the middleman entirely.
                </p>
                <p className="text-navy-900/80 font-medium">
                  We don&apos;t work for brokerages anymore. We work for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section id="what-we-do" className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">
              What We Do
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
            <h2 className="font-display text-h2 text-white max-w-[700px]">
              Three Levers That Move Your
              <span className="text-gold-400"> Bottom Line</span>
            </h2>
            <p className="font-display text-[15px] font-normal text-white/40 leading-[1.7] max-w-[380px]">
              Each service is designed to produce measurable financial impact
              within the first 30 days of engagement.
            </p>
          </div>

          {/* Service 01 — Lane Optimization (flagship) */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 mb-6">
            <div className="bg-navy-800 p-8 md:p-12 border border-white/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-[64px] md:text-[80px] font-black text-white/[0.04] leading-none select-none">01</span>
              </div>
              <h3 className="font-display text-h3 text-white mb-4">Lane Optimization & Rate Renegotiation</h3>
              <p className="font-display text-[15px] font-normal text-white/50 leading-[1.75] mb-6">
                We take your existing lane data — usually an Excel sheet of current
                routes, rates, and brokers — and call every broker and shipper on it.
                Using brokerage-side pricing intelligence, we renegotiate your rates
                contract by contract. No new lanes required. No operational disruption.
                Just better numbers on the freight you&apos;re already running.
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="font-display text-[28px] font-black text-gold-400">15–25%</div>
                  <div className="font-display text-[11px] font-medium text-white/30 tracking-[0.05em]">Revenue increase typical</div>
                </div>
                <div className="h-8 w-[1px] bg-white/[0.06]" />
                <div>
                  <div className="font-display text-[28px] font-black text-gold-400">Week 1</div>
                  <div className="font-display text-[11px] font-medium text-white/30 tracking-[0.05em]">First renegotiations begin</div>
                </div>
              </div>
            </div>
            {/* Image placeholder */}
            <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
              <Image
                src="/services/lane-optimization.jpg"
                alt="Rate analysis and lane optimization"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy-950/40" />
            </div>
          </div>

          {/* Services 02 & 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cost Reduction */}
            <div className="reveal bg-navy-800 p-8 md:p-10 border border-white/[0.04]">
              <span className="font-display text-[56px] font-black text-white/[0.04] leading-none select-none">02</span>
              <h3 className="font-display text-h3 text-white mt-2 mb-4">Cost Reduction</h3>
              <p className="font-display text-[15px] font-normal text-white/50 leading-[1.75] mb-6">
                Insurance, fuel, and maintenance are your three largest variable
                costs after payroll. We aggregate purchasing volume across our
                carrier network and negotiate fleet-rate pricing — the same rates
                large brokerages and 500-truck fleets pay. Your trucks, their
                pricing.
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="font-display text-[28px] font-black text-gold-400">$3–8K</div>
                  <div className="font-display text-[11px] font-medium text-white/30 tracking-[0.05em]">Saved per truck/year</div>
                </div>
              </div>
              <Link
                href="/services/cost-reduction"
                className="inline-flex items-center gap-2 mt-6 font-display text-[13px] font-semibold text-gold-500 hover:text-gold-300 tracking-[0.03em] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Online Presence / Brand */}
            <div className="reveal bg-navy-800 p-8 md:p-10 border border-white/[0.04]">
              <span className="font-display text-[56px] font-black text-white/[0.04] leading-none select-none">03</span>
              <h3 className="font-display text-h3 text-white mt-2 mb-4">Online Presence & Brand</h3>
              <p className="font-display text-[15px] font-normal text-white/50 leading-[1.75] mb-6">
                80% of shippers vet carriers online before awarding a single load.
                If your company doesn&apos;t show up — or shows up with a blank
                page — you&apos;re losing freight to carriers with worse
                operations and better websites. We build and manage the digital
                presence that closes that gap.
              </p>
              <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="font-display text-[28px] font-black text-gold-400">80%</div>
                  <div className="font-display text-[11px] font-medium text-white/30 tracking-[0.05em]">Shippers research carriers online</div>
                </div>
              </div>
              <Link
                href="/services/brand-marketing"
                className="inline-flex items-center gap-2 mt-6 font-display text-[13px] font-semibold text-gold-500 hover:text-gold-300 tracking-[0.03em] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="reveal max-w-[960px] mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">
                Our Guarantee
              </span>
              <div className="h-[1px] w-8 bg-gold-500" />
            </div>

            <h2 className="font-display text-h2 text-navy-900 mb-6">
              ROI in Week One —
              <span className="text-gold-600"> Or You Don&apos;t Pay.</span>
            </h2>

            <p className="font-display text-[17px] font-normal text-navy-900/50 leading-[1.8] max-w-[640px] mx-auto mb-10">
              If we don&apos;t deliver a return equal to our fee within seven
              days of paid engagement, you receive a full refund. No qualifiers.
              We offer this because we see your numbers before we start — and
              we already know what&apos;s there.
            </p>

            {/* Guarantee badge */}
            <div className="inline-flex items-center gap-4 bg-navy-900 px-8 py-5">
              <svg className="w-10 h-10 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <div className="text-left">
                <div className="font-display text-[15px] font-bold text-white tracking-[0.01em]">7-Day Money-Back Guarantee</div>
                <div className="font-display text-[13px] font-normal text-white/40">Full refund if ROI doesn&apos;t cover our fee. Zero risk.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">
              How It Works
            </span>
          </div>

          <h2 className="font-display text-h2 text-white mb-16 md:mb-20 max-w-[600px]">
            From Assessment to Impact in
            <span className="text-gold-400"> Seven Days</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              {
                n: '01',
                title: 'Discovery Call',
                body: '30 minutes. We learn your operation — fleet size, primary lanes, current broker relationships, pain points. No commitment.',
              },
              {
                n: '02',
                title: 'Operations Assessment',
                body: 'Within 24 hours, we review your rate sheets, insurance policies, fuel spend, and contracts. You see the gaps in writing.',
              },
              {
                n: '03',
                title: 'Implementation',
                body: 'By day 7, we\u2019ve begun renegotiating rates and implementing cost reductions. This is where the guarantee clock starts.',
              },
              {
                n: '04',
                title: 'Ongoing Growth',
                body: 'Week 2+: our sales team builds direct shipper relationships, optimizes your lanes, and continuously renegotiates as your operation evolves.',
              },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`reveal p-8 md:p-10 border-t border-white/[0.06] ${i > 0 ? 'lg:border-l lg:border-t' : ''}`}
              >
                <div className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-500 mb-4">
                  Step {step.n}
                </div>
                <h3 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
            <div className="reveal lg:sticky lg:top-32 self-start">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">
                  Who We Work With
                </span>
              </div>
              <h2 className="font-display text-h2 text-navy-900 mb-6">
                Built for Established
                <span className="text-gold-600"> Carriers</span>
              </h2>
              <p className="font-display text-[16px] font-normal text-navy-900/50 leading-[1.8]">
                GTC works with carrier operations that have real freight,
                real lanes, and real costs to optimize. If you&apos;re running
                trucks and managing drivers, we can move your numbers.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Mid-Size Fleets (50–200 trucks)',
                  body: 'The sweet spot for GTC. Large enough to have substantial spend on insurance, fuel, and maintenance — but not yet at the scale where vendors offer enterprise pricing automatically. We close that gap. Savings compound across every truck in the fleet.',
                  metric: '$150K–$400K',
                  metricLabel: 'typical first-year impact',
                },
                {
                  title: 'Growing Fleets (20–50 trucks)',
                  body: 'Scaling past owner-operator economics into fleet management. You\u2019re hiring drivers, adding trucks, and building infrastructure — but your cost structure still reflects a smaller operation. We bring your rates in line with your actual volume.',
                  metric: '$60K–$150K',
                  metricLabel: 'typical first-year impact',
                },
                {
                  title: 'Regional Carriers with Dedicated Lanes',
                  body: 'If you\u2019re running consistent routes with the same brokers and shippers, there\u2019s almost certainly margin being left on the table. We audit every lane, every rate, and every contract — then renegotiate from a position of data.',
                  metric: '15–25%',
                  metricLabel: 'revenue increase typical',
                },
              ].map((profile) => (
                <div
                  key={profile.title}
                  className="reveal bg-white p-8 md:p-10 border border-navy-900/[0.06] hover:border-gold-500/30 transition-colors duration-300"
                >
                  <h3 className="font-display text-[18px] md:text-[20px] font-bold text-navy-900 tracking-[-0.01em] mb-3">
                    {profile.title}
                  </h3>
                  <p className="font-display text-[15px] font-normal text-navy-900/50 leading-[1.75] mb-6">
                    {profile.body}
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-navy-900/[0.06]">
                    <span className="font-display text-[24px] font-black text-gold-500">{profile.metric}</span>
                    <span className="font-display text-[12px] font-medium text-navy-900/35 tracking-[0.02em]">{profile.metricLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        {/* Radial gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,162,39,0.06)_0%,transparent_70%)] rounded-full" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">
              Get Started
            </span>
            <div className="h-[1px] w-8 bg-gold-500" />
          </div>

          <h2 className="font-display text-h2 text-white mb-6">
            See What Your Brokers
            <br className="hidden md:block" />
            <span className="text-gold-400"> Already Know</span>
          </h2>

          <p className="font-display text-[17px] font-normal text-white/45 leading-[1.8] max-w-[540px] mx-auto mb-10">
            Book a 30-minute discovery call. We&apos;ll review your operation,
            identify the highest-impact opportunities, and give you a clear
            picture of what GTC can do — whether you engage us or not.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-10 transition-colors duration-200"
            >
              Book a Call
            </Link>
            <a
              href="mailto:jbrewer@gtcadvisers.com"
              className="inline-flex items-center justify-center border border-white/20 hover:border-gold-500/50 text-white/70 hover:text-gold-400 font-display font-semibold text-[14px] tracking-[0.04em] uppercase py-4 px-10 transition-all duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── REVEAL ANIMATION STYLES ─── */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
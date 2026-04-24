import Link from 'next/link'

export const metadata = {
  title: 'Revenue Growth — Lane Optimization & Direct Shipper Contracts | The GTC Group',
  description: 'Our dedicated sales team renegotiates your existing rates and builds direct shipper relationships — cutting broker fees and securing consistent, profitable freight.',
}

export default function RevenueGrowthPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#what-we-do" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-500">Revenue Growth</span>
          </nav>

          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Revenue Growth</span>
            </div>

            <h1 className="font-display text-hero text-white mb-6">
              We Call Your
              <br />
              Brokers <span className="text-gold-400">for You.</span>
            </h1>

            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/50 leading-[1.75] max-w-[620px] mb-10">
              Most carriers accept the rates they&apos;re given. We don&apos;t.
              Our team takes your existing lane data, calls every broker and
              shipper on it, and renegotiates using brokerage-side pricing
              intelligence. Then we build direct shipper relationships to
              reduce your broker dependency entirely.
            </p>

            <Link
              href="/book-call"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors duration-200"
            >
              Start Growing Revenue
            </Link>
          </div>
        </div>
      </section>

      {/* ─── THE REAL COST ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">The Real Cost</span>
              </div>

              <h2 className="font-display text-h2 text-navy-900 mb-8">
                Broker Margins Are the Largest
                <span className="text-gold-600"> Invisible Cost </span>
                in Your Operation
              </h2>

              <div className="space-y-5 font-display text-[16px] font-normal text-navy-900/55 leading-[1.8]">
                <p>
                  Every load that moves through a broker has a spread — the
                  difference between what the shipper pays and what you receive.
                  That spread is typically 15–25% of the gross, and it compounds
                  across every load, every lane, every week.
                </p>
                <p>
                  For a 50-truck fleet running consistent freight, that margin
                  transfer can exceed $500K annually. It&apos;s not a fee you
                  see on an invoice — it&apos;s revenue that never reaches your
                  operation. Direct shipper contracts eliminate it.
                </p>
                <p className="text-navy-900/75 font-medium">
                  The carriers growing fastest right now are the ones building
                  their own shipper relationships. We do that work for you.
                </p>
              </div>
            </div>

            {/* Cost breakdown */}
            <div className="bg-white border border-navy-900/[0.06] p-8 md:p-10">
              <h3 className="font-display text-[18px] font-bold text-navy-900 mb-8 tracking-[-0.01em]">Annual Cost of Broker Dependency</h3>
              <div className="space-y-4">
                {[
                  { label: 'Broker commissions (15–25% per load)', amount: '$18,000–$30,000' },
                  { label: 'Load board subscriptions', amount: '$3,600–$7,200' },
                  { label: 'Deadhead miles (unpaid repositioning)', amount: '$8,000–$15,000' },
                  { label: 'Rate volatility (spot vs. contract)', amount: '$5,000–$12,000' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between pb-4 border-b border-navy-900/[0.06] last:border-0 last:pb-0">
                    <span className="font-display text-[14px] text-navy-900/55">{item.label}</span>
                    <span className="font-display text-[14px] font-bold text-navy-900 whitespace-nowrap ml-4">{item.amount}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-navy-900 p-5 flex items-center justify-between">
                <span className="font-display text-[13px] font-medium text-white/50">Total annual cost per truck</span>
                <span className="font-display text-[24px] font-black text-gold-400">$34K–$64K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">How It Works</span>
          </div>

          <h2 className="font-display text-h2 text-white mb-16 md:mb-20 max-w-[500px]">
            We Sell.
            <span className="text-gold-400"> You Drive.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                n: '01',
                title: 'We Learn Your Operation',
                body: 'Preferred lanes, equipment type, capacity, schedule constraints, rate requirements. We only pursue freight that fits your operation — not generic loads that burn miles.',
              },
              {
                n: '02',
                title: 'We Prospect & Close',
                body: 'Our sales team contacts shippers directly, negotiates contract rates, and handles the back-and-forth. You approve every deal before freight moves. No surprises.',
              },
              {
                n: '03',
                title: 'You Run the Freight',
                body: 'Direct shipper contracts mean predictable revenue, planned routes, and no broker spread. The relationship is yours — we just built it.',
              },
            ].map((step, i) => (
              <div key={step.n} className={`p-8 md:p-10 border-t border-white/[0.06] ${i > 0 ? 'md:border-l' : ''}`}>
                <div className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-500 mb-4">Step {step.n}</div>
                <h3 className="font-display text-[18px] md:text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">{step.title}</h3>
                <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">Why Direct Relationships</span>
              </div>
              <h2 className="font-display text-h2 text-navy-900 mb-8">
                Every Dollar a Broker Takes Is a Dollar
                <span className="text-gold-600"> You Earned</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Eliminate Broker Margins', body: '15–25% of every load goes to the broker. On direct contracts, that revenue stays in your operation.' },
                  { title: 'Predictable Freight', body: 'Contract rates and consistent loads mean you can plan weeks, routes, and driver schedules — not gamble on spot markets.' },
                  { title: 'Build Real Equity', body: 'Shipper relationships are assets that appreciate. Load board access is a subscription you\u2019re renting month to month.' },
                  { title: 'Reduce Deadhead', body: 'Planned lanes with round-trip potential. Fewer empty miles, more revenue per mile driven.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 bg-gold-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-navy-900" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-display text-[15px] font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="font-display text-[14px] font-normal text-navy-900/50 leading-[1.7]">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-white border border-navy-900/[0.06] p-8 md:p-10">
              <h3 className="font-display text-[18px] font-bold text-navy-900 mb-8 tracking-[-0.01em]">Typical Carrier Results</h3>
              <div className="space-y-6">
                {[
                  { label: 'Revenue Increase', value: '18–25%', width: '22%' },
                  { label: 'New Dedicated Lanes (First 90 Days)', value: '3–5', width: '40%' },
                  { label: 'Broker Dependency Reduction', value: '50–70%', width: '60%' },
                  { label: 'Deadhead Mile Reduction', value: '30–40%', width: '35%' },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-display text-[13px] text-navy-900/50">{metric.label}</span>
                      <span className="font-display text-[14px] font-bold text-navy-900">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-navy-900/[0.06] overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400" style={{ width: metric.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,162,39,0.06)_0%,transparent_70%)] rounded-full" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-h2 text-white mb-6">
            Ready to Own Your
            <span className="text-gold-400"> Revenue?</span>
          </h2>
          <p className="font-display text-[17px] font-normal text-white/45 leading-[1.8] max-w-[540px] mx-auto mb-10">
            Book a call. We&apos;ll review your lanes, your broker relationships,
            and your rate sheets — then show you exactly where direct shipper
            contracts would change the numbers.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-10 transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
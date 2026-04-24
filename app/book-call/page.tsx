import BookingForm from '@/components/BookingForm'
import Link from 'next/link'

export const metadata = {
  title: 'Book a Call | The GTC Group',
  description: 'Schedule a free 30-minute consultation with our carrier advisory team. We\u2019ll review your operation and identify immediate savings opportunities.',
}

export default function BookCallPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 text-center">
          <nav className="flex items-center justify-center gap-2 font-display text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Book a Call</span>
          </nav>

          <div className="max-w-[700px] mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Schedule</span>
              <div className="h-[1px] w-8 bg-gold-500" />
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-black text-white leading-[0.95] tracking-[-0.03em] mb-6">
              Let&apos;s Look at
              <br />
              <span className="text-gold-400">Your Numbers</span>
            </h1>

            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/50 leading-[1.75] max-w-[520px] mx-auto">
              30 minutes. We&apos;ll review your operation, identify the
              highest-impact opportunities, and give you a clear picture of
              what we can do — whether you engage us or not.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BOOKING FORM ─── */}
      <section className="relative py-16 md:py-24 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10">
          <div className="bg-white border border-navy-900/[0.06] p-8 md:p-12">
            <div className="mb-8">
              <h2 className="font-display text-[24px] md:text-[28px] font-black text-navy-900 tracking-[-0.02em] mb-3">Pick a Time</h2>
              <p className="font-display text-[15px] font-normal text-navy-900/50 leading-[1.7]">
                Select your preferred date and time below. We&apos;ll call you
                at the scheduled time to discuss your fleet&apos;s needs.
              </p>
            </div>

            <BookingForm />
          </div>

          {/* Trust signals */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: '30 Minutes',
                body: 'Focused consultation tailored to your operation',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'No Obligation',
                body: 'Free assessment with actionable insights',
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                ),
                title: 'Confidential',
                body: 'Your operational data stays between us',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-navy-900/[0.06] p-6 text-center">
                <div className="w-10 h-10 bg-cream-100 flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="font-display text-[15px] font-bold text-navy-900 mb-1">{item.title}</h3>
                <p className="font-display text-[13px] font-normal text-navy-900/45">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">What to Expect</span>
              <div className="h-[1px] w-8 bg-gold-500" />
            </div>
            <h2 className="font-display text-h2 text-white">Your Consultation</h2>
          </div>

          <div className="space-y-0">
            {[
              { n: '01', title: 'Quick Introduction', body: 'We learn about your operation — fleet size, primary lanes, broker relationships, and current challenges.' },
              { n: '02', title: 'Cost & Rate Analysis', body: 'We review your current spending on insurance, fuel, maintenance, and your rate structure to identify the gaps.' },
              { n: '03', title: 'Actionable Recommendations', body: 'You receive specific, dollar-denominated steps to reduce costs and grow revenue — whether you work with us or not.' },
            ].map((step, i) => (
              <div key={step.n} className={`flex gap-6 items-start p-6 md:p-8 border-t border-white/[0.06] ${i === 2 ? 'border-b' : ''}`}>
                <div className="font-display text-[11px] font-semibold tracking-[0.15em] uppercase text-gold-500 mt-1 min-w-[40px]">
                  Step {step.n}
                </div>
                <div>
                  <h3 className="font-display text-[18px] font-bold text-white mb-2 tracking-[-0.01em]">{step.title}</h3>
                  <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
import BookingForm from '@/components/BookingForm'
import Link from 'next/link'

export const metadata = {
  title: 'Schedule a Consultation | The GTC Group',
  description: 'Schedule a 30-minute consultation with our carrier advisory team. We review your operation and identify immediate savings opportunities.',
}

export default function BookCallPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-14 md:pb-18">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 font-display text-[12px] text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Schedule</span>
          </nav>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Schedule</span>
            <div className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h1 className="font-display text-[28px] md:text-[36px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] mb-4">
            Schedule a Consultation
          </h1>
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[460px] mx-auto">
            A 30-minute call to review your operation, identify the highest-impact opportunities, and determine fit.
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-14 md:py-20 bg-cream-100">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="bg-white border border-navy-900/[0.06] p-6 md:p-10">
            <div className="mb-6">
              <h2 className="font-display text-[20px] md:text-[24px] font-extrabold text-navy-900 tracking-[-0.02em] mb-2">Select a Date & Time</h2>
              <p className="font-display text-[14px] font-normal text-navy-900/45 leading-[1.7]">
                Choose your preferred slot below. We call you at the scheduled time.
              </p>
            </div>
            <BookingForm />
          </div>

          {/* Trust signals */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '30 Minutes', body: 'Focused on your specific operation' },
              { title: 'No Obligation', body: 'Assessment with actionable takeaways' },
              { title: 'Confidential', body: 'Your data stays between us' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-navy-900/[0.06] p-5 text-center">
                <h3 className="font-display text-[14px] font-bold text-navy-900 mb-1">{item.title}</h3>
                <p className="font-display text-[12px] font-normal text-navy-900/40">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[720px] mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">What to Expect</span>
              <div className="h-[1px] w-6 bg-gold-500" />
            </div>
            <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white tracking-[-0.02em]">Consultation Structure</h2>
          </div>

          {[
            { n: '01', title: 'Operation Overview', body: 'Fleet size, primary lanes, current broker and shipper relationships, cost structure.' },
            { n: '02', title: 'Cost & Rate Review', body: 'We review your current spend on insurance, fuel, maintenance, and your rate structure to identify gaps.' },
            { n: '03', title: 'Recommendations', body: 'Specific, dollar-denominated steps to reduce costs and grow revenue — whether you engage us or not.' },
          ].map((step, i) => (
            <div key={step.n} className={`flex gap-5 items-start py-6 border-t border-white/[0.06] ${i === 2 ? 'border-b' : ''}`}>
              <div className="font-display text-[11px] font-semibold text-gold-500 tracking-[0.1em] uppercase mt-0.5 min-w-[32px]">{step.n}</div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-white mb-1.5">{step.title}</h3>
                <p className="font-display text-[13px] font-normal text-white/40 leading-[1.7]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
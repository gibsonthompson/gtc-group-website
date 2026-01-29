import BookingForm from '@/components/BookingForm'
import Link from 'next/link'

export const metadata = {
  title: 'Book a Call | The GTC Group',
  description: 'Schedule a free consultation with our carrier specialists. See how we can help reduce costs and grow revenue for your trucking operation.',
}

export default function BookCallPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-3 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Book a Call</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
            Let&apos;s Talk About Your Fleet
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation. We&apos;ll analyze your current costs and show you exactly where we can help.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <span className="section-label">Schedule Your Call</span>
              <h2 className="font-display text-3xl text-navy-900 mb-4">Pick a Time That Works</h2>
              <p className="text-gray-600">
                Select your preferred date and time below. We&apos;ll call you at the scheduled time to discuss your fleet&apos;s needs.
              </p>
            </div>
            
            <BookingForm />
          </div>

          {/* Trust Signals */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-navy-900 mb-2">30 Minutes</h3>
              <p className="text-gray-600 text-sm">Quick, focused consultation tailored to your needs</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-navy-900 mb-2">No Obligation</h3>
              <p className="text-gray-600 text-sm">Free consultation with actionable insights</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-display text-lg text-navy-900 mb-2">100% Confidential</h3>
              <p className="text-gray-600 text-sm">Your information stays between us</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">What to Expect</span>
            <h2 className="font-display text-3xl text-navy-900">Your Consultation Call</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900 font-bold">1</div>
              <div>
                <h3 className="font-display text-xl text-navy-900 mb-2">Quick Introduction</h3>
                <p className="text-gray-600">We&apos;ll learn about your operation—fleet size, primary lanes, and current challenges.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900 font-bold">2</div>
              <div>
                <h3 className="font-display text-xl text-navy-900 mb-2">Cost Analysis</h3>
                <p className="text-gray-600">We&apos;ll review your current spending on insurance, fuel, and maintenance to identify savings opportunities.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 text-navy-900 font-bold">3</div>
              <div>
                <h3 className="font-display text-xl text-navy-900 mb-2">Custom Recommendations</h3>
                <p className="text-gray-600">You&apos;ll receive specific, actionable steps to reduce costs and grow revenue—whether you work with us or not.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

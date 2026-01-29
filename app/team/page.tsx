import Link from 'next/link'

export const metadata = {
  title: 'Our Team | The GTC Group',
  description: 'Meet the experienced logistics professionals behind The GTC Group.',
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-3 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Our Team</span>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
            Meet the Team Behind GTC
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Former brokerage executives, carrier operations experts, and industry veterans united by a single mission: helping independent carriers compete and win.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Leadership</span>
            <h2 className="font-display text-4xl text-navy-900 mb-4">Executive Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our leadership brings decades of combined experience from both sides of the logistics industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* James Brewer */}
            <div className="flex gap-6">
              <div className="w-40 h-48 bg-gradient-to-br from-navy-800 to-navy-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl text-navy-900">James Brewer</h3>
                <div className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">Founder & CEO</div>
                <p className="text-gray-600 text-sm">
                  15+ years in freight brokerage, including senior roles at two top-20 national brokerages. Founded GTC to give independent carriers the same advantages he saw large brokerages use against them.
                </p>
              </div>
            </div>

            {/* Placeholder for additional team members */}
            <div className="flex gap-6">
              <div className="w-40 h-48 bg-gradient-to-br from-navy-800 to-navy-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl text-navy-900">Team Member</h3>
                <div className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">Title</div>
                <p className="text-gray-600 text-sm">
                  Bio placeholder - update with real team member information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a call with one of our carrier specialists to see how we can help.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}

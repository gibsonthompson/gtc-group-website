import Link from 'next/link'
import WebsiteSignupForm from '@/components/WebsiteSignupForm'

export const metadata = {
  title: 'Brand & Marketing Services | The GTC Group',
  description: 'Professional websites, online presence management, and marketing that makes shippers want to work with you — built specifically for carriers.',
}

export default function BrandMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-3 mb-6 text-sm">
            <Link href="/" className="text-white/60 hover:text-gold-400 transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link href="/#services" className="text-white/60 hover:text-gold-400 transition-colors">Services</Link>
            <span className="text-white/40">/</span>
            <span className="text-gold-400">Brand & Marketing</span>
          </nav>
          <div className="max-w-3xl">
            <span className="section-label">Brand & Marketing</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Look Like the <span className="text-gold-400">Pro You Are</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              80% of shippers research carriers online before signing a contract. If you don&apos;t have a professional presence, you&apos;re losing freight to carriers who do — even if your operation is better.
            </p>
            <a href="#signup" className="btn btn-primary">
              Get Your Website
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Visibility Gap</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Your Trucks Run Great. Your Online Presence Doesn&apos;t.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most independent carriers have no website, no Google Business Profile, and no way for shippers to verify they&apos;re legitimate before picking up the phone. Meanwhile, the carriers winning those contracts have professional sites with MC numbers, insurance verification, safety records, and contact forms — all the signals that say &ldquo;we&apos;re serious.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed">
                We build that entire presence for you — designed specifically for the trucking industry, optimized for the searches shippers actually run, and built to convert visitors into freight inquiries.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-display text-xl text-navy-900 mb-6">What Shippers Look For Online</h3>
              <div className="space-y-4">
                {[
                  { pct: '80%', label: 'research carriers online before contracting' },
                  { pct: '70%', label: 'of small carriers have no website at all' },
                  { pct: '60%', label: 'won\'t call a carrier they can\'t verify online' },
                  { pct: '3 sec', label: 'average time before a visitor leaves a slow site' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <span className="font-display text-2xl font-bold text-gold-500 min-w-[60px]">{stat.pct}</span>
                    <span className="text-gray-600 text-sm pt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">What We Build</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">Professional Carrier Websites</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Custom-built for your operation — not a generic template with your logo slapped on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">Unique branding that reflects your company — your colors, your fleet, your story.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Mobile Optimized</h3>
              <p className="text-gray-600 text-sm">Looks sharp on every device. Most shipper searches happen on phones.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">SEO Ready</h3>
              <p className="text-gray-600 text-sm">Built to rank when shippers search for carriers in your lanes and region.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Trust Signals</h3>
              <p className="text-gray-600 text-sm">MC/DOT numbers, insurance verification, safety ratings — everything shippers need to say yes.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Quote Request Forms</h3>
              <p className="text-gray-600 text-sm">Make it easy for shippers to request rates and start a conversation.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Fast Loading</h3>
              <p className="text-gray-600 text-sm">Sub-3-second load times. Slow sites lose visitors before they even see your fleet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Website */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-900 rounded-xl p-6 text-center">
                  <svg className="w-8 h-8 text-gold-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <h4 className="font-display text-sm font-bold text-white mb-1">Google Business</h4>
                  <p className="text-white/60 text-xs">Profile setup & optimization</p>
                </div>
                <div className="bg-navy-900 rounded-xl p-6 text-center">
                  <svg className="w-8 h-8 text-gold-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h4 className="font-display text-sm font-bold text-white mb-1">Reputation</h4>
                  <p className="text-white/60 text-xs">Review management</p>
                </div>
                <div className="bg-navy-900 rounded-xl p-6 text-center">
                  <svg className="w-8 h-8 text-gold-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <h4 className="font-display text-sm font-bold text-white mb-1">Marketing</h4>
                  <p className="text-white/60 text-xs">Strategy & execution</p>
                </div>
                <div className="bg-navy-900 rounded-xl p-6 text-center">
                  <svg className="w-8 h-8 text-gold-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  <h4 className="font-display text-sm font-bold text-white mb-1">Brand Identity</h4>
                  <p className="text-white/60 text-xs">Logo, colors, collateral</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label">Beyond the Website</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                Full Digital Presence Management
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A website is the foundation, but it&apos;s not the whole picture. We handle your Google Business Profile, online reputation, marketing materials, and brand identity — everything a shipper sees when they look you up.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The goal is simple: when a shipper Googles your MC number or company name, what they find should make them want to call you — not move on to the next carrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <span className="section-label">Get Started</span>
              <h2 className="font-display text-3xl text-navy-900 mb-4">Request Your Website</h2>
              <p className="text-gray-600">
                Tell us about your operation and we&apos;ll put together a custom proposal — no cookie-cutter packages.
              </p>
            </div>
            
            <WebsiteSignupForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            Not Sure What You Need Yet?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book a call and we&apos;ll walk through your current online presence together. We&apos;ll tell you exactly what&apos;s helping, what&apos;s hurting, and what to do about it.
          </p>
          <Link href="/book-call" className="btn btn-primary">
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
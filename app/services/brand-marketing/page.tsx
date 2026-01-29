import Link from 'next/link'
import WebsiteSignupForm from '@/components/WebsiteSignupForm'

export const metadata = {
  title: 'Brand & Marketing Services | The GTC Group',
  description: 'Professional websites and marketing materials that make shippers want to work with you.',
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
              Shippers research carriers before calling. A professional online presence builds trust and wins business. We make you look as good as the big players.
            </p>
            <a href="#signup" className="btn btn-primary">
              Get Your Website
            </a>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">What We Build</span>
            <h2 className="font-display text-4xl text-navy-900 mb-4">Professional Carrier Websites</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Custom-designed websites that showcase your operation and convert visitors into customers.
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
              <p className="text-gray-600 text-sm">Unique branding that reflects your company, not a cookie-cutter template.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Mobile Optimized</h3>
              <p className="text-gray-600 text-sm">Looks great on phones and tablets—where most traffic comes from.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">SEO Ready</h3>
              <p className="text-gray-600 text-sm">Built to rank in Google so shippers can find you.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Trust Signals</h3>
              <p className="text-gray-600 text-sm">MC numbers, insurance info, safety ratings—everything shippers look for.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Contact Forms</h3>
              <p className="text-gray-600 text-sm">Easy ways for shippers to request quotes and get in touch.</p>
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-navy-900 mb-2">Fast Loading</h3>
              <p className="text-gray-600 text-sm">Speed matters. We build sites that load in under 3 seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="section-label">Get Started</span>
              <h2 className="font-display text-3xl text-navy-900 mb-4">Request Your Website</h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll reach out to discuss your website project.
              </p>
            </div>
            
            <WebsiteSignupForm />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-label">Pricing</span>
            <h2 className="font-display text-4xl text-navy-900 mb-4">Simple, Transparent Pricing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream-100 rounded-xl p-8 border-2 border-transparent hover:border-gold-500 transition-colors">
              <h3 className="font-display text-2xl text-navy-900 mb-2">Starter Website</h3>
              <div className="text-gold-500 font-bold text-4xl mb-4">$1,500</div>
              <p className="text-gray-600 mb-6">Perfect for owner-operators and small fleets.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  5-page custom website
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Mobile responsive design
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Contact form
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Basic SEO setup
                </li>
              </ul>
              <a href="#signup" className="btn btn-outline w-full">Get Started</a>
            </div>

            <div className="bg-navy-900 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <h3 className="font-display text-2xl mb-2">Professional Website</h3>
              <div className="text-gold-400 font-bold text-4xl mb-4">$3,000</div>
              <p className="text-white/70 mb-6">For growing fleets that want to stand out.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  10-page custom website
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Custom branding & logo
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Quote request system
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Advanced SEO
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  6 months support included
                </li>
              </ul>
              <a href="#signup" className="btn btn-primary w-full">Get Started</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

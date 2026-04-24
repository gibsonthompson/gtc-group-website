import Link from 'next/link'
import WebsiteSignupForm from '@/components/WebsiteSignupForm'

export const metadata = {
  title: 'Online Presence & Brand — Carrier Websites | The GTC Group',
  description: 'Professional websites and digital presence management for carriers. 80% of shippers research carriers online before awarding freight — we make sure you show up.',
}

export default function BrandMarketingPage() {
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
            <span className="text-gold-500">Online Presence & Brand</span>
          </nav>

          <div className="max-w-[800px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-gold-500" />
              <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Online Presence & Brand</span>
            </div>

            <h1 className="font-display text-hero text-white mb-6">
              Shippers Google
              <br />
              You <span className="text-gold-400">Before They Call.</span>
            </h1>

            <p className="font-display text-[17px] md:text-[19px] font-normal text-white/50 leading-[1.75] max-w-[620px] mb-10">
              80% of shippers vet carriers online before awarding a load. If
              your company doesn&apos;t appear — or appears with a blank page
              and a Gmail address — you&apos;re losing freight to carriers with
              worse operations and better websites.
            </p>

            <a
              href="#request"
              className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors duration-200"
            >
              Request Your Website
            </a>
          </div>
        </div>
      </section>

      {/* ─── THE VISIBILITY GAP ─── */}
      <section className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">The Visibility Gap</span>
              </div>

              <h2 className="font-display text-h2 text-navy-900 mb-8">
                Your Operations Are
                <span className="text-gold-600"> Invisible </span>
                to the Shippers Looking for You
              </h2>

              <div className="space-y-5 font-display text-[16px] font-normal text-navy-900/55 leading-[1.8]">
                <p>
                  After double-brokering fraud made national headlines, shippers
                  and freight brokers now actively verify carrier identity online
                  before awarding freight. AI-powered carrier screening tools are
                  filtering out companies with no digital footprint. If you
                  don&apos;t exist online, you don&apos;t exist to the people
                  writing checks.
                </p>
                <p>
                  We build professional carrier websites with MC/DOT verification,
                  safety records, fleet capabilities, and contact forms — everything
                  a shipper needs to say &ldquo;yes&rdquo; before they pick up the
                  phone. Then we set up and manage your Google Business Profile so
                  you appear in local search results.
                </p>
                <p className="text-navy-900/75 font-medium">
                  The competitive bar is low. Most carriers have nothing. Even a
                  well-built site puts you in the top tier immediately.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {[
                { stat: '80%', label: 'of shippers research carriers online before contracting' },
                { stat: '70%', label: 'of independent carriers have no website at all' },
                { stat: '60%', label: 'of shippers won\u2019t call a carrier they can\u2019t verify online' },
                { stat: '3 sec', label: 'average time before a visitor leaves a slow or broken site' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-navy-900/[0.06] p-6 flex items-start gap-5">
                  <span className="font-display text-[36px] font-black text-gold-500 leading-none min-w-[80px]">{item.stat}</span>
                  <span className="font-display text-[14px] text-navy-900/50 leading-[1.6] pt-2">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">What We Build</span>
          </div>

          <h2 className="font-display text-h2 text-white mb-16 md:mb-20 max-w-[600px]">
            Everything a Shipper Looks for
            <span className="text-gold-400"> Before They Call</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Custom Design', body: 'Unique to your operation — your fleet, your routes, your brand. Not a template with a logo swap.' },
              { title: 'MC/DOT Verification', body: 'Authority numbers, insurance certificates, safety ratings — all the trust signals shippers require.' },
              { title: 'Mobile Optimized', body: 'Most shipper searches happen on phones. Your site needs to load fast and look sharp on every screen.' },
              { title: 'SEO Built In', body: 'Structured for Google. When shippers search for carriers in your lanes and region, you show up.' },
              { title: 'Quote Request Forms', body: 'Make it easy for shippers to request rates. Every form submission is a potential contract.' },
              { title: 'Google Business Profile', body: 'Setup, optimization, and ongoing management. Show up in local search and Maps with a verified listing.' },
            ].map((item) => (
              <div key={item.title} className="bg-navy-800 p-7 md:p-8 border border-white/[0.04]">
                <h3 className="font-display text-[16px] font-bold text-white mb-2 tracking-[-0.01em]">{item.title}</h3>
                <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REQUEST FORM ─── */}
      <section id="request" className="relative py-24 md:py-32 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[720px] mx-auto px-6 md:px-10">
          <div className="bg-white border border-navy-900/[0.06] p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-600">Get Started</span>
                <div className="h-[1px] w-8 bg-gold-500" />
              </div>
              <h2 className="font-display text-h2 text-navy-900 mb-4">Request Your Website</h2>
              <p className="font-display text-[15px] font-normal text-navy-900/50 leading-[1.7]">
                Tell us about your operation and we&apos;ll put together a custom
                proposal tailored to your fleet and market.
              </p>
            </div>

            <WebsiteSignupForm />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-h2 text-white mb-6">
            Not Sure Where
            <span className="text-gold-400"> to Start?</span>
          </h2>
          <p className="font-display text-[17px] font-normal text-white/45 leading-[1.8] max-w-[540px] mx-auto mb-10">
            Book a call and we&apos;ll audit your current online presence
            together — what&apos;s working, what&apos;s costing you freight,
            and what to fix first.
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
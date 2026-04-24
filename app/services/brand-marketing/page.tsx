import Link from 'next/link'
import WebsiteSignupForm from '@/components/WebsiteSignupForm'

export const metadata = {
  title: 'Online Presence & Brand — Carrier Websites | The GTC Group',
  description: 'Professional websites and digital presence management for carrier operations. Shipper verification, SEO, and Google Business Profile setup.',
}

export default function BrandMarketingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-6">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/60 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold-500">Online Presence & Brand</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Online Presence & Brand</span>
          </div>
          <h1 className="font-display text-[28px] md:text-[38px] lg:text-[42px] font-extrabold text-white leading-[1.15] tracking-[-0.025em] max-w-[640px] mb-5">
            Carrier Websites, Google Business Profiles & Digital Verification
          </h1>
          <p className="font-display text-[15px] md:text-[16px] font-normal text-white/50 leading-[1.75] max-w-[520px] mb-8">
            Shippers and AI-powered screening tools now verify carriers online before awarding freight. We build and manage the digital presence that meets that requirement.
          </p>
          <a href="#request" className="btn btn-primary">Request a Website</a>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">Context</span>
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 leading-[1.2] tracking-[-0.02em] mb-5">
                Carriers without a digital presence are being filtered out of shipper workflows.
              </h2>
              <div className="space-y-4 font-display text-[15px] font-normal text-navy-900/55 leading-[1.75]">
                <p>
                  Following the double-brokering fraud wave, shippers and freight brokers actively verify carrier identity online before awarding freight. AI-powered carrier screening platforms now filter out companies with no digital footprint.
                </p>
                <p>
                  The standard for verification includes a professional website with MC/DOT numbers, insurance documentation, safety records, fleet capabilities, and a contact form. A Google Business Profile with verified location and reviews is increasingly expected as well.
                </p>
                <p className="text-navy-900/70 font-medium">
                  Most carriers have neither. A well-built site and verified profile immediately places a carrier in the top tier of online visibility.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { stat: '80%', label: 'of shippers research carriers online before contracting' },
                { stat: '70%', label: 'of independent carriers have no website' },
                { stat: '60%', label: 'of shippers will not call a carrier they cannot verify online' },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-navy-900/[0.06] p-5 flex items-start gap-4">
                  <span className="font-display text-[28px] font-extrabold text-gold-500 leading-none min-w-[64px]">{item.stat}</span>
                  <span className="font-display text-[13px] text-navy-900/50 leading-[1.6] pt-1.5">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500">Deliverables</span>
          </div>
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-12 max-w-[500px]">
            Website, verification, and search presence — built for carriers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Custom Website', body: 'Designed for your operation — fleet details, service areas, and capabilities. Not a template.' },
              { title: 'MC/DOT Verification', body: 'Authority numbers, insurance certificates, and safety ratings displayed for shipper due diligence.' },
              { title: 'Mobile Optimized', body: 'Responsive design built for the devices shippers actually use to research carriers.' },
              { title: 'SEO Configuration', body: 'Structured for search visibility in your operating lanes and service region.' },
              { title: 'Quote Request Forms', body: 'Shipper-facing forms that convert site visitors into rate inquiries.' },
              { title: 'Google Business Profile', body: 'Setup, verification, and ongoing management. Verified listing in local search and Maps.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/[0.06] p-5">
                <h3 className="font-display text-[14px] font-bold text-white mb-1.5">{item.title}</h3>
                <p className="font-display text-[13px] font-normal text-white/35 leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="request" className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="bg-white border border-navy-900/[0.06] p-6 md:p-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-[1px] w-6 bg-gold-500" />
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-600">Get Started</span>
                <div className="h-[1px] w-6 bg-gold-500" />
              </div>
              <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-navy-900 tracking-[-0.02em] mb-3">Request a Website</h2>
              <p className="font-display text-[14px] font-normal text-navy-900/45 leading-[1.7]">
                Provide your details and we&apos;ll follow up with a custom proposal for your operation.
              </p>
            </div>
            <WebsiteSignupForm />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-display text-[24px] md:text-[28px] font-extrabold text-white leading-[1.2] tracking-[-0.02em] mb-4">
            Not sure what you need yet?
          </h2>
          <p className="font-display text-[15px] font-normal text-white/45 leading-[1.75] mb-8">
            Schedule a call and we&apos;ll review your current digital presence — what&apos;s helping, what&apos;s missing, and what to address first.
          </p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
        </div>
      </section>
    </>
  )
}
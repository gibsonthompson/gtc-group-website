import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jacob Brewer — Founder & CEO | The GTC Group',
  description: 'Veteran freight brokerage executive. Founder of The GTC Group — a logistics advisory firm that applies brokerage-side intelligence for carriers.',
  openGraph: {
    title: 'Jacob Brewer — Founder & CEO | The GTC Group',
    description: 'Veteran freight brokerage executive. Founder of The GTC Group — applying brokerage-side intelligence for carrier operations.',
    type: 'profile',
    url: 'https://www.globaltransportconsultinggroup.com/author/jacob-brewer',
  },
}

const jacobPosts = [
  { slug: 'cut-trucking-insurance-costs-2026', title: 'How Small Carriers Can Cut Trucking Insurance Costs in 2026 (Without Reducing Coverage)', category: 'Cost Reduction', readTime: '10 min read', date: 'February 2026' },
  { slug: 'beyond-load-boards-direct-shipper-contracts', title: 'Beyond Load Boards: How Independent Carriers Are Landing Direct Shipper Contracts', category: 'Revenue Growth', readTime: '11 min read', date: 'February 2026' },
  { slug: 'why-shippers-pass-on-your-carrier', title: 'Why Shippers Pass on Your Carrier Company (And What Your Online Presence Has to Do With It)', category: 'Brand & Marketing', readTime: '9 min read', date: 'February 2026' },
  { slug: 'trucking-insurance-cost-per-truck', title: 'How Much Should Trucking Insurance Cost Per Truck in 2026?', category: 'Cost Reduction', readTime: '8 min read', date: 'January 2026' },
  { slug: 'load-board-fees-profit-math', title: 'Load Board Fees Are Eating Your Profit: The Real Math Nobody Shows You', category: 'Revenue Growth', readTime: '10 min read', date: 'January 2026' },
  { slug: 'true-cost-independent-carrier-2026', title: 'The True Cost of Being an Independent Carrier in 2026', category: 'Industry Analysis', readTime: '12 min read', date: 'January 2026' },
  { slug: 'how-large-fleets-get-better-rates', title: 'How Large Fleets Get Better Rates (And How Small Carriers Can Too)', category: 'Strategy', readTime: '9 min read', date: 'January 2026' },
  { slug: 'signs-overpaying-for-fuel', title: '5 Signs You\u2019re Overpaying for Diesel (And How Much It\u2019s Actually Costing You)', category: 'Cost Reduction', readTime: '7 min read', date: 'January 2026' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Brewer',
  jobTitle: 'Founder & CEO',
  worksFor: { '@type': 'Organization', name: 'The GTC Group', url: 'https://www.globaltransportconsultinggroup.com' },
  url: 'https://www.globaltransportconsultinggroup.com/author/jacob-brewer',
  image: 'https://www.globaltransportconsultinggroup.com/team/team-1.jpg',
  description: 'Veteran freight brokerage executive and founder of The GTC Group, a logistics advisory firm that applies brokerage-side intelligence to carrier operations.',
  knowsAbout: ['Freight Brokerage', 'Trucking Insurance', 'Carrier Operations', 'Lane Optimization', 'Rate Negotiation', 'Fleet Cost Reduction', 'Direct Shipper Contracts', 'Logistics Consulting'],
  sameAs: [],
}

export default function JacobBrewerAuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO / BIO ─── */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gold-500">Author</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="relative w-[160px] h-[200px] md:w-[200px] md:h-[250px] flex-shrink-0 overflow-hidden">
              <Image
                src="/team/team-1.jpg"
                alt="Jacob Brewer — Founder & CEO of The GTC Group"
                fill
                className="object-cover grayscale-[30%]"
                sizes="200px"
                priority
              />
              <div className="absolute top-0 left-0 w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[3px] bg-gold-500" />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <div className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">Founder & CEO</div>
              <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-black text-white leading-[1.05] tracking-[-0.02em] mb-6">Jacob Brewer</h1>
              <div className="space-y-4 font-display text-[15px] font-normal text-white/55 leading-[1.75]">
                <p>
                  Veteran freight brokerage executive with senior-level experience
                  at nationally ranked brokerages. After years of building the
                  pricing models and margin structures that brokerages use to
                  maximize their own revenue, Jacob founded The GTC Group to
                  apply that same intelligence for carriers.
                </p>
                <p>
                  His work at GTC focuses on reviewing carrier lane data, calling
                  brokers and shippers directly, and renegotiating rates using
                  brokerage-side pricing frameworks. He also leads GTC&apos;s
                  dedicated sales operation, building direct shipper relationships
                  that eliminate broker dependency.
                </p>
                <p>
                  Jacob writes about the real costs of running a carrier operation,
                  where fleets are leaving money on the table, and what it
                  actually takes to compete in a market structured for larger players.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a href="mailto:jbrewer@gtcadvisers.com" className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-gold-500 hover:text-gold-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  jbrewer@gtcadvisers.com
                </a>
                <a href="tel:7705332544" className="inline-flex items-center gap-2 font-display text-[13px] font-semibold text-gold-500 hover:text-gold-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  (770) 533-2544
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="relative py-12 bg-cream-100 border-b border-navy-900/[0.06]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-[14px] font-bold text-navy-900 mb-4 tracking-[-0.01em]">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Rate Negotiation', 'Lane Optimization', 'Direct Shipper Contracts',
              'Trucking Insurance Optimization', 'Freight Brokerage Operations',
              'Carrier Cost Reduction', 'Fleet Fuel Programs', 'Maintenance Network Access',
              'Carrier Online Presence', 'Fleet Operations Strategy',
            ].map((area) => (
              <span key={area} className="inline-block bg-white text-navy-900 font-display text-[12px] font-medium px-3 py-1.5 border border-navy-900/[0.08]">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section className="relative py-20 md:py-24 bg-cream-100 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light bg-grid" />
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
          <h2 className="font-display text-[24px] md:text-[28px] font-black text-navy-900 tracking-[-0.02em] mb-2">Articles by Jacob</h2>
          <p className="font-display text-[15px] font-normal text-navy-900/45 mb-10">
            Cost breakdowns, rate strategies, and operational insights for carriers.
          </p>

          <div className="space-y-4">
            {jacobPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-navy-900/[0.06] p-6 hover:border-gold-500/30 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-[10px] font-bold tracking-[0.1em] uppercase text-gold-600 bg-gold-500/[0.08] px-2 py-0.5">{post.category}</span>
                      <span className="font-display text-[12px] text-navy-900/30">{post.date}</span>
                      <span className="font-display text-[12px] text-navy-900/30">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-[16px] md:text-[17px] font-bold text-navy-900 leading-tight group-hover:text-gold-600 transition-colors">{post.title}</h3>
                  </div>
                  <div className="hidden sm:flex items-center text-navy-900/20 group-hover:text-gold-500 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-[24px] md:text-[28px] font-black text-white tracking-[-0.02em] mb-4">
            Want to Talk Numbers?
          </h2>
          <p className="font-display text-[15px] font-normal text-white/45 leading-[1.7] mb-8">
            Book a free discovery call. Jacob&apos;s team will review your operation,
            identify where you&apos;re leaving money, and show you exactly what
            GTC can do — no obligation.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors duration-200"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
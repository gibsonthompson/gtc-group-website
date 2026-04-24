import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jacob Brewer — Founder & CEO | The GTC Group',
  description: 'Senior freight brokerage executive. Founder of The GTC Group — carrier advisory services including rate negotiation, cost reduction, and shipper acquisition.',
  openGraph: {
    title: 'Jacob Brewer — Founder & CEO | The GTC Group',
    description: 'Carrier advisory services. Rate negotiation, cost reduction, and direct shipper acquisition.',
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
  image: 'https://www.globaltransportconsultinggroup.com/team/team-1.png',
  description: 'Senior freight brokerage executive and founder of The GTC Group, a carrier advisory firm providing rate negotiation, cost reduction, and shipper acquisition services.',
  knowsAbout: ['Freight Brokerage', 'Trucking Insurance', 'Carrier Operations', 'Lane Optimization', 'Rate Negotiation', 'Fleet Cost Reduction', 'Direct Shipper Contracts', 'Logistics Consulting'],
  sameAs: [],
}

export default function JacobBrewerAuthorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative bg-navy-900 overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-[900px] mx-auto px-6">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/60 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-gold-500">Author</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
            <div className="relative w-[140px] h-[175px] md:w-[170px] md:h-[210px] flex-shrink-0 overflow-hidden">
              <Image src="/team/team-1.png" alt="Jacob Brewer" fill className="object-cover grayscale-[20%]" sizes="170px" priority />
              <div className="absolute top-0 left-0 w-8 h-8">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-500" />
                <div className="absolute top-0 left-0 h-full w-[2px] bg-gold-500" />
              </div>
            </div>

            <div className="flex-1">
              <div className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-500 mb-2">Founder & CEO</div>
              <h1 className="font-display text-[28px] md:text-[32px] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-5">Jacob Brewer</h1>
              <div className="space-y-3 font-display text-[14px] font-normal text-white/50 leading-[1.75]">
                <p>
                  Senior-level brokerage experience at nationally ranked freight brokerages. Background in carrier rate structures, margin modeling, and shipper contract negotiation.
                </p>
                <p>
                  At GTC, Jacob leads the advisory practice and the dedicated sales function that builds direct shipper relationships for carrier clients. He writes about carrier economics, rate optimization, and cost structure.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <a href="mailto:jbrewer@gtcadvisers.com" className="inline-flex items-center gap-2 font-display text-[12px] font-semibold text-gold-500 hover:text-gold-300 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  jbrewer@gtcadvisers.com
                </a>
                <a href="tel:7705332544" className="inline-flex items-center gap-2 font-display text-[12px] font-semibold text-gold-500 hover:text-gold-300 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  (770) 533-2544
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="py-10 bg-cream-100 border-b border-navy-900/[0.06]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-display text-[13px] font-bold text-navy-900 mb-3">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Rate Negotiation', 'Lane Optimization', 'Direct Shipper Contracts',
              'Trucking Insurance', 'Freight Brokerage Operations', 'Carrier Cost Reduction',
              'Fleet Fuel Programs', 'Maintenance Networks', 'Carrier Digital Presence', 'Fleet Operations Strategy',
            ].map((area) => (
              <span key={area} className="inline-block bg-white text-navy-900 font-display text-[11px] font-medium px-2.5 py-1 border border-navy-900/[0.08]">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-display text-[20px] md:text-[24px] font-extrabold text-navy-900 tracking-[-0.02em] mb-2">Articles</h2>
          <p className="font-display text-[14px] font-normal text-navy-900/40 mb-8">
            Carrier economics, rate strategy, and operational analysis.
          </p>

          <div className="space-y-3">
            {jacobPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-navy-900/[0.06] p-5 hover:border-gold-500/30 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="font-display text-[10px] font-bold tracking-[0.1em] uppercase text-gold-600 bg-gold-500/[0.08] px-1.5 py-0.5">{post.category}</span>
                      <span className="font-display text-[11px] text-navy-900/25">{post.date}</span>
                      <span className="font-display text-[11px] text-navy-900/25">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-[15px] font-bold text-navy-900 leading-snug group-hover:text-gold-600 transition-colors">{post.title}</h3>
                  </div>
                  <div className="hidden sm:flex items-center text-navy-900/15 group-hover:text-gold-500 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-navy-900">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="font-display text-[20px] md:text-[24px] font-extrabold text-white tracking-[-0.02em] mb-3">
            Schedule a consultation.
          </h2>
          <p className="font-display text-[14px] font-normal text-white/40 leading-[1.7] mb-6">
            We review your operation, identify where you&apos;re leaving money, and document the opportunities — no obligation.
          </p>
          <Link href="/book-call" className="btn btn-primary">Schedule a Call</Link>
        </div>
      </section>
    </>
  )
}
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jacob Brewer — Founder & CEO | The GTC Group',
  description: 'Jacob Brewer is the Founder & CEO of The GTC Group. A veteran freight brokerage executive, Jacob founded GTC to give independent carriers access to the same competitive advantages used by large brokerages.',
  openGraph: {
    title: 'Jacob Brewer — Founder & CEO | The GTC Group',
    description: 'Veteran freight brokerage executive. Founder of The GTC Group — helping independent carriers compete with enterprise-level pricing and support.',
    type: 'profile',
    url: 'https://www.globaltransportconsultinggroup.com/author/jacob-brewer',
  },
}

// Pull from the same blogPosts data source used in /blog — 
// replace with your actual data fetching (Supabase, MDX, etc.)
const jacobPosts = [
  {
    slug: 'cut-trucking-insurance-costs-2026',
    title: 'How Small Carriers Can Cut Trucking Insurance Costs in 2026 (Without Reducing Coverage)',
    excerpt: 'Small fleets pay 3x more per mile on insurance than large carriers. Here\'s exactly why—and 7 strategies to close the gap.',
    category: 'Cost Reduction',
    readTime: '10 min read',
    date: 'February 2026',
  },
  {
    slug: 'beyond-load-boards-direct-shipper-contracts',
    title: 'Beyond Load Boards: How Independent Carriers Are Landing Direct Shipper Contracts',
    excerpt: 'Between broker cuts and deadhead miles, load board dependency costs the average owner-operator $60K-$90K per year in lost revenue.',
    category: 'Revenue Growth',
    readTime: '11 min read',
    date: 'February 2026',
  },
  {
    slug: 'why-shippers-pass-on-your-carrier',
    title: 'Why Shippers Pass on Your Carrier Company (And What Your Online Presence Has to Do With It)',
    excerpt: '80% of shippers research carriers online before contracting. Only 30% of small carriers have a website.',
    category: 'Brand & Marketing',
    readTime: '9 min read',
    date: 'February 2026',
  },
  {
    slug: 'trucking-insurance-cost-per-truck',
    title: 'How Much Should Trucking Insurance Cost Per Truck in 2026?',
    excerpt: 'The average owner-operator pays $12,000-$18,000 per truck annually. But many are overpaying by 30% or more.',
    category: 'Cost Reduction',
    readTime: '8 min read',
    date: 'January 2026',
  },
  {
    slug: 'load-board-fees-profit-math',
    title: 'Load Board Fees Are Eating Your Profit: The Real Math Nobody Shows You',
    excerpt: 'Between subscription fees, broker cuts, and deadhead miles, load boards cost the average owner-operator $31,000+ per year.',
    category: 'Revenue Growth',
    readTime: '10 min read',
    date: 'January 2026',
  },
  {
    slug: 'true-cost-independent-carrier-2026',
    title: 'The True Cost of Being an Independent Carrier in 2026',
    excerpt: 'Independence has a price tag. We calculated every hidden cost independent carriers face that large fleets don\'t.',
    category: 'Industry Analysis',
    readTime: '12 min read',
    date: 'January 2026',
  },
  {
    slug: 'how-large-fleets-get-better-rates',
    title: 'How Large Fleets Get Better Rates (And How Small Carriers Can Too)',
    excerpt: 'Mega-carriers pay 15-40% less for insurance, fuel, and maintenance. Here\'s exactly how volume discounts work.',
    category: 'Strategy',
    readTime: '9 min read',
    date: 'January 2026',
  },
  {
    slug: 'signs-overpaying-for-fuel',
    title: '5 Signs You\'re Overpaying for Diesel (And How Much It\'s Actually Costing You)',
    excerpt: 'At 6 MPG and 100,000 miles per year, every cent per gallon costs you $167 annually.',
    category: 'Cost Reduction',
    readTime: '7 min read',
    date: 'January 2026',
  },
]

// JSON-LD structured data for E-E-A-T
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Brewer',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'The GTC Group',
    url: 'https://www.globaltransportconsultinggroup.com',
  },
  url: 'https://www.globaltransportconsultinggroup.com/author/jacob-brewer',
  image: 'https://www.globaltransportconsultinggroup.com/team/team-1.jpg',
  description: 'Veteran freight brokerage executive and founder of The GTC Group, a logistics advisory firm that combines carrier buying power to deliver enterprise-level pricing for independent carriers.',
  knowsAbout: [
    'Freight Brokerage',
    'Trucking Insurance',
    'Carrier Operations',
    'Lane Optimization',
    'Rate Negotiation',
    'Fleet Cost Reduction',
    'Direct Shipper Contracts',
    'Logistics Consulting',
  ],
  sameAs: [
    // Add Jacob's LinkedIn URL here when available
  ],
}

export default function JacobBrewerAuthorPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero / Author Bio */}
      <section className="bg-navy-900 pt-32 pb-20">
        <div className="max-w-[1000px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/60">Author</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="w-[160px] h-[200px] md:w-[200px] md:h-[250px] rounded-lg overflow-hidden flex-shrink-0 relative border-2 border-gold-500/30">
              <Image
                src="/team/team-1.jpg"
                alt="Jacob Brewer — Founder & CEO of The GTC Group"
                fill
                className="object-cover"
                sizes="200px"
                priority
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <span className="inline-block text-gold-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-3">
                Founder & CEO
              </span>
              <h1 className="font-display text-[clamp(2rem,4vw,3rem)] text-white font-bold leading-[1.1] tracking-[-0.02em] mb-5">
                Jacob Brewer
              </h1>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Veteran freight brokerage executive with senior-level experience at nationally ranked brokerages. 
                  After years of watching the same systems work against independent carriers — inflated insurance premiums, 
                  limited lane access, zero negotiating leverage — Jacob founded The GTC Group to bring the other side 
                  of the playbook to the carriers who need it most.
                </p>
                <p>
                  His work at GTC focuses on pooling carrier buying power to unlock the same bulk pricing on insurance, 
                  fuel, maintenance, and driver services that large brokerages and mega-carriers have always used to 
                  maintain their advantage. He also leads GTC&apos;s dedicated sales operation, which connects independent 
                  carriers directly with shippers — cutting out unnecessary middlemen and reducing load board dependency.
                </p>
                <p>
                  Jacob writes about the real costs of running an independent trucking operation, where carriers are 
                  leaving money on the table, and what it actually takes to compete in a market designed for larger players.
                </p>
              </div>

              {/* Contact / Links */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a
                  href="mailto:jbrewer@gtcadvisers.com"
                  className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  jbrewer@gtcadvisers.com
                </a>
                <a
                  href="tel:7705332544"
                  className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  (770) 533-2544
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="bg-cream-100 py-16 border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-display text-lg text-navy-900 font-bold mb-6">Areas of Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Trucking Insurance Optimization',
              'Rate Negotiation',
              'Direct Shipper Contracts',
              'Lane Acquisition',
              'Freight Brokerage Operations',
              'Carrier Cost Reduction',
              'Fleet Fuel Programs',
              'Maintenance Network Access',
              'Carrier Online Presence',
              'Independent Carrier Strategy',
            ].map((area) => (
              <span
                key={area}
                className="inline-block bg-white text-navy-900 text-xs font-medium px-3 py-1.5 rounded border border-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles by Jacob */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 font-bold mb-3">
            Articles by Jacob
          </h2>
          <p className="text-gray-600 mb-10">
            Cost breakdowns, rate strategies, and operational insights for independent carriers.
          </p>

          <div className="space-y-6">
            {jacobPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-gold-600 bg-gold-500/10 px-2 py-0.5 rounded-sm">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy-900 leading-tight mb-2 group-hover:text-gold-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center text-gray-400 group-hover:text-gold-500 transition-colors flex-shrink-0 mt-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white font-bold mb-4">
            Want to Talk Numbers?
          </h2>
          <p className="text-white/70 mb-8">
            Book a free discovery call. Jacob&apos;s team will review your operation, 
            identify where you&apos;re overpaying, and show you exactly what GTC can do — no obligation.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3.5 px-8 rounded transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </>
  )
}
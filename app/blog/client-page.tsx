'use client'

import Link from 'next/link'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  generated?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: 'cut-trucking-insurance-costs-2026',
    title: 'How Small Carriers Can Cut Trucking Insurance Costs in 2026 (Without Reducing Coverage)',
    excerpt: 'Small fleets pay 3x more per mile on insurance than large carriers. Here\'s exactly why—and 7 strategies to close the gap, including one most carriers don\'t know about.',
    category: 'Cost Reduction',
    readTime: '10 min read',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'beyond-load-boards-direct-shipper-contracts',
    title: 'Beyond Load Boards: How Independent Carriers Are Landing Direct Shipper Contracts',
    excerpt: 'Between broker cuts and deadhead miles, load board dependency costs the average owner-operator $60K-$90K per year in lost revenue. Here\'s how to transition to direct freight.',
    category: 'Revenue Growth',
    readTime: '11 min read',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'why-shippers-pass-on-your-carrier',
    title: 'Why Shippers Pass on Your Carrier Company (And What Your Online Presence Has to Do With It)',
    excerpt: '80% of shippers research carriers online before contracting. Only 30% of small carriers have a website. Here\'s what that gap is costing you in lost contracts.',
    category: 'Brand & Marketing',
    readTime: '9 min read',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'trucking-insurance-cost-per-truck',
    title: 'How Much Should Trucking Insurance Cost Per Truck in 2026?',
    excerpt: 'The average owner-operator pays $12,000-$18,000 per truck annually. But many are overpaying by 30% or more. Here\'s how to know if you\'re one of them.',
    category: 'Cost Reduction',
    readTime: '8 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'load-board-fees-profit-math',
    title: 'Load Board Fees Are Eating Your Profit: The Real Math Nobody Shows You',
    excerpt: 'Between subscription fees, broker cuts, and deadhead miles, load boards cost the average owner-operator $31,000+ per year. We break down every dollar.',
    category: 'Revenue Growth',
    readTime: '10 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'true-cost-independent-carrier-2026',
    title: 'The True Cost of Being an Independent Carrier in 2026',
    excerpt: 'Independence has a price tag. We calculated every hidden cost independent carriers face that large fleets don\'t—and it adds up to $47,000+ per truck annually.',
    category: 'Industry Analysis',
    readTime: '12 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'how-large-fleets-get-better-rates',
    title: 'How Large Fleets Get Better Rates (And How Small Carriers Can Too)',
    excerpt: 'Mega-carriers pay 15-40% less for insurance, fuel, and maintenance. Here\'s exactly how volume discounts work—and how to access them without 500 trucks.',
    category: 'Strategy',
    readTime: '9 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'signs-overpaying-for-fuel',
    title: '5 Signs You\'re Overpaying for Diesel (And How Much It\'s Actually Costing You)',
    excerpt: 'At 6 MPG and 100,000 miles per year, every cent per gallon costs you $167 annually. Most owner-operators overpay by 15-30 cents. Do the math.',
    category: 'Cost Reduction',
    readTime: '7 min read',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
]

interface BlogIndexPageProps {
  generatedPosts?: BlogPost[]
}

export default function BlogIndexPage({ generatedPosts = [] }: BlogIndexPageProps) {
  const allPosts = [...generatedPosts, ...blogPosts]

  return (
    <>
      <section className="bg-navy-950 pt-32 pb-20">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-gold-500" />
            <span className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-500">Insights</span>
          </div>
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-black text-white leading-[1.05] tracking-[-0.03em] max-w-[800px] mb-6">
            Insights for Carrier Operations
          </h1>
          <p className="font-display text-[17px] font-normal text-white/40 max-w-[560px] leading-[1.7]">
            Cost breakdowns, rate strategies, and operational intelligence. No fluff — just numbers and strategies that move your bottom line.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 py-20">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white overflow-hidden border border-navy-900/[0.06] hover:border-gold-500/30 transition-all duration-200"
              >
                <div
                  className="h-[200px] bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${post.image}')` }}
                >
                  <div className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/20 transition-colors" />
                  <span className="absolute top-4 left-4 bg-gold-500 text-navy-950 py-1 px-2.5 font-display text-[10px] font-bold tracking-[0.08em] uppercase">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 font-display text-[12px] text-navy-900/30 mb-3">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-[16px] font-bold text-navy-900 leading-tight mb-3 group-hover:text-gold-600 transition-colors tracking-[-0.01em]">
                    {post.title}
                  </h2>
                  <p className="font-display text-[13px] font-normal text-navy-900/45 leading-[1.7]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-[22px] md:text-[28px] font-black text-white tracking-[-0.02em] mb-4">
            Want a Personalized Cost Analysis?
          </h2>
          <p className="font-display text-[15px] font-normal text-white/40 mb-8">
            We&apos;ll review your specific operation and show you exactly where you&apos;re leaving money on the table.
          </p>
          <Link
            href="/book-call"
            className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors"
          >
            Book Your Free Assessment
          </Link>
        </div>
      </section>
    </>
  )
}
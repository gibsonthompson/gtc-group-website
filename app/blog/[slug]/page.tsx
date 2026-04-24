import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import './generated-post.css'

const blogSupabase = createClient(
  process.env.BLOG_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.BLOG_SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

const BUSINESS_SLUG = 'gtc-group'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const { data: biz } = await blogSupabase
      .from('blog_businesses').select('id').eq('slug', BUSINESS_SLUG).single()
    if (!biz) return []
    const { data: posts } = await blogSupabase
      .from('blog_generated_posts').select('slug').eq('business_id', biz.id).eq('status', 'published')
    return (posts || []).map((p: { slug: string }) => ({ slug: p.slug }))
  } catch { return [] }
}

async function getPost(slug: string) {
  try {
    const { data: biz } = await blogSupabase
      .from('blog_businesses').select('id').eq('slug', BUSINESS_SLUG).single()
    if (!biz) return null
    const { data: post } = await blogSupabase
      .from('blog_generated_posts')
      .select('title, slug, html_content, meta_description, primary_keyword, secondary_keywords, category, publish_date, read_time, word_count, excerpt')
      .eq('business_id', biz.id).eq('slug', slug).eq('status', 'published').single()
    return post
  } catch { return null }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | The GTC Group`,
    description: post.meta_description || post.title,
    keywords: post.primary_keyword ? [post.primary_keyword, ...(post.secondary_keywords || [])] : undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title, description: post.meta_description || post.title, type: 'article',
      publishedTime: post.publish_date || undefined, authors: ['Jacob Brewer'], siteName: 'The GTC Group',
    },
  }
}

function mapPillar(cat: string | null): string {
  if (!cat) return 'Cost Reduction'
  const map: Record<string, string> = {
    'cost-reduction': 'Cost Reduction', 'revenue-growth': 'Revenue Growth',
    'brand-marketing': 'Brand & Marketing', 'industry-analysis': 'Industry Analysis',
    'strategy': 'Strategy', 'guide': 'Guide',
  }
  return map[cat] || cat
}

interface CTAContent { heading: string; body: string; button: string }

function getCTA(category: string | null): CTAContent {
  const ctas: Record<string, CTAContent> = {
    'cost-reduction': { heading: "Find Out Exactly Where You're Leaving Money on the Table", body: "GTC's free operations assessment identifies your specific cost reduction opportunities — insurance, fuel, maintenance, and more. ROI in one week, or it's free.", button: 'Book Your Free Assessment' },
    'revenue-growth': { heading: 'Ready to Stop Depending on Load Boards?', body: "GTC's dedicated sales team finds direct shipper contracts and optimizes your lanes. Book a call to discuss your growth opportunities.", button: 'Book a Call' },
    'brand-marketing': { heading: 'Need a Website That Actually Wins You Freight?', body: "We build professional websites for carriers — 80% of shippers research carriers online before contracting. Book a call to see what yours could look like.", button: 'Get Started' },
    'industry-analysis': { heading: 'Get Personalized Insights for Your Operation', body: "Market conditions affect every carrier differently. Book a free assessment to see what these trends mean for your specific fleet.", button: 'Book Your Free Assessment' },
  }
  return ctas[category || 'cost-reduction'] || ctas['cost-reduction']
}

export default async function GeneratedBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post || !post.html_content) { notFound() }

  const pillar = mapPillar(post.category)
  const cta = getCTA(post.category)
  const publishDate = post.publish_date
    ? new Date(post.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
    : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })

  const faqItems: { question: string; answer: string }[] = []
  const faqRegex = /<div[^>]*class="faq-card"[^>]*>[\s\S]*?<(?:h3|h4|p)[^>]*class="faq-question"[^>]*>([\s\S]*?)<\/(?:h3|h4|p)>\s*<p[^>]*class="faq-answer"[^>]*>([\s\S]*?)<\/p>/gi
  let faqMatch
  while ((faqMatch = faqRegex.exec(post.html_content)) !== null) {
    faqItems.push({ question: faqMatch[1].replace(/<[^>]*>/g, '').trim(), answer: faqMatch[2].replace(/<[^>]*>/g, '').trim() })
  }
  if (faqItems.length === 0) {
    const faqRegex2 = /<button[^>]*class="faq-question"[^>]*>([\s\S]*?)<\/button>\s*<div[^>]*class="faq-answer"[^>]*><div[^>]*class="faq-answer-inner"[^>]*>([\s\S]*?)<\/div><\/div>/gi
    let faqMatch2
    while ((faqMatch2 = faqRegex2.exec(post.html_content)) !== null) {
      faqItems.push({ question: faqMatch2[1].replace(/<[^>]*>/g, '').trim(), answer: faqMatch2[2].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const schemaGraph: any[] = [
    {
      '@type': 'Article', headline: post.title, description: post.meta_description || post.title,
      datePublished: post.publish_date || new Date().toISOString().split('T')[0],
      dateModified: post.publish_date || new Date().toISOString().split('T')[0],
      author: { '@type': 'Person', name: 'Jacob Brewer', jobTitle: 'Founder & CEO', url: 'https://www.globaltransportconsultinggroup.com/author/jacob-brewer', worksFor: { '@type': 'Organization', name: 'The GTC Group' }, knowsAbout: ['freight brokerage', 'trucking insurance', 'carrier operations', 'lane optimization', 'rate negotiation', 'fleet cost reduction', 'direct shipper contracts', 'logistics consulting'] },
      publisher: { '@id': 'https://www.globaltransportconsultinggroup.com/#organization' },
      mainEntityOfPage: `https://www.globaltransportconsultinggroup.com/blog/${post.slug}`,
      wordCount: post.word_count || undefined,
    },
    { '@type': 'Organization', '@id': 'https://www.globaltransportconsultinggroup.com/#organization', name: 'The GTC Group', url: 'https://www.globaltransportconsultinggroup.com', description: 'Logistics Advisory' },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.globaltransportconsultinggroup.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.globaltransportconsultinggroup.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title },
    ]},
  ]
  if (faqItems.length > 0) {
    schemaGraph.push({ '@type': 'FAQPage', mainEntity: faqItems.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaGraph }) }} />

      <section className="bg-navy-950 pt-32 pb-16">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="flex items-center gap-2 font-display text-[12px] text-white/30 mb-6">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/50">{pillar}</span>
          </nav>
          <span className="inline-block bg-gold-500 text-navy-950 py-1 px-2.5 font-display text-[10px] font-bold tracking-[0.08em] uppercase mb-4">{pillar}</span>
          <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] text-white font-black leading-[1.1] tracking-[-0.02em] mb-4">{post.title}</h1>
          {post.excerpt && <p className="font-display text-[17px] text-white/50 leading-[1.7] mb-6 max-w-[700px]">{post.excerpt}</p>}
          <div className="flex items-center gap-3 font-display text-[13px] text-white/35">
            <span>{publishDate}</span><span>&middot;</span>
            <span>{post.read_time || `${Math.ceil((post.word_count || 2000) / 200)} min read`}</span><span>&middot;</span>
            <span>By <Link href="/author/jacob-brewer" className="text-gold-500 hover:text-gold-300 transition-colors">Jacob Brewer</Link></span>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-12">
        <div className="max-w-[800px] mx-auto px-6">
          <article className="bg-white shadow-sm p-8 md:p-12 generated-article">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: post.html_content }} />
          </article>
          <div className="mt-12 bg-navy-950 p-8 md:p-12 text-center">
            <h2 className="font-display text-[22px] md:text-[28px] font-black text-white tracking-[-0.02em] mb-4">{cta.heading}</h2>
            <p className="font-display text-[15px] text-white/45 mb-8 max-w-[500px] mx-auto leading-[1.7]">{cta.body}</p>
            <Link href="/book-call" className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-display font-bold text-[14px] tracking-[0.04em] uppercase py-4 px-9 transition-colors">{cta.button}</Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="font-display text-[14px] font-semibold text-navy-900 hover:text-gold-600 transition-colors">&larr; Back to all articles</Link>
          </div>
        </div>
      </section>
    </>
  )
}
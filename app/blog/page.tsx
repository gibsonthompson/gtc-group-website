// app/blog/page.tsx (server component wrapper)
//
// Fetches generated posts from blog-farm Supabase
// and passes them to the client component which merges them with hardcoded posts.

import { createClient } from '@supabase/supabase-js'
import BlogIndexPage from './client-page'

export const revalidate = 3600

export const metadata = {
  title: 'Blog — Insights for Independent Carriers | The GTC Group',
  description: 'Straight talk about costs, rates, and running a profitable trucking operation. No fluff — just numbers and strategies that work.',
  alternates: { canonical: '/blog' },
}

async function getGeneratedPosts() {
  const supabaseUrl = process.env.BLOG_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.BLOG_SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) return []

  try {
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data: biz } = await supabase
      .from('blog_businesses').select('id').eq('slug', 'gtc-group').single()
    if (!biz) return []

    const { data: posts } = await supabase
      .from('blog_generated_posts')
      .select('slug, title, meta_description, category, publish_date, read_time, word_count')
      .eq('business_id', biz.id)
      .eq('status', 'published')
      .order('publish_date', { ascending: false })

    return (posts || []).map((p: { slug: string; title: string; meta_description: string | null; category: string | null; publish_date: string | null; read_time: string | null; word_count: number | null }) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.meta_description || '',
      category: mapCategory(p.category),
      date: p.publish_date
        ? new Date(p.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
        : 'April 2026',
      readTime: p.read_time || `${Math.ceil((p.word_count || 2000) / 200)} min read`,
      image: getCategoryImage(p.category),
      generated: true,
    }))
  } catch {
    return []
  }
}

function mapCategory(cat: string | null): string {
  const map: Record<string, string> = {
    'cost-reduction': 'Cost Reduction',
    'revenue-growth': 'Revenue Growth',
    'brand-marketing': 'Brand & Marketing',
    'industry-analysis': 'Industry Analysis',
    'strategy': 'Strategy',
    'guide': 'Guide',
  }
  return map[cat || ''] || cat || 'Guide'
}

function getCategoryImage(cat: string | null): string {
  const images: Record<string, string> = {
    'cost-reduction': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    'revenue-growth': 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    'brand-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'industry-analysis': 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
  }
  return images[cat || ''] || images['cost-reduction']
}

export default async function Page() {
  const generatedPosts = await getGeneratedPosts()
  return <BlogIndexPage generatedPosts={generatedPosts} />
}
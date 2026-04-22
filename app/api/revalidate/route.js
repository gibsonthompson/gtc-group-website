// app/api/revalidate/route.js
import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request) {
  try {
    const body = await request.json()
    const { secret, slug } = body

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate the specific blog post page
    if (slug) {
      revalidatePath(`/blog/${slug}`)
    }

    // Always revalidate the blog index (new post appears in listing)
    revalidatePath('/blog')

    // Revalidate sitemap
    revalidatePath('/sitemap.xml')

    return NextResponse.json({
      revalidated: true,
      slug: slug || 'all',
      timestamp: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { supabase, WebsiteSignup } from '@/lib/supabase'
import { sendSMS, formatPhoneForTelnyx } from '@/lib/sms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { companyName, contactName, email, phone, currentWebsite, notes } = body

    // Validate required fields
    if (!companyName || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const submission: WebsiteSignup = {
      company_name: companyName,
      contact_name: contactName,
      email,
      phone,
      current_website: currentWebsite || null,
      notes: notes || null,
    }

    const { data, error: dbError } = await supabase
      .from('website_signups')
      .insert([submission])
      .select()
      .single()

    if (dbError) {
      console.error('Supabase error:', dbError)
      // Continue anyway - we still want to send SMS notification
    }

    // Send SMS notification
    const notificationPhone = process.env.NOTIFICATION_PHONE
    if (notificationPhone) {
      const smsMessage = `🌐 New Website Signup!\n\nCompany: ${companyName}\nContact: ${contactName}\nPhone: ${phone}\nEmail: ${email}${currentWebsite ? `\nCurrent Site: ${currentWebsite}` : ''}${notes ? `\n\nNotes: ${notes}` : ''}`
      
      await sendSMS({
        to: formatPhoneForTelnyx(notificationPhone),
        message: smsMessage,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Signup submitted successfully',
      id: data?.id,
    })

  } catch (error) {
    console.error('Website signup API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

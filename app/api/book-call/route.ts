import { NextRequest, NextResponse } from 'next/server'
import { supabase, BookingSubmission } from '@/lib/supabase'
import { sendSMS, formatPhoneForTelnyx } from '@/lib/sms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, fleetSize, preferredDate, preferredTime, message } = body

    // Validate required fields
    if (!name || !email || !phone || !fleetSize || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const submission: BookingSubmission = {
      name,
      email,
      phone,
      fleet_size: fleetSize,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      message: message || null,
    }

    const { data, error: dbError } = await supabase
      .from('bookings')
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
      const smsMessage = `🚛 New GTC Booking!\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nFleet: ${fleetSize}\nDate: ${preferredDate}\nTime: ${preferredTime}${message ? `\n\nNote: ${message}` : ''}`
      
      await sendSMS({
        to: formatPhoneForTelnyx(notificationPhone),
        message: smsMessage,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Booking submitted successfully',
      id: data?.id,
    })

  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

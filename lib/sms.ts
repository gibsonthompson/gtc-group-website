interface SendSMSParams {
  to: string
  message: string
}

export async function sendSMS({ to, message }: SendSMSParams): Promise<boolean> {
  const apiKey = process.env.TELNYX_API_KEY
  const fromNumber = process.env.TELNYX_FROM_NUMBER

  if (!apiKey || !fromNumber) {
    console.error('Telnyx credentials not configured')
    return false
  }

  try {
    const response = await fetch('https://api.telnyx.com/v2/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromNumber,
        to: to,
        text: message,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Telnyx SMS error:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('SMS send error:', error)
    return false
  }
}

export function formatPhoneForTelnyx(phone: string): string {
  // Strip all non-digits
  const digits = phone.replace(/\D/g, '')
  
  // Add +1 if US number without country code
  if (digits.length === 10) {
    return `+1${digits}`
  }
  
  // Add + if 11 digits starting with 1
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`
  }
  
  return `+${digits}`
}

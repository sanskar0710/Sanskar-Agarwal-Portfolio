import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      )
    }

    // Try Web3Forms if API key is configured
    const web3formsKey = process.env.WEB3FORMS_API_KEY
    if (web3formsKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          message,
          subject: `Portfolio Contact from ${name}`,
        }),
      })

      const result = await response.json()
      if (result.success) {
        return NextResponse.json({ success: true, method: 'web3forms' })
      }

      return NextResponse.json(
        { error: 'Form submission failed. Please try again.' },
        { status: 500 },
      )
    }

    // Fallback: store the message server-side (log it)
    // In production, you'd save to a database or send an email via SMTP
    console.log('📬 New contact form submission:')
    console.log(`  Name:    ${name}`)
    console.log(`  Email:   ${email}`)
    console.log(`  Message: ${message}`)

    return NextResponse.json({
      success: true,
      method: 'server-log',
      note: 'Message received. Set WEB3FORMS_API_KEY env var for email delivery.',
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

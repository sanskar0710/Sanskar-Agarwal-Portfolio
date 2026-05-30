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

    let submittedToSheet = false
    const googleSheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL
    if (googleSheetUrl) {
      try {
        const response = await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
        const result = await response.json()
        if (result.success) {
          submittedToSheet = true
        } else {
          console.error('Google Sheets webapp returned error:', result.error)
        }
      } catch (err) {
        console.error('Google Sheets submission error:', err)
      }
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
        return NextResponse.json({
          success: true,
          method: 'web3forms',
          googleSheet: submittedToSheet,
        })
      }
    }

    if (submittedToSheet) {
      return NextResponse.json({
        success: true,
        method: 'google-sheet',
      })
    }

    // Fallback: store the message server-side (log it)
    console.log('📬 New contact form submission:')
    console.log(`  Name:    ${name}`)
    console.log(`  Email:   ${email}`)
    console.log(`  Message: ${message}`)

    return NextResponse.json({
      success: true,
      method: 'server-log',
      note: 'Message received. Set WEB3FORMS_API_KEY or GOOGLE_SHEET_WEBAPP_URL env vars.',
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Store email in a JSON file
    const emailsFile = path.join(dataDir, 'subscribers.json')
    let emails: string[] = []
    
    if (fs.existsSync(emailsFile)) {
      const fileContent = fs.readFileSync(emailsFile, 'utf-8')
      emails = JSON.parse(fileContent)
    }

    // Add new email if not already present
    if (!emails.includes(email)) {
      emails.push(email)
      fs.writeFileSync(emailsFile, JSON.stringify(emails, null, 2))
    }

    // Also log to console for immediate visibility
    console.log('📧 New email subscription:', email)
    console.log('📋 All subscribers:', emails)

    return NextResponse.json({ 
      success: true, 
      message: 'Email subscribed successfully!',
      totalSubscribers: emails.length
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe email' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    const emailsFile = path.join(dataDir, 'subscribers.json')
    
    if (!fs.existsSync(emailsFile)) {
      return NextResponse.json({ subscribers: [], count: 0 })
    }

    const fileContent = fs.readFileSync(emailsFile, 'utf-8')
    const emails = JSON.parse(fileContent)
    
    return NextResponse.json({ 
      subscribers: emails, 
      count: emails.length 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    )
  }
}

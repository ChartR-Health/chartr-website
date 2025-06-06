import { NextRequest, NextResponse } from 'next/server'

// Import Mailjet
const mailjet = require('node-mailjet').apiConnect(
  process.env.MAILJET_API_KEY || 'aaffb3af263c668e988e3b7145d312a5',
  process.env.MAILJET_SECRET_KEY || 'e24c238c620f59eb8a1e49cd228f7dd1'
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, role, subject, message, inquiryType } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; color: white; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">From ChartR Website</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h3>
            <table style="width: 100%; border-spacing: 0;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 8px 0; color: #1e293b;">${company}</td>
              </tr>
              ` : ''}
              ${role ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Role:</td>
                <td style="padding: 8px 0; color: #1e293b;">${role}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Inquiry Type:</td>
                <td style="padding: 8px 0; color: #1e293b; text-transform: capitalize;">${inquiryType.replace('_', ' ')}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Subject</h3>
            <p style="margin: 0; color: #1e293b; background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">${subject}</p>
          </div>
          
          <div>
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding: 20px; color: #64748b;">
          <p style="margin: 0; font-size: 14px;">This message was sent from the ChartR website contact form.</p>
          <p style="margin: 5px 0 0 0; font-size: 14px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission from ChartR Website

Contact Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
${role ? `- Role: ${role}` : ''}
- Inquiry Type: ${inquiryType.replace('_', ' ')}

Subject: ${subject}

Message:
${message}

Reply to: ${email}
    `

    // If Mailjet is not configured, just log the message (for development)
    if (!process.env.MAILJET_SECRET_KEY) {
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log(emailText)
      console.log('===============================')
      
      return NextResponse.json({ 
        message: 'Message received (logged to console - Mailjet not fully configured)',
        success: true 
      })
    }

    // Send email using Mailjet API
    const mailjetRequest = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'akash@chartrhealth.com', // Using your verified email as sender
              Name: 'ChartR Website'
            },
            To: [
              {
                Email: 'akash@chartrhealth.com',
                Name: 'Akash Kapoor'
              }
            ],
            ReplyTo: {
              Email: email,
              Name: name
            },
            Subject: `[ChartR Contact] ${subject}`,
            TextPart: emailText,
            HTMLPart: emailHtml
          }
        ]
      })

    await mailjetRequest

    return NextResponse.json({ 
      message: 'Email sent successfully',
      success: true 
    })

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 
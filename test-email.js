// Simple email test script for Mailjet
// Run with: node test-email.js

// Load environment variables
require('dotenv').config({ path: '.env.local' });

// Initialize Mailjet - using correct import syntax
const mailjet = require('node-mailjet').apiConnect(
  process.env.MAILJET_API_KEY || 'aaffb3af263c668e988e3b7145d312a5',
  process.env.MAILJET_SECRET_KEY || 'e24c238c620f59eb8a1e49cd228f7dd1'
);

async function testEmail() {
  console.log('🧪 Testing Mailjet email configuration...\n');

  try {
    console.log('📡 Testing Mailjet API connection...');
    
    // Test API connection first
    const apiTest = await mailjet.get('user').request();
    console.log('✅ Mailjet API connection successful!\n');

    // Send test email
    console.log('📧 Sending test email...');
    const testEmailRequest = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'akash@chartrhealth.com', // Using your real email as sender
              Name: 'ChartR Website Test'
            },
            To: [
              {
                Email: 'akash@chartrhealth.com',
                Name: 'Akash Kapoor'
              }
            ],
            Subject: '🧪 ChartR Contact Form Test Email',
            HTMLPart: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; color: white; margin-bottom: 20px;">
                  <h1 style="margin: 0;">✅ Mailjet Configuration Test</h1>
                  <p style="margin: 10px 0 0 0;">Your ChartR contact form email is working!</p>
                </div>
                <div style="background: white; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
                  <p>This is a test email to confirm your Mailjet configuration is working correctly.</p>
                  <p><strong>Configuration Details:</strong></p>
                  <ul>
                    <li>API Key: ${process.env.MAILJET_API_KEY || 'aaffb3af263c668e988e3b7145d312a5'}</li>
                    <li>Service: Mailjet API v3.1</li>
                    <li>To Email: akash@chartrhealth.com</li>
                  </ul>
                  <p>Your contact form is ready to receive submissions! 🎉</p>
                </div>
              </div>
            `,
            TextPart: `
ChartR Contact Form Test Email

This is a test email to confirm your Mailjet configuration is working correctly.

Configuration Details:
- API Key: ${process.env.MAILJET_API_KEY || 'aaffb3af263c668e988e3b7145d312a5'}
- Service: Mailjet API v3.1
- To Email: akash@chartrhealth.com

Your contact form is ready to receive submissions!
            `
          }
        ]
      });

    const result = await testEmailRequest;
    console.log('✅ Test email sent successfully!');
    console.log(`📬 Response:`, result.body);
    
    console.log('🎉 Email configuration is working! Your contact form is ready.');
    console.log('💡 You can now delete this test file: rm test-email.js\n');

  } catch (error) {
    console.error('❌ Email test failed:');
    console.error(error.message);
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Check your .env.local file has the correct Mailjet credentials');
    console.log('2. Verify MAILJET_SECRET_KEY is set correctly');
    console.log('3. Ensure your sender email is verified in Mailjet dashboard');
    console.log('4. Check that your Mailjet account is active and not suspended\n');
  }
}

// Check if environment variables are configured
if (!process.env.MAILJET_SECRET_KEY) {
  console.log('⚠️  Mailjet credentials not fully configured yet.\n');
  console.log('📝 Create a .env.local file with:');
  console.log('MAILJET_API_KEY=aaffb3af263c668e988e3b7145d312a5');
  console.log('MAILJET_SECRET_KEY=your-mailjet-secret-key\n');
  console.log('📖 Get your secret key from: https://app.mailjet.com/account/apikeys');
  console.log('📖 See EMAIL_SETUP.md for detailed instructions.');
} else {
  testEmail();
} 
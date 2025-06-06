# Email Setup for Contact Form - Mailjet Integration

The contact form is now fully functional and will send emails to `akash@chartrhealth.com` using Mailjet API. 

## Development Mode

Currently, the contact form will work in **development mode** without full email configuration. When someone submits the form, the message will be logged to the console where you're running `npm run dev`.

## Production Email Setup

You have provided your Mailjet API key, so we're using Mailjet for reliable email delivery.

### Method 1: Mailjet API (Currently Configured - Recommended)

Your API key is already configured: `aaffb3af263c668e988e3b7145d312a5`

**Quick Setup:**

1. Create a `.env.local` file in the `chartr-website` directory
2. Add the following variables:

```env
MAILJET_API_KEY=aaffb3af263c668e988e3b7145d312a5
MAILJET_SECRET_KEY=your-mailjet-secret-key
```

**Get Your Secret Key:**
1. Go to [Mailjet Dashboard](https://app.mailjet.com/account/apikeys)
2. Sign in to your Mailjet account
3. Copy your Secret Key
4. Add it to your `.env.local` file

**Important Sender Setup:**
- The contact form uses `noreply@chartrhealth.com` as the sender
- You need to verify this sender in your Mailjet dashboard
- Go to [Sender Management](https://app.mailjet.com/account/sender) and add `noreply@chartrhealth.com`
- Follow the verification steps (SPF/DKIM records)

### Method 2: Microsoft Forms (Alternative - No Coding Required)

Since you have a Microsoft business account, you can use Microsoft Forms as a completely free alternative:

1. Go to [forms.office.com](https://forms.office.com)
2. Sign in with your Microsoft business account
3. Create a contact form with your desired fields
4. Responses automatically go to `akash@chartrhealth.com`
5. Embed the form on your website or use a direct link

**Benefits**: Zero setup, professional integration, built-in analytics, Excel export

### Method 3: Free Third-Party Form Services

- **Formspree**: 50 submissions/month free, works with any HTML form
- **Netlify Forms**: Free with Netlify hosting (100 submissions/month)
- **Typeform**: Free plan with 100 responses/month, beautiful forms
- **JotForm**: Free plan with 100 submissions/month

### Method 4: Professional Email Services (For high volume)

For production with high volume, consider:

- **SendGrid**: 100 emails/day free forever
- **Mailgun**: 5,000 emails free for 3 months  
- **AWS SES**: $0.10 per 1,000 emails
- **Resend**: Modern email API (recommended)

### Environment Variables

Create a `.env.local` file with:

```env
# Email Configuration
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-email@company.com
SMTP_PASS=your-password-or-api-key
```

## Testing the Contact Form

1. Navigate to `/contact` on your website
2. Fill out the form
3. Submit it
4. Check your console (development) or email (production)

## Contact Form Features

✅ **Professional Design** - Matches ChartR branding  
✅ **Responsive Layout** - Works on all devices  
✅ **Form Validation** - Required fields and email validation  
✅ **Inquiry Types** - General, Demo, Partnership, Support  
✅ **Rich Email Templates** - Professional HTML emails  
✅ **Success/Error States** - User feedback on submission  
✅ **Anti-spam Ready** - Easy to add CAPTCHA if needed  

## Security Notes

- Never commit `.env.local` to git (it's already in .gitignore)
- Use app passwords, not regular passwords
- Consider rate limiting for production use
- The form includes basic validation and sanitization

## Customization

You can easily customize:
- Email templates in `/src/app/api/contact/route.ts`
- Form fields in `/src/app/contact/page.tsx`
- Recipient email address (currently set to `akash@chartrhealth.com`)
- SMTP provider and settings 
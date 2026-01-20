# Formspree Setup Guide

## What is Formspree?

Formspree is a free service that receives form submissions from your website and emails them to you. No backend server needed!

**Features:**
- ✅ Free tier (50 submissions/month)
- ✅ Automatic email notifications
- ✅ Dashboard to view submissions
- ✅ SPAM protection included
- ✅ Works with static sites

---

## Setup Instructions

### Step 1: Create a Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Click **"Sign Up"** (top right)
3. Enter your email and create a password
4. Click the verification link in your email

### Step 2: Create Form IDs

#### For Apply/Assessment Form:
1. In your Formspree dashboard, click **"New Form"**
2. Name it: `Eligibility Assessment`
3. Enter your email: `info@easyroutetravels.com`
4. Click **"Create"**
5. Copy the form ID (looks like: `f/abc123def456`)

#### For Contact Form:
1. Click **"New Form"** again
2. Name it: `Contact Form`
3. Enter your email: `info@easyroutetravels.com`
4. Click **"Create"**
5. Copy this form ID too

### Step 3: Update Your Website

**In your project, replace the placeholder form IDs:**

#### File: `src/app/apply/page.tsx`
Find line with:
```
https://formspree.io/f/xyzgvqpd
```

Replace `xyzgvqpd` with your actual Apply form ID

**Example:**
```
https://formspree.io/f/myzpnvwk
```

#### File: `src/app/contact/page.tsx`
Find the form with:
```
https://formspree.io/f/xyzgvqpd
```

Replace with your Contact form ID

### Step 4: Test It Out

1. Go to your website's Apply page
2. Fill out the form
3. Click Submit
4. Check your email inbox
5. You should receive the submission!

---

## Email Customization

### Customize What Emails You Receive

1. Go to your Formspree Dashboard
2. Click on your form
3. Click **"Settings"**
4. Customize:
   - **Reply To:** Make sure it's your email
   - **Next Page:** URL to redirect after submission
   - **File Storage:** Enable to get submissions as files

### Auto-Reply to Visitors

1. In form Settings, enable **"Auto-response"**
2. Write a message like:

```
Hi {name},

Thank you for your eligibility assessment submission!

We've received your information and will review it within 2-3 business days. You'll hear from us soon at this email address.

Best regards,
Easy Route Travels Team
```

---

## Form Field Mapping

### Apply Form Fields Being Sent:
- `fullName` → Full Name
- `email` → Email Address
- `phone` → Phone / WhatsApp
- `citizenship` → Country of Citizenship
- `qualification` → Highest Qualification
- `levelOfStudy` → Intended Level of Study
- `country` → Preferred Country
- `budget` → Budget Range
- `intake` → Intended Intake
- `englishTest` → English Language Test
- `consent` → Data Processing Consent

### Contact Form Fields Being Sent:
- `name` → Your Name
- `email` → Email Address
- `subject` → Subject
- `message` → Message

---

## Formspree Pricing

| Plan | Price | Submissions | Features |
|------|-------|-------------|----------|
| **Gold** | Free | 50/month | Basic form handling |
| **Platinum** | $25/month | Unlimited | File uploads, webhooks |
| **Business** | Custom | Unlimited | Advanced features |

**For getting started:** Gold (Free) plan is perfect!

---

## Troubleshooting

### Not Receiving Emails?

1. **Check SPAM folder** - Formspree emails might go there initially
2. **Verify form ID** - Make sure you copied it correctly
3. **Check dashboard** - Log into formspree.io and view your submissions
4. **Mark as trusted** - Add Formspree emails to your contacts

### Form Not Submitting?

1. **Check form ID** - Must be exactly correct
2. **Check internet connection** - Formspree needs to connect
3. **Browser console** - Open DevTools (F12) and check for errors
4. **Try different browser** - Rule out browser issues

### Privacy Concerns?

Formspree is:
- ✅ GDPR compliant
- ✅ Stores data securely
- ✅ Doesn't sell data
- ✅ Uses encryption

Read their privacy policy: [formspree.io/privacy](https://formspree.io/privacy)

---

## Next Steps (Optional Upgrades)

Once you're getting submissions, you might want to:

1. **Add Webhooks** - Automatically send data to your CRM/database
2. **Use Zapier** - Connect to Google Sheets, Slack, etc.
3. **Set up auto-replies** - Welcome email to visitors
4. **Upgrade to Platinum** - If you get more than 50 submissions/month

### Example: Send to Google Sheets

1. Go to [zapier.com](https://zapier.com)
2. Create a "Zap" that connects Formspree to Google Sheets
3. Every submission automatically adds a row to your spreadsheet

---

## File Locations

- **Apply Form:** `src/app/apply/page.tsx`
- **Contact Form:** `src/app/contact/page.tsx`

Both forms are already configured. Just replace the placeholder form IDs with yours!

---

## Questions?

- **Formspree Help:** [formspree.io/help](https://formspree.io/help)
- **Contact:** [formspree.io/contact](https://formspree.io/contact)

---

**Your forms are now live and ready to receive submissions!** 🎉

# Formspree Setup Guide

## Steps to Enable Contact Form

### 1. Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month on free plan)
3. Verify your email address

### 2. Create a New Form
1. Click "New Form" in your dashboard
2. Choose "React" as your integration
3. Set form name (e.g., "Portfolio Contact Form")
4. Copy your form ID (looks like: `xpzgkqyw`)

### 3. Update Your Code
1. Open `src/components/Contact.tsx`
2. Find line with `'https://formspree.io/f/YOUR_FORM_ID'`
3. Replace `YOUR_FORM_ID` with your actual form ID

Example:
```tsx
const response = await fetch('https://formspree.io/f/xpzgkqyw', {
```

### 4. Configure Form Settings (Optional)
In your Formspree dashboard, you can:
- Set up email notifications
- Configure thank you redirects
- Add spam protection
- Set up auto-replies

### 5. Test Your Form
1. Deploy your changes to Vercel
2. Fill out and submit the contact form
3. Check your email for the message
4. Verify in Formspree dashboard

## Benefits of Formspree
- ✅ No backend required
- ✅ Spam protection built-in
- ✅ Email notifications
- ✅ Form analytics
- ✅ Easy setup (5 minutes)

## Alternative: EmailJS
If you prefer EmailJS, we can set that up instead. It allows sending emails directly from the frontend without going through a form service.

## Troubleshooting
- Make sure your form ID is correct
- Check browser console for errors
- Verify your Formspree account is verified
- Test with a simple message first
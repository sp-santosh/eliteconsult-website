# Elite Consultants - Cloudflare Deployment Guide

## Prerequisites

- Cloudflare account
- Custom domain (or you can use Cloudflare's subdomain)
- Git repository (GitHub, GitLab, or Gitea)
- Node.js 18+ installed locally

## Local Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd elitework
npm install
```

### 2. Setup Environment Variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:
- `NEXT_PUBLIC_SITE_URL` - Your domain
- Email service credentials (optional for testing)

### 3. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to test the site.

## Cloudflare Pages Deployment

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push Code to Git**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages**
   - Click **Create a project**
   - Select **Connect to Git**
   - Authorize your Git provider
   - Select the repository

3. **Configure Build Settings**
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Environment variables**:
     - `NEXT_PUBLIC_SITE_URL`: Your domain
     - Any email service credentials

4. **Deploy**
   - Click **Save and Deploy**
   - Wait for deployment to complete

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**

   ```bash
   wrangler login
   ```

3. **Deploy**

   ```bash
   npm run build
   npx wrangler pages deploy .next
   ```

## Domain Configuration

### If Using Custom Domain:

1. **Add Domain to Cloudflare**
   - Go to Cloudflare Dashboard > Domains
   - Click **Add a site**
   - Enter your domain
   - Update nameservers at your domain registrar

2. **Connect Domain to Pages**
   - In Pages project settings
   - Under **Build & Deployments** > **Custom domains**
   - Click **Add custom domain**
   - Enter your domain

3. **SSL/TLS**
   - Cloudflare automatically provides free SSL/TLS
   - Set Page Rule for HTTPS redirect (if needed)

## Email Configuration (For Form Submissions)

### Using Resend (Recommended)

1. **Install Resend**

   ```bash
   npm install resend
   ```

2. **Get API Key**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key

3. **Update Environment Variables**

   ```
   RESEND_API_KEY=your_api_key_here
   ```

4. **Update API Routes**
   - Uncomment Resend code in `app/api/contact/route.ts`
   - Uncomment Resend code in `app/api/booking/route.ts`

### Using Mailgun

1. **Install Mailgun SDK**

   ```bash
   npm install mailgun.js form-data
   ```

2. **Get Credentials**
   - Sign up at [mailgun.com](https://mailgun.com)
   - Get API key and domain

3. **Update Environment Variables**

   ```
   MAILGUN_API_KEY=your_api_key_here
   MAILGUN_DOMAIN=your_domain_here
   ```

## Performance Optimization

### Image Optimization

Images are currently set to unoptimized for Cloudflare compatibility. Replace with Cloudflare Image service if needed.

### Caching

Cloudflare automatically caches static assets. For dynamic content:
- Set cache headers in middleware if needed
- Use Cloudflare Workers for additional optimization

## Monitoring & Analytics

### Cloudflare Analytics

- Dashboard shows request analytics
- Performance metrics
- Security overview

### From Your App

The analytics tracking ID can be added to the layout for additional metrics (Google Analytics, etc.)

## Security Best Practices

1. **Environment Variables**
   - Never commit `.env.local`
   - Set in Cloudflare Pages environment settings

2. **CORS**
   - Update CORS headers in `next.config.ts` if needed

3. **Rate Limiting**
   - Use Cloudflare's built-in rate limiting
   - Set up Firewall rules in dashboard

## Troubleshooting

### Build Failures

- Check Node version: `node --version` (should be 18+)
- Clear cache: `npm run clean` (if script exists) or `rm -rf .next`
- Check environment variables in Cloudflare Pages settings

### 404 Errors

- Ensure `output: "auto"` in next.config.ts
- Check that all files are committed to git

### Form Submissions Not Working

- Check email service credentials
- Test endpoint: `curl http://localhost:3000/api/contact`
- Check Cloudflare logs for errors

## Updating the Site

1. **Make Changes Locally**

   ```bash
   npm run dev  # Test locally
   ```

2. **Commit and Push**

   ```bash
   git add .
   git commit -m "Updated [feature]"
   git push origin main
   ```

3. **Cloudflare Deploys Automatically**
   - No additional action needed
   - Monitor deployment in Pages dashboard

## Support & Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Resend Email API](https://resend.com/docs)
- [Mailgun Email Service](https://documentation.mailgun.com/)

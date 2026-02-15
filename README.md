# Elite Consultants Website

A modern, professional Next.js website for Elite Consultants pvt ltd - a tax, audit, and compliance services company based in Nepal.

## 🚀 Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Blue & Green color scheme with professional styling
- **Service Showcase**: Display of all services with detailed features
- **Contact Forms**: Client contact form and service booking system
- **Testimonials**: Client success stories and reviews
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Fast Performance**: Built with Next.js 16 and optimized for production
- **Cloudflare Ready**: Configured for seamless Cloudflare Pages deployment

## 📁 Project Structure

```
elitework/
├── app/
│   ├── layout.tsx              # Root layout with Navbar and Footer
│   ├── page.tsx               # Home page
│   ├── about/page.tsx         # About Us page
│   ├── services/page.tsx      # Services page
│   ├── contact/page.tsx       # Contact page
│   ├── api/
│   │   ├── contact/route.ts   # Contact form API
│   │   └── booking/route.ts   # Booking API
│   ├── robots.ts              # Robots.txt
│   ├── sitemap.ts             # Sitemap configuration
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.tsx             # Navigation component
│   ├── Footer.tsx             # Footer component
│   ├── Hero.tsx               # Hero section
│   ├── Services.tsx           # Services display
│   ├── Testimonials.tsx       # Testimonials section
│   ├── ContactForm.tsx        # Contact form
│   └── ServiceBooking.tsx     # Booking form
├── lib/
│   ├── constants.ts           # Company info, colors, and data
│   └── utils.ts              # Utility functions
├── public/
│   └── logo.svg              # Company logo
├── DEPLOYMENT.md             # Deployment guide
├── .env.example             # Environment variables template
└── package.json             # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Cloudflare Pages

## 📝 Pages

### Home Page (`/`)
- Hero section with company tagline and CTA buttons
- Services overview
- Client testimonials
- Call-to-action for consultations

### About Us (`/about`)
- Company story and history
- Mission, vision, and values
- Team member profiles
- Company statistics

### Services (`/services`)
- Detailed service descriptions:
  - Tax Filing
  - Audit Reports
  - Tax Clearance Certificates
- Our process (4-step methodology)
- Request quote buttons

### Contact (`/contact`)
- Company contact information
- Contact form (name, email, phone, subject, message)
- Service booking form with date picker
- Business hours and social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd elitework

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Production Build

```bash
npm run build
npm start
```

## 📧 Form Submission

Currently, form submissions are logged to the console. To enable email notifications, follow the setup guide in `DEPLOYMENT.md` for integrating:
- Resend (recommended)
- Mailgun
- SendGrid

## 🌍 Deployment

### Cloudflare Pages (Recommended)

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to Pages → Create Project
   - Connect your git repository
   - Build settings:
     - Framework: Next.js
     - Build command: `npm run build`
     - Build output: `.next`

3. **Configure Domain**
   - Add your custom domain in Pages settings
   - Cloudflare automatically provides free SSL/TLS

For detailed deployment instructions, see `DEPLOYMENT.md`.

## 🎨 Customization

### Colors
Edit `lib/constants.ts` to change the color scheme:
```typescript
export const COLORS = {
  primary: '#0055CC',    // Deep Blue
  secondary: '#00AA44',  // Vibrant Green
  // ... other colors
};
```

### Company Information
Update `lib/constants.ts`:
```typescript
export const COMPANY = {
  name: 'Elite Consultants',
  email: 'info@eliteconsult.work',
  phone: '+977-9851234567',
  location: 'Itahari 02, Sunsari, Nepal',
};
```

### Services
Add or modify services in `lib/constants.ts` `SERVICES` array.

### Testimonials
Update testimonials in `lib/constants.ts` `TESTIMONIALS` array.

## 📊 SEO

- Meta tags configured for all pages
- Sitemap automatically generated
- Robots.txt for search engine crawling
- Structured data ready for local business schema

## 🔒 Security

- Content Security Headers configured
- XSS protection enabled
- Clickjacking protection
- Secure HTTP headers

## 📞 Support

For issues or questions:
1. Check the DEPLOYMENT.md file
2. Review the source code comments
3. Check Next.js documentation: https://nextjs.org/docs

## 📄 License

All rights reserved © 2025 Elite Consultants pvt ltd

---

**Built with ❤️ using Next.js and Tailwind CSS**

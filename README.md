# Lynx Security Website

A premium, high-performance multi-page static website for Lynx Security — an elite offensive security firm specializing in penetration testing, red team operations, and adversary simulation.

**Live Site:** https://lynx-security.study

## Features

### Design
- **Dark mode first** aesthetic with controlled red accents
- **Premium, technical feel** suitable for enterprise clients
- **Responsive design** optimized for all devices
- **Subtle animations** including grid background, scroll reveals, and hover effects
- **Terminal-inspired elements** without being cheesy

### Performance
- **90+ Lighthouse score** target
- Minimal JavaScript (~2KB gzipped)
- CSS variables for efficient theming
- SVG icons (no icon library bloat)
- IntersectionObserver for performant scroll animations

### SEO
- Semantic HTML5 structure
- Complete meta tags and OpenGraph
- Schema.org Organization markup
- Canonical URLs
- Accessible contrast ratios

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Reduced motion support

## File Structure

```
lynx-security.github.io/
├── index.html                    # Homepage
├── css/
│   └── style.css                 # Shared stylesheet
├── js/
│   └── main.js                   # Shared JavaScript
├── pages/
│   ├── services.html             # Services overview
│   ├── web-pentesting.html       # Web pentesting service
│   ├── network-pentesting.html   # Network pentesting service
│   ├── red-teaming.html          # Red teaming service
│   ├── adversary-simulation.html # Adversary simulation service
│   ├── tools.html                # Tools showcase
│   ├── academy.html              # Academy page
│   ├── about.html                # About page
│   └── contact.html              # Contact page
├── README.md                     # This file
└── assets/                       # Create this folder for images
    └── og-image.jpg              # OpenGraph image (recommended: 1200x630)
```

## Deployment

### GitHub Pages (Recommended)

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Select **Deploy from a branch**
4. Choose **main** branch and **/(root)** folder
5. Save and wait for deployment (~2 minutes)
6. Your site will be live at `https://yourusername.github.io/lynx-security.github.io/`

### Custom Domain (lynx-security.study)

1. In your repository, create a file named `CNAME`
2. Add your domain: `lynx-security.study`
3. Configure DNS with your domain provider:
   - **A Records:** Point to GitHub Pages IPs
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME:** `www` → `yourusername.github.io`
4. Enable HTTPS in GitHub Pages settings

## Conversion Rate Optimization Suggestions

### Immediate Improvements

1. **Add Client Logos / Social Proof**
   - Create a "Trusted By" section with client logos (with permission)
   - Add testimonials from security leaders
   - Include case study snippets with metrics

2. **Lead Capture Forms**
   - Replace email-only with a consultation request form
   - Fields: Name, Email, Company, Assessment Type, Timeline
   - Use Formspree, Netlify Forms, or Google Forms (no backend needed)

3. **Calendly Integration**
   - Add "Book a Call" secondary CTA
   - Direct link to scheduling for faster conversion

4. **Live Chat Widget**
   - Crisp, Intercom, or Tawk.to for immediate engagement
   - Set office hours to manage expectations

5. **Trust Signals**
   - Add certifications (OSCP, GWAPT, etc.)
   - CVE/CVE-Search disclosure count
   - Conference speaking history
   - Open source contribution stats

### Content Enhancements

1. **Case Studies Page**
   - Before/After metrics
   - Technical depth without revealing exploits
   - Client anonymized testimonials

2. **Team Page**
   - Operator profiles with credentials
   - LinkedIn links for credibility
   - "Meet Your Assessors" - humanize the firm

3. **Blog/Research Section**
   - Latest vulnerability research
   - Tool releases
   - Academy updates
   - Positions firm as thought leaders

4. **Pricing Transparency**
   - At minimum, a "Starting at" range
   - Package tiers: Essential, Advanced, Enterprise
   - Reduces friction for budget-conscious prospects

### Technical Trust Signals

1. **Security Headers**
   Add `_headers` file for Netlify or configure in nginx:
   ```
   X-Frame-Options: DENY
   X-Content-Type-Options: nosniff
   Referrer-Policy: strict-origin-when-cross-origin
   Content-Security-Policy: default-src 'self'
   ```

2. **Privacy Policy & Terms**
   - Required for enterprise procurement
   - Can be simple but must exist

3. **GitHub Activity Widget**
   - Show recent commits/contributions
   - Demonstrates active development

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-accent: #dc2626;        /* Primary red */
    --color-accent-light: #ef4444;  /* Hover state */
    --color-bg-primary: #050505;    /* Background */
}
```

### Content
All content is in `index.html`. Key sections:
- **Hero** (lines ~103-151)
- **Services** (lines ~154-266)
- **Tools** (lines ~269-339)
- **Academy** (lines ~342-407)
- **Why Choose** (lines ~410-456)
- **About** (lines ~459-519)
- **Contact** (lines ~522-555)

### Adding Pages
For multi-page setup:
1. Duplicate `index.html` as template
2. Remove sections not needed
3. Update navigation links
4. Add to `nav-menu` in header

## Performance Monitoring

Run Lighthouse audit in Chrome DevTools:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select all categories
4. Click Analyze page load

Target scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Android (88+)

## License

© 2026 Lynx Security. All rights reserved.

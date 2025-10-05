# Project Requirements Document: rafiulm.com

## 1. Project Overview

rafiulm.com will be a personal portfolio and blog site for Rafi Ul Minhaj. It’s designed to give Rafi a clean, modern online presence where he can showcase his skills, past projects, articles, and share updates with potential clients or employers. Visitors should immediately understand who Rafi is, what he does, and how to get in touch—all within a few scrolls.

The key objective is to build a fast, responsive, and SEO-friendly site that’s easy for Rafi to update without touching code. Success will be measured by page-load performance (under 2 seconds on mobile), basic SEO rankings for chosen keywords (e.g., “Rafi Ul Minhaj developer”), and seamless content management by Rafi himself.

## 2. In-Scope vs. Out-of-Scope

In-Scope (Version 1.0)
- Static pages: Home, About, Projects, Blog, Contact
- Blog powered by a headless CMS (e.g., Contentful or Sanity) with support for Markdown, images, and tags
- Responsive design for desktop, tablet, and mobile
- Contact form with email delivery (via a service like SendGrid)
- SEO basics: meta tags, Open Graph tags, sitemap.xml, robots.txt
- Performance optimizations: image lazy-loading, code splitting, caching
- Google Analytics (or equivalent) setup for traffic tracking
- Dark/light mode toggle

Out-of-Scope (Phase 2+)
- E-commerce or paid services
- User authentication or membership areas
- Multi-language support
- Real-time chat or comments on blog posts
- Extensive third-party integrations beyond analytics and email

## 3. User Flow

A visitor lands on rafiulm.com and is greeted by a hero section with Rafi’s photo, tagline, and primary navigation (Home, About, Projects, Blog, Contact). Scrolling down reveals a brief introduction with a CTA button (“View Projects”). As they explore the Projects page, they see cards for each project; clicking a card opens a detail page with screenshots, descriptions, and links to live demos or GitHub repositories. 

If the visitor switches to the Blog section, they can browse post previews sorted by date or tag. Clicking a post leads to the full article page with social share buttons. Finally, the Contact page presents a simple form (Name, Email, Message) and links to social profiles. Upon form submission, the visitor sees a success message and Rafi receives an email notification.

## 4. Core Features

- **Responsive Navigation**: Sticky header with menu items and dark/light mode toggle
- **Hero & Home Section**: Photo, tagline, brief intro, call-to-action button
- **About Page**: Bio, skills list (with progress bars or icons), downloadable resume link
- **Projects Gallery**: Card grid with project image, title, short description; detail pages per project
- **Blog**: List of posts by date/tag, individual post pages supporting Markdown, images, code blocks
- **Headless CMS Integration**: Admin UI for Rafi to create/edit blog posts and projects without code
- **Contact Form**: Fields: Name, Email, Message; email delivery via SendGrid or similar
- **SEO & Social Meta**: Title tags, descriptions, Open Graph, Twitter cards
- **Analytics**: Google Analytics (or Plausible) integration for pageviews and events
- **Performance**: Image optimization, code splitting, static site generation or incremental static regeneration

## 5. Tech Stack & Tools

- Frontend Framework: **Next.js** (React-based) for static generation + server-side rendering
- Styling: **Tailwind CSS** for utility-based, responsive design
- CMS: **Contentful** or **Sanity** for headless content management
- Deployment: **Vercel** for seamless Next.js hosting and global CDN
- Email Service: **SendGrid** or **Mailgun** for contact form delivery
- Analytics: **Google Analytics** or **Plausible** for traffic insights
- IDE & Plugins: VS Code with ESLint, Prettier, Tailwind CSS IntelliSense
- Version Control: **GitHub** repository with GitHub Actions for CI/CD (linting, tests)

## 6. Non-Functional Requirements

- **Performance**: First Contentful Paint <1s, Largest Contentful Paint <2s on mobile
- **Accessibility**: WCAG 2.1 AA compliance (alt text, keyboard navigation, color contrast)
- **Security**: Sanitize form inputs, secure CMS API keys via environment variables, enforce HTTPS
- **Reliability**: 99.9% uptime via Vercel’s global CDN
- **SEO**: Generate sitemap.xml, robots.txt, use semantic HTML tags
- **Usability**: Intuitive navigation, clear CTAs, mobile-first design

## 7. Constraints & Assumptions

- DNS and hosting will be managed in Vercel; domain (rafiulm.com) is already purchased
- Rafi will maintain CMS content directly; no developer needed for day-to-day text updates
- No heavy backend logic or databases beyond headless CMS; mostly a static site
- Assumes a budget for paid CMS plan if Contentful free tier limits are reached
- Email service account set up with valid send-from address

## 8. Known Issues & Potential Pitfalls

- **CMS Rate Limits**: Free tiers often limit API calls; mitigate with caching or incremental builds
- **Email Deliverability**: Contact form emails may land in spam; set up proper SPF/DKIM records
- **Image Loading**: Large images can slow page loads; enforce max dimensions and use next/image optimization
- **SEO Oversights**: Forgot meta tags or dynamic titles; include automated checks in CI pipeline
- **Accessibility Gaps**: Color combinations or missing ARIA labels; include axe or Lighthouse audits in CI


---

This document serves as the single source of truth for rafiulm.com’s first version. All subsequent technical docs—file structures, frontend guidelines, backend APIs—should reference these points to ensure consistency and avoid ambiguity.
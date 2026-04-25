# Accredian Enterprise — Next.js Clone

A creative, interactive clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Live Demo
> Deploy to Vercel (instructions below)

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/accredian-enterprise.git
cd accredian-enterprise
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds ✅

---

## 🏗️ Approach Taken

### Architecture
- **Next.js 14 App Router** — modern file-based routing with Server Components
- **Tailwind CSS** — utility-first styling with custom tokens (brand colors, fonts)
- **TypeScript** — full type safety across all components and API routes

### Component Structure
```
app/
  page.tsx              ← Main landing page (composes all sections)
  layout.tsx            ← Root layout with metadata & fonts
  globals.css           ← Global styles, animations, CSS variables
  api/
    leads/route.ts      ← POST/GET API for lead capture (bonus feature)
components/
  Navbar.tsx            ← Sticky nav with scroll-aware styling & mobile menu
  Hero.tsx              ← Full-screen hero with animated counters & partner badges
  Solutions.tsx         ← 6-card solutions grid
  Features.tsx          ← Tab-based interactive feature explorer
  HowItWorks.tsx        ← 4-step process with connected timeline
  Programs.tsx          ← Filterable program catalog (by category)
  Partners.tsx          ← University & company partner showcase
  Testimonials.tsx      ← Auto-rotating testimonial carousel
  LeadForm.tsx          ← Full lead capture form with API integration
  Footer.tsx            ← Multi-column footer with social links
```

### Design Philosophy
- **Color**: Deep navy/blue primary with amber/gold accents — professional and energetic
- **Typography**: Sora (display) + DM Sans (body) — distinctive, modern, readable
- **Animations**: scroll-triggered fade-up reveals, counter animations, hover micro-interactions
- **Responsive**: Mobile-first, tested at 375px → 1440px breakpoints

---

## 🤖 AI Usage (Claude by Anthropic)

This project was built with AI assistance throughout the development process.

### Where AI Helped

| Area | What AI Did |
|------|-------------|
| **Component scaffolding** | Generated initial structure for all 9 components based on reference site analysis |
| **Tailwind styling** | Suggested utility class combinations for the gradient hero, card layouts, and responsive grids |
| **Animation system** | Created the `IntersectionObserver`-based scroll animation pattern used across all sections |
| **API route** | Generated the Next.js Route Handler with TypeScript types for lead capture |
| **Content** | Drafted feature descriptions, testimonials, and program data based on the real Accredian site |
| **Counter animation** | Wrote the `setInterval`-based number counting effect in the Hero |

### What I Modified / Improved Manually

| Area | Manual Improvement |
|------|--------------------|
| **Design direction** | Chose Sora + DM Sans font pairing and the navy/amber color palette (AI suggested generic choices) |
| **Tab feature component** | Redesigned the layout to include a live dashboard preview panel (not in AI's initial output) |
| **Program filtering** | Added client-side category filtering with smooth state transitions |
| **Mobile navigation** | Refined hamburger animation and dropdown behavior for smoother UX |
| **Form validation** | Added error states, loading feedback, and success messaging to the lead form |
| **Testimonial carousel** | Added auto-rotation with a 5-second interval and manual dot navigation |
| **Scroll animations** | Tuned `transitionDelay` staggering values per card for natural cascade effect |
| **Hero counters** | Adjusted easing and duration for each stat to feel realistic, not mechanical |

---

## ✨ Features Implemented

- ✅ Fully responsive (mobile + desktop)
- ✅ Animated hero with live stat counters
- ✅ Interactive tab-based feature explorer
- ✅ Filterable program catalog (8 programs, 5 categories)
- ✅ Auto-rotating testimonial carousel
- ✅ Scroll-triggered animations throughout
- ✅ Sticky navbar with scroll-aware color change
- ✅ Mobile hamburger menu
- ✅ **BONUS**: Lead capture form with Next.js API route (`/api/leads`)
- ✅ **BONUS**: In-memory lead store with GET endpoint for admin access

---

## 🔮 Improvements With More Time

1. **Database integration** — Replace in-memory lead store with PostgreSQL via Prisma or Supabase
2. **Email notifications** — Send confirmation email to lead + Slack webhook to sales team via Resend/Nodemailer
3. **Admin dashboard** — Protected `/admin` page to view and export all captured leads
4. **Animation polish** — Add Framer Motion for page transitions and more complex micro-interactions
5. **Search functionality** — Full-text search across the 200+ program catalog
6. **Dark mode** — System-preference-aware dark theme toggle
7. **i18n** — Multi-language support for regional enterprise clients
8. **Analytics** — Integrate PostHog or Mixpanel for conversion tracking on the lead form
9. **A/B testing** — Test CTA button copy and hero messaging variants
10. **Unit tests** — Jest + Testing Library coverage for form validation and API route

---

## 📁 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.x | Utility-first styling |
| Google Fonts | — | Sora + DM Sans typefaces |

---

## 📄 License
MIT — Built for educational/assessment purposes.

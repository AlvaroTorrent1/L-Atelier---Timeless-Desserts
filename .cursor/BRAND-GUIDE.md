# Elske Lena - Brand & Development Guide

> **Project Bible** - The definitive reference document for the Elske Lena portfolio website.

---

## 1. Project Overview

**Elske Lena** is a premium interior design studio based in Amsterdam, Netherlands, with presence in Spain. This website serves as their digital portfolio, showcasing bespoke creative work with an emphasis on timeless quality and understated elegance.

### Core Values
- **Quality over Quantity** - Fewer projects, more attention
- **Timeless over Trendy** - Classic principles, not fleeting trends  
- **Partnership over Transaction** - Collaborative relationships

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | **Astro** | 5.x | Static site generation, zero JS by default |
| Language | **TypeScript** | Strict | Type safety |
| Styling | **Tailwind CSS** | 4.x | Utility-first CSS |
| Images | **Sharp** | Latest | WebP/AVIF conversion, optimization |
| Build | **Vite** | Bundled | Fast builds, LightningCSS minification |
| Hosting | **Vercel** | - | Edge CDN, auto-deploy |

### Why This Stack?
- **Performance**: Static HTML = instant loads, perfect Lighthouse scores
- **SEO**: Server-rendered, semantic HTML
- **Maintainability**: Content Collections for easy updates
- **Cost**: Free Vercel tier, no backend required

---

## 3. Brand Color Palette

```
┌─────────────────────────────────────────────────────────────┐
│                     PRIMARY PALETTE                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ████████  #2c2a26   Primary (Text, Dark Elements)          │
│                                                              │
│  ████████  #988051   Accent (Brand Gold - Buttons, Links)   │
│                                                              │
│  ████████  #b29811   Accent Light (Highlights)              │
│                                                              │
│  ████████  #f8ab7f   Accent Warm (Hover States)             │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                     BACKGROUND PALETTE                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ████████  #f5f2eb   Background (Warm Beige - Main)         │
│                                                              │
│  ████████  #e3d8c8   Secondary (Section Backgrounds)        │
│                                                              │
│  ████████  #ffffff   White (Contrast Sections)              │
│                                                              │
│  ████████  #7a7568   Muted (Secondary Text)                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Color Usage Rules

| Element | Color | CSS Class |
|---------|-------|-----------|
| Primary buttons | Accent gold on white | `bg-accent text-white` |
| Secondary buttons | Accent outline | `border-accent text-accent` |
| Text links | Accent with warm hover | `text-accent hover:text-accent-warm` |
| CTA sections | Secondary beige | `bg-secondary` |
| Content sections | White | `bg-white` |
| Footer | Secondary beige | `bg-secondary` |

---

## 4. Typography

### Font Stack

| Font | Weight | Usage | Fallback |
|------|--------|-------|----------|
| **Rigot** | 400 | H1, branding, display | Cormorant Garamond |
| **Cormorant Garamond** | 400, 500, 600 | H2-H6, serif text | Georgia |
| **Inter** | 300, 400, 500 | Body text, UI | system-ui |

### Type Scale

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }  /* Rigot */
h2 { font-size: clamp(2rem, 4vw, 3rem); }    /* Cormorant Garamond */
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }  /* Cormorant Garamond */
body { font-size: 1rem; line-height: 1.6; }  /* Inter */
```

### CSS Custom Properties

```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-serif: 'Cormorant Garamond', Georgia, serif;
--font-display: 'Rigot', 'Cormorant Garamond', Georgia, serif;
```

---

## 5. Project Structure

```
elske-lena/
├── .cursor/
│   ├── rules/
│   │   └── project-context.mdc    # Cursor AI context
│   └── BRAND-GUIDE.md             # This document
├── public/
│   ├── logo.svg                   # Header logo
│   ├── logo-footer.svg            # Footer logo + tagline
│   ├── favicon.svg
│   └── fonts/
│       ├── Rigot-Regular.woff2
│       └── Rigot-Regular.woff
├── src/
│   ├── assets/images/             # Images (optimized by Astro)
│   │   ├── hero.png
│   │   ├── paint-cans.png
│   │   ├── quote-bg.png
│   │   ├── materials-elitis.jpg
│   │   ├── materials-farrow.jpg
│   │   └── project-*.svg
│   ├── components/
│   │   ├── Header.astro           # Navigation + mobile menu
│   │   ├── Footer.astro           # Links, social, contact
│   │   ├── FadeIn.astro           # Scroll animation wrapper
│   │   ├── ParallaxImage.astro    # Parallax effect images
│   │   └── ProjectCard.astro      # Project grid cards
│   ├── content/
│   │   └── projects/              # Markdown content
│   │       ├── serene-escape.md
│   │       ├── urban-sanctuary.md
│   │       └── coastal-retreat.md
│   ├── layouts/
│   │   └── Base.astro             # SEO, fonts, meta tags
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── about.astro            # About page
│   │   ├── contact.astro          # Contact form
│   │   └── projects/
│   │       ├── index.astro        # Projects grid
│   │       └── [slug].astro       # Dynamic project pages
│   └── styles/
│       └── global.css             # Theme, fonts, utilities
├── astro.config.mjs               # Astro configuration
├── package.json
├── vercel.json                    # Vercel headers/caching
└── README.md
```

---

## 6. Page Structure

### Homepage Flow

```
┌─────────────────────────────────────────┐
│  HEADER (transparent on hero)           │
├─────────────────────────────────────────┤
│                                         │
│  HERO SECTION                           │
│  - Parallax background image            │
│  - "bespoke creative studio"            │
│  - Two CTA buttons (gold)               │
│  - Scroll indicator                     │
│                                         │
├─────────────────────────────────────────┤
│  ABOUT TEASER (bg-white)                │
│  - Two column: text + image             │
│  - "crafting spaces that spark..."      │
│                                         │
├─────────────────────────────────────────┤
│  QUOTE SECTION                          │
│  - Full-width background image          │
│  - Image contains text (no overlay)     │
│                                         │
├─────────────────────────────────────────┤
│  FEATURED PROJECTS (bg-background)      │
│  - 3-column grid                        │
│  - Hover zoom effect                    │
│                                         │
├─────────────────────────────────────────┤
│  CURATED MATERIALS (bg-white)           │
│  - 2-column: Élitis + Farrow & Ball     │
│  - Hover reveals brand name             │
│                                         │
├─────────────────────────────────────────┤
│  CTA SECTION (bg-secondary)             │
│  - "ready to start your journey?"       │
│  - Gold button                          │
│                                         │
├─────────────────────────────────────────┤
│  FOOTER (bg-secondary)                  │
│  - Logo with tagline                    │
│  - Navigation, social, contact          │
│                                         │
└─────────────────────────────────────────┘
```

---

## 7. Contact Information

### Official Channels

| Channel | Value |
|---------|-------|
| **Email** | elskelena@icloud.com |
| **Phone (Spain)** | +34 680 607 675 |
| **Phone (Netherlands)** | +31 37 470 1840 |
| **Instagram** | [@elskelena](https://www.instagram.com/elskelena/) |
| **LinkedIn** | [Elske Lena Stierman](https://www.linkedin.com/in/elske-lena-stierman-ab2372119/) |
| **Pinterest** | [elskelena](https://nl.pinterest.com/elskelena/) |

---

## 8. Development Commands

```bash
# Development
npm run dev           # Start dev server at localhost:4321

# Production
npm run build         # Build for production
npm run preview       # Preview production build locally

# Quality
npm run typecheck     # Run TypeScript validation
```

---

## 9. Deployment

### Repository
- **GitHub**: https://github.com/AlvaroTorrent1/Elske-Lena.git
- **Branch**: `main`
- **Auto-deploy**: Enabled via Vercel

### Vercel Configuration
- Optimized caching headers for static assets
- Security headers (X-Content-Type-Options, X-Frame-Options)
- Immutable cache for `/_astro/` and `/fonts/`

---

## 10. Animation Guidelines

### Fade-In on Scroll
- Uses Intersection Observer
- Default: 20px translateY + opacity fade
- Duration: 0.6s ease-out
- Respects `prefers-reduced-motion`

### Parallax
- Subtle effect (speed: 0.2)
- Only on hero images
- Disabled for reduced motion preference

### Hover Effects
- Image zoom: `scale-105` over 700ms
- Links: opacity or color transition over 200ms
- Buttons: background opacity to 90%

---

## 11. Logo Files

| File | Location | Usage |
|------|----------|-------|
| `logo.svg` | `/public/logo.svg` | Header navigation |
| `logo-footer.svg` | `/public/logo-footer.svg` | Footer (includes tagline) |
| `1.svg` | `/public/1.svg` | Original footer source |
| `2.svg` | `/public/2.svg` | Original header source |

**Note**: Logo SVGs use `#988051` (accent gold) fill color.

---

## 12. Content Management

Projects are managed via Astro Content Collections:

```typescript
// src/content.config.ts
const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    location: z.string(),
    year: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    coverImage: image(),
    galleryImages: z.array(image()).optional(),
  }),
});
```

To add a new project:
1. Create `src/content/projects/project-name.md`
2. Add frontmatter with required fields
3. Add images to `src/assets/images/`
4. Build and deploy

---

## 13. Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload hero image, font-display: swap |
| FID | < 100ms | Zero JS by default |
| CLS | < 0.1 | Explicit image dimensions |
| Lighthouse | > 95 | Static HTML, optimized images |

---

*Document created: January 2026*
*Last updated: January 30, 2026*

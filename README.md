# Elske Lena — Portfolio Website

A premium portfolio website built with Astro, TypeScript, and Tailwind CSS. Optimized for performance with subtle animations and image optimization.

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Images**: Astro Assets with Sharp (automatic WebP/AVIF)
- **Hosting**: Vercel (Edge CDN)

## Performance Features

- **Zero JavaScript by default** - Astro ships pure HTML
- **Optimized images** - Automatic format conversion, responsive srcset, lazy loading
- **Critical CSS** - Inline styles for fastest first paint
- **View Transitions** - Native browser API for smooth page transitions
- **Immutable caching** - Static assets cached for 1 year

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

## Project Structure

```
src/
├── assets/images/       # Source images (auto-optimized)
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── FadeIn.astro     # Scroll animation wrapper
│   ├── ParallaxImage.astro
│   └── ProjectCard.astro
├── content/projects/    # Markdown project files
├── layouts/Base.astro   # Base layout with SEO
├── pages/               # Route pages
│   ├── index.astro
│   ├── about.astro
│   ├── contact.astro
│   └── projects/
└── styles/global.css    # Tailwind + custom styles
```

## Adding New Projects

1. Add images to `src/assets/images/`
2. Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Name"
category: "Residential"
location: "Amsterdam, Netherlands"
year: "2024"
description: "Brief project description"
featured: true
comingSoon: false
coverImage: "../../assets/images/your-image.jpg"
order: 4
---

## Project content in Markdown...
```

3. Commit and push — Vercel deploys automatically

## Customization

### Colors

Edit theme colors in `src/styles/global.css`:

```css
@theme {
  --color-primary: #1a1a1a;
  --color-accent: #8b7355;
  /* ... */
}
```

### Fonts

Fonts are loaded from Google Fonts in `src/layouts/Base.astro`. Update the link and CSS variables to change typography.

### Animations

- **FadeIn**: Adjust timing in `src/components/FadeIn.astro`
- **Parallax**: Change speed factor (0.1-0.5) in component usage
- **Hover effects**: Edit Tailwind classes on project cards

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

The `vercel.json` file includes optimized caching headers.

### Other Platforms

```bash
npm run build
```

Upload the `dist/` folder to any static host (Netlify, Cloudflare Pages, etc.)

## Performance Targets

- Lighthouse Performance: 100
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100

## License

Private project. All rights reserved.

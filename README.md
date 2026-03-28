# Horizon Stories

An immersive, scroll-triggered cinematic storytelling experience built with Next.js, Framer Motion, and GSAP.

## Features

- **Cinematic Scroll Animations** - Parallax effects and scroll-triggered reveals powered by Framer Motion
- **Luxury Dark Theme** - Deep blacks, gold accents, and premium typography
- **Smooth Scrolling** - Lenis integration for buttery-smooth momentum scrolling
- **Responsive Design** - Optimized for all devices with cinematic letterbox effects
- **GSAP Animations** - Professional-grade animation library for complex sequences

## Tech Stack

- **Next.js 14** - App Router, React Server Components
- **Framer Motion** - Scroll-triggered animations, parallax effects
- **GSAP** - High-performance animations
- **Lenis** - Smooth scrolling with momentum
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type-safe development

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
horizon-stories/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page with Lenis integration
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Full-screen hero with parallax
│   │   ├── StorySection.tsx    # Chapter-based storytelling
│   │   ├── StatsSection.tsx     # Animated statistics + testimonials
│   │   └── GallerySection.tsx   # Parallax gallery + footer
│   └── ui/
│       └── AnimatedElements.tsx
├── hooks/
│   └── useScrollProgress.ts     # Scroll-based state management
├── lib/
│   └── data.ts                  # Story chapters and content
└── public/                      # Static assets
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--luxury-black` | `#0a0a0a` | Primary background |
| `--luxury-dark` | `#111111` | Section backgrounds |
| `--luxury-gold` | `#d4af37` | Accent color |
| `--luxury-cream` | `#f5f5f0` | Text color |

## Performance

- Lazy loading images with Next.js Image component
- Intersection Observer for viewport-based animations
- Hardware-accelerated transforms
- Optimized animation loops

## License

MIT

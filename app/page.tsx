'use client';

import { useEffect } from 'react';
import { storyChapters } from '@/lib/data';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { StatsSection, TestimonialsSection } from '@/components/sections/StatsSection';
import { ParallaxGallery, Footer } from '@/components/sections/GallerySection';

export default function Home() {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <main className="relative">
      <HeroSection
        title="Horizon Stories"
        subtitle="Where Vision Meets Artistry"
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      />

      {storyChapters.map((chapter, index) => (
        <StorySection key={chapter.id} chapter={chapter} index={index} />
      ))}

      <StatsSection />
      <ParallaxGallery />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

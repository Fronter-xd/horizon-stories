'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollProgressReturn {
  progress: number;
  scrollY: number;
  isInView: boolean;
  ref: React.RefObject<HTMLElement | null>;
}

export function useScrollProgress(
  options: { offset?: number; threshold?: number } = {}
): UseScrollProgressReturn {
  const { offset = 0, threshold = 0 } = options;
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);
      
      const elementStart = scrollTop + elementTop - windowHeight + offset;
      const elementEnd = scrollTop + elementTop + elementHeight - offset;
      const scrollHeight = windowHeight + elementHeight;
      
      const scrollProgress = Math.max(
        0,
        Math.min(1, (scrollY - elementStart) / (elementEnd - elementStart))
      );
      
      setProgress(scrollProgress);
      
      const inView = 
        rect.top < windowHeight * (1 - threshold) &&
        rect.bottom > windowHeight * threshold;
      setIsInView(inView);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset, threshold, scrollY]);

  return { progress, scrollY, isInView, ref };
}

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const windowCenterY = window.innerHeight / 2;
      const distanceFromCenter = centerY - windowCenterY;
      
      setOffset(distanceFromCenter * speed * -1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}

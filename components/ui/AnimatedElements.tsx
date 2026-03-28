'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade' | 'slide' | 'scale';
}

export function AnimatedText({ children, className = '', delay = 0, type = 'fade' }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animations = {
      fade: { opacity: 0 },
      slide: { opacity: 0, y: 60 },
      scale: { opacity: 0, scale: 0.9 },
    };

    gsap.set(ref.current, animations[type]);

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(ref.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          delay,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [delay, type]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className = '', speed = 0.3 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || !ref.current) return;

    const section = ref.current;
    const img = imgRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.fromTo(img, 
      { y: -50 },
      { y: 50, ease: 'none' }
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover"
      />
    </div>
  );
}

interface CinematicRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up';
}

export function CinematicReveal({ children, className = '', direction = 'up' }: CinematicRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 100 },
    };

    gsap.set(ref.current, {
      ...directions[direction],
      opacity: 0,
    });

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        });
      },
      once: true,
    });
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  return (
    <div className={`h-[2px] bg-luxury-charcoal ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light"
        style={{ width: `${progress * 100}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

import { motion } from 'framer-motion';

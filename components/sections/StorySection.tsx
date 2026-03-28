'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { StoryChapter } from '@/lib/data';

interface StorySectionProps {
  chapter: StoryChapter;
  index: number;
}

export function StorySection({ chapter, index }: StorySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-luxury-black" />

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          <motion.div
            style={{ y: imageY, opacity }}
            className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0"
              >
                <Image
                  src={chapter.image}
                  alt={chapter.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent" />
              </motion.div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                style={{ background: `linear-gradient(90deg, ${chapter.color}, transparent)` }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 w-32 h-32 border border-luxury-gold/30 rounded-sm flex items-center justify-center"
            >
              <span className="font-serif text-5xl text-luxury-gold/50">
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: textY, opacity }}
            className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '60px' } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-accent to-transparent mb-8"
            />

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-accent text-sm tracking-widest uppercase mb-4"
            >
              {chapter.subtitle}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            >
              {chapter.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg text-luxury-cream/70 leading-relaxed max-w-lg"
            >
              {chapter.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-luxury-gold/50" />
              <span className="text-luxury-gold/50 text-sm tracking-widest uppercase">
                Explore More
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-transparent to-luxury-black pointer-events-none" />
    </section>
  );
}

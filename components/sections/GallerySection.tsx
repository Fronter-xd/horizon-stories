'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { storyChapters } from '@/lib/data';

export function ParallaxGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-dark to-luxury-black" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            Moments Captured
          </h2>
        </motion.div>

        <div className="relative h-[600px] lg:h-[800px]">
          <motion.div
            style={{ x: x1, rotate }}
            className="absolute top-0 left-0 w-72 h-96 rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src={storyChapters[0].image}
              alt="Gallery 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="absolute top-32 left-1/3 w-64 h-80 rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src={storyChapters[1].image}
              alt="Gallery 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
          </motion.div>

          <motion.div
            style={{ x: x1, rotate: useTransform(rotate, (r) => -r as number) }}
            className="absolute bottom-0 right-0 w-80 h-96 rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src={storyChapters[2].image}
              alt="Gallery 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-luxury-black border-t border-luxury-charcoal">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Horizon Stories</h3>
            <p className="text-luxury-cream/50 text-sm leading-relaxed">
              Crafting cinematic narratives that transcend the ordinary and inspire the extraordinary.
            </p>
          </div>

          <div>
            <h4 className="text-accent text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Our Story', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-luxury-cream/50 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-accent text-sm tracking-widest uppercase mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-luxury-cream/50 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-accent text-sm tracking-widest uppercase mb-4">Contact</h4>
            <p className="text-luxury-cream/50 text-sm mb-2">hello@horizonstories.com</p>
            <p className="text-luxury-cream/50 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="pt-8 border-t border-luxury-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-luxury-cream/30 text-sm">
            © 2024 Horizon Stories. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="w-8 h-[1px] bg-luxury-gold/30" />
            <span className="text-luxury-gold text-sm tracking-widest">CRAFTED WITH PRECISION</span>
            <span className="w-8 h-[1px] bg-luxury-gold/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}

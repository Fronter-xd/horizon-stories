'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { brandStats, testimonials } from '@/lib/data';

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative py-32 bg-luxury-dark">
      <div className="absolute inset-0 bg-gradient-radial-luxury opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm tracking-widest uppercase">
            Our Legacy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            Numbers That Define Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {brandStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative mb-4">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-gradient-gold">
                  {stat.value}
                </span>
                <span className="text-accent text-3xl md:text-4xl">{stat.suffix}</span>
              </div>
              <p className="text-luxury-cream/60 tracking-wide text-sm uppercase">
                {stat.label}
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6 origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="relative py-32 bg-luxury-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-luxury-charcoal/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-accent/5 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-widest uppercase">
            Voices of Trust
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            What Our Partners Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 lg:p-12 bg-luxury-dark/50 border border-luxury-charcoal"
            >
              <svg
                className="absolute top-6 left-6 w-12 h-12 text-accent/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-serif text-xl md:text-2xl text-white leading-relaxed mb-8 relative z-10">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent" />
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-luxury-cream/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

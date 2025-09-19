'use client';

import { motion } from 'framer-motion';

import type { Testimonial } from '@/content/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  locale: string;
}

const copy = {
  pt: {
    eyebrow: 'Comunidade',
    title: 'Resultados compartilhados',
    description: 'Depoimentos reais coletados nos canais oficiais após aplicar os packs e scripts.',
  },
  en: {
    eyebrow: 'Community',
    title: 'Shared results',
    description: 'Real feedback collected on Discord and YouTube after applying the optimizations.',
  },
} as const;

export function TestimonialsSection({ testimonials, locale }: TestimonialsSectionProps) {
  const text = copy[locale as keyof typeof copy] ?? copy.pt;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
            {text.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-lg text-slate-300">{text.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.quote}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/30 p-8 shadow-lg shadow-brand-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl" />
              <p className="relative text-lg text-slate-100">“{testimonial.quote}”</p>
              <footer className="relative mt-6 text-sm text-slate-300">
                <span className="font-semibold text-white">{testimonial.author}</span>
                <span className="block text-xs text-slate-400">{testimonial.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

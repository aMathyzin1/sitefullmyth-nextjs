'use client';

import { ChatCircleDots } from '@phosphor-icons/react/dist/ssr';
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
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-100">
            {text.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-lg text-slate-300">{text.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.quote}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_20px_90px_rgba(15,118,110,0.18)] backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand-500/25 blur-3xl" />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-transparent to-cyan-400/20" />
              </div>
              <div className="relative z-10 space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-100">
                  <ChatCircleDots weight="fill" className="h-6 w-6" aria-hidden />
                </span>
                <p className="text-lg text-slate-100">“{testimonial.quote}”</p>
              </div>
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

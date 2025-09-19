import type { HeroContent } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';

import { ButtonLink } from '@/components/ui/button-link';
import { HeroVisual } from '@/components/ui/hero-visual';

interface HeroSectionProps {
  content: HeroContent;
  locale: string;
}

export function HeroSection({ content, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-grid opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-200">
            {content.eyebrow}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="max-w-xl text-lg text-slate-200 sm:text-xl">{content.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={resolveLinkHref(locale, content.ctaPrimary)}>
              {content.ctaPrimary.label}
            </ButtonLink>
            <ButtonLink href={content.ctaSecondary.href} variant="secondary" target="_blank" rel="noreferrer">
              {content.ctaSecondary.label}
            </ButtonLink>
          </div>
          <ul className="grid gap-4 pt-8 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">★</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

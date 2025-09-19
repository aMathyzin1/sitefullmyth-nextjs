import { Lightning, ShieldCheck, UsersThree } from '@phosphor-icons/react/dist/ssr';

import type { HeroContent } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';

import { ButtonLink } from '@/components/ui/button-link';
import { HeroVisual } from '@/components/ui/hero-visual';

interface HeroSectionProps {
  content: HeroContent;
  locale: string;
}

const highlightIcons = [Lightning, ShieldCheck, UsersThree];

export function HeroSection({ content, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-28 pt-24">
      <div className="absolute inset-0 gradient-grid opacity-40" aria-hidden />
      <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 rounded-[3rem] border border-white/10 bg-slate-950/60 px-6 py-16 shadow-[0_20px_120px_rgba(79,70,229,0.18)] backdrop-blur lg:flex-row lg:items-center lg:px-12">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-brand-100 shadow-inner shadow-white/10">
            {content.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-xl text-lg text-slate-200 sm:text-xl">
              {content.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href={resolveLinkHref(locale, content.ctaPrimary)}>
              {content.ctaPrimary.label}
            </ButtonLink>
            <ButtonLink href={content.ctaSecondary.href} variant="secondary" target="_blank" rel="noreferrer">
              {content.ctaSecondary.label}
            </ButtonLink>
          </div>
          <ul className="grid gap-4 pt-6 sm:grid-cols-2">
            {content.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];

              return (
                <li
                  key={highlight}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-slate-200 shadow-lg shadow-brand-900/20 transition hover:border-brand-300/60 hover:bg-white/[0.08]"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-cyan-400/25" />
                    <div className="absolute -left-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-brand-400/30 blur-2xl" />
                  </div>
                  <div className="relative z-10 flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-500/20 text-brand-50 ring-1 ring-brand-300/40">
                      <Icon weight="fill" className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

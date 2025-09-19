import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

import type { HomeContent } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';

interface SpotlightSectionProps {
  spotlight: HomeContent['spotlight'];
  locale: string;
}

const actionLabel = {
  pt: 'Acessar detalhes',
  en: 'View details',
};

export function SpotlightSection({ spotlight, locale }: SpotlightSectionProps) {
  const label = actionLabel[locale as keyof typeof actionLabel] ?? actionLabel.pt;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-100">
            {spotlight.title}
          </span>
          <p className="mt-4 text-lg text-slate-300">{spotlight.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {spotlight.items.map((item) => (
            <Link
              key={item.title}
              href={resolveLinkHref(locale, { href: item.href })}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-7 shadow-[0_18px_90px_rgba(15,118,110,0.18)] transition hover:border-brand-300/60 hover:shadow-[0_20px_120px_rgba(99,102,241,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-1/2 rounded-b-full bg-gradient-to-b from-brand-500/35 via-transparent to-transparent" />
                <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-sky-400/30 blur-3xl" />
              </div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
                {item.badge}
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-brand-100">
                {label}
                <ArrowRight weight="bold" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

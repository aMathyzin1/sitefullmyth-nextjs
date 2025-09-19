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
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
            {spotlight.title}
          </span>
          <p className="mt-4 text-lg text-slate-300">{spotlight.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {spotlight.items.map((item) => (
            <Link
              key={item.title}
              href={resolveLinkHref(locale, { href: item.href })}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 shadow-lg shadow-brand-500/10 transition hover:border-brand-300/70 hover:shadow-brand-500/30"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-1/2 rounded-b-full bg-gradient-to-b from-brand-500/30 to-transparent" />
              </div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
                {item.badge}
              </div>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-200">
                {label}
                <span aria-hidden className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

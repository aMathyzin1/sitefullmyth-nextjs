import type { ReactNode } from 'react';

import { GraduationCap, RocketLaunch, UsersThree } from '@phosphor-icons/react/dist/ssr';

import type { FeatureHighlight } from '@/content/types';

const iconMap: Record<string, ReactNode> = {
  'fa-rocket': <RocketLaunch weight="fill" className="h-6 w-6" aria-hidden />,
  'fa-users': <UsersThree weight="fill" className="h-6 w-6" aria-hidden />,
  'fa-graduation-cap': <GraduationCap weight="fill" className="h-6 w-6" aria-hidden />,
};

const copy = {
  pt: {
    eyebrow: 'Diferenciais',
    title: 'Tudo que você precisa para render mais',
    description:
      'Experiências pensadas para entregar impacto real: produtos famosos, comunidade vibrante e conteúdo educativo alinhado às suas metas.',
  },
  en: {
    eyebrow: 'Highlights',
    title: 'Everything you need to outperform',
    description:
      'A crafted mix of flagship projects, vibrant community and guided education designed to deliver measurable results for your setup.',
  },
} as const;

interface FeaturesSectionProps {
  features: FeatureHighlight[];
  locale: string;
}

export function FeaturesSection({ features, locale }: FeaturesSectionProps) {
  const text = copy[locale as keyof typeof copy] ?? copy.pt;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-100">
            {text.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {text.title}
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-base text-slate-300">
            {text.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/60 p-8 shadow-[0_18px_80px_rgba(79,70,229,0.18)] transition hover:border-brand-300/60 hover:shadow-[0_20px_120px_rgba(45,212,191,0.25)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 via-transparent to-sky-400/20" />
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-400/30 blur-3xl" />
              </div>
              <div className="relative z-10 space-y-5">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-100 ring-1 ring-brand-300/40">
                  {iconMap[feature.icon] ?? iconMap['fa-rocket']}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
                  Ver resultados
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

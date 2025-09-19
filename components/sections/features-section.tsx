import type { ReactNode } from 'react';

import { GraduationCap, Rocket, Users } from 'lucide-react';

import type { FeatureHighlight } from '@/content/types';

const iconMap: Record<string, ReactNode> = {
  'fa-rocket': <Rocket className="h-5 w-5" />, 
  'fa-users': <Users className="h-5 w-5" />, 
  'fa-graduation-cap': <GraduationCap className="h-5 w-5" />,
};

interface FeaturesSectionProps {
  features: FeatureHighlight[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-300/60 hover:bg-white/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-500/20 blur-3xl transition group-hover:blur-[120px]" />
              <div className="relative z-10 space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-200">
                  {iconMap[feature.icon] ?? iconMap['fa-rocket']}
                </span>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

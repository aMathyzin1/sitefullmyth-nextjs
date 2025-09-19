import type { HomeContent } from '@/content/types';

interface StepsSectionProps {
  steps: HomeContent['steps'];
  locale: string;
}

const copy = {
  pt: {
    eyebrow: 'Roadmap',
    title: 'Como funciona na prática',
    description: 'Trilha pensada para que você descubra, aplique e compartilhe resultados sem ficar perdido.',
  },
  en: {
    eyebrow: 'Roadmap',
    title: 'How everything flows',
    description: 'A curated path to discover, apply and share reliable optimizations with confidence.',
  },
} as const;

export function StepsSection({ steps, locale }: StepsSectionProps) {
  const text = copy[locale as keyof typeof copy] ?? copy.pt;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
            {text.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-lg text-slate-300">{text.description}</p>
        </div>
        <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-white/10 pl-6">
          {steps.map((step, index) => (
            <li key={step.title} className="ml-4">
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/80 text-xs font-semibold text-white">
                {index + 1}
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-brand-500/10">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

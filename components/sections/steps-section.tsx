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
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-100">
            {text.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{text.title}</h2>
          <p className="mt-3 text-lg text-slate-300">{text.description}</p>
        </div>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/60 p-10 shadow-[0_18px_90px_rgba(30,64,175,0.25)]">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-24 left-24 h-44 w-44 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-20 right-16 h-44 w-44 rounded-full bg-brand-500/25 blur-3xl" />
          </div>
          <ol className="relative space-y-10">
            <span className="absolute left-[1.4rem] top-0 h-full w-[2px] bg-gradient-to-b from-brand-400 via-cyan-400/60 to-transparent" aria-hidden />
            {steps.map((step, index) => (
              <li key={step.title} className="group relative pl-16">
                <div className="absolute left-4 top-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-sm font-semibold text-white shadow-lg shadow-brand-500/30">
                  {index + 1}
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-sky-400/20 opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-3">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

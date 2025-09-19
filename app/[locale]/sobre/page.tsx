import { ButtonLink } from '@/components/ui/button-link';
import { buildMetadata } from '@/lib/metadata';
import { getDictionary } from '@/lib/dictionaries';

export function generateMetadata({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);
  return buildMetadata(dictionary.about.seo);
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);
  const about = dictionary.about;

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-16">
      <div className="space-y-6 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
          {dictionary.locale === 'en' ? 'About' : 'Sobre'}
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{about.title}</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-200">{about.intro}</p>
        <p className="mx-auto max-w-3xl text-base text-slate-300">{about.mission}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {about.sections.map((section) => (
          <article key={section.heading} className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-sm text-slate-300">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>

      <section className="space-y-8 rounded-[3rem] border border-white/10 bg-white/5 p-10">
        <h2 className="text-2xl font-semibold text-white">{about.timeline.title}</h2>
        <ol className="grid gap-6 md:grid-cols-2">
          {about.timeline.items.map((item) => (
            <li key={item.year} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">{item.year}</span>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-white">{about.contactCta.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-200">{about.contactCta.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {about.contactCta.actions.map((action) => (
            <ButtonLink key={action.label} href={action.href} variant="secondary" target="_blank" rel="noreferrer">
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </section>
    </div>
  );
}

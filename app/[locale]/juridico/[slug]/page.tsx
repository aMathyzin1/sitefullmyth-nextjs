import { buildMetadata } from '@/lib/metadata';
import { getDictionary, getLegalBySlug, locales } from '@/lib/dictionaries';

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return dictionary.legal.map((page) => ({ locale, slug: page.slug }));
  });
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { legal } = getLegalBySlug(params.locale, params.slug);
  return buildMetadata(legal.seo);
}

export default function LegalPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { legal } = getLegalBySlug(params.locale, params.slug);

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 pb-24 pt-16">
      <header className="space-y-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">{legal.updatedAt}</p>
        <h1 className="text-4xl font-semibold text-white">{legal.title}</h1>
      </header>
      <div className="space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8">
        {legal.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-200">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

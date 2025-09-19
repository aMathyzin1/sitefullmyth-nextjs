import Image from 'next/image';

import { ButtonLink } from '@/components/ui/button-link';
import { buildMetadata } from '@/lib/metadata';
import { getDictionary, getDownloadBySlug, locales } from '@/lib/dictionaries';

const copy = {
  pt: {
    highlights: 'Destaques imediatos',
    requirements: 'Pré-requisitos essenciais',
    faqs: 'Perguntas frequentes',
    notes: 'Notas importantes',
    tutorial: 'Tutorial oficial',
    downloads: 'Links oficiais',
  },
  en: {
    highlights: 'Key highlights',
    requirements: 'Requirements',
    faqs: 'Frequently asked questions',
    notes: 'Important notes',
    tutorial: 'Official walkthrough',
    downloads: 'Official links',
  },
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return dictionary.downloads.items.map((item) => ({ locale, slug: item.slug }));
  });
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { download } = getDownloadBySlug(params.locale, params.slug);
  return buildMetadata(download.seo);
}

export default function DownloadDetailsPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { dictionary, download } = getDownloadBySlug(params.locale, params.slug);
  const text = copy[dictionary.locale as keyof typeof copy] ?? copy.pt;

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 pb-24 pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
            {download.tagline}
          </span>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">{download.name}</h1>
          <p className="text-lg text-slate-200">{download.description}</p>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-100">{text.downloads}</p>
            <div className="flex flex-wrap gap-3">
              {download.downloadLinks.map((link) => (
                <ButtonLink
                  key={link.url}
                  href={link.url}
                  variant={link.type === 'primary' ? 'primary' : 'secondary'}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-brand-500/20">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-900/80">
              <Image
                src={download.coverImage}
                alt={download.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>

      {download.tutorialVideo ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{text.tutorial}</h2>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-lg shadow-brand-500/10">
            <div className="aspect-video w-full">
              <iframe
                src={download.tutorialVideo}
                title={`${download.name} tutorial`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">{text.highlights}</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            {download.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-300" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">{text.requirements}</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            {download.requirements.map((requirement) => (
              <li key={requirement} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-300" />
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">{text.faqs}</h2>
          <ul className="space-y-4 text-sm text-slate-200">
            {download.faqs.map((faq) => (
              <li key={faq.question} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">{faq.question}</p>
                <p className="mt-2 text-slate-300">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
        {download.extraNotes?.length ? (
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{text.notes}</h2>
            <ul className="space-y-3 text-sm text-slate-200">
              {download.extraNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

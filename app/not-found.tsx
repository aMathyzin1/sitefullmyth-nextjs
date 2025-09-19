'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { enContent } from '@/content/en';
import { ptContent } from '@/content/pt';
import { resolveLinkHref } from '@/lib/navigation';

const dictionaries = {
  pt: ptContent,
  en: enContent,
};

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.split('/').filter(Boolean)[0];
  const dictionary = (locale && dictionaries[locale as keyof typeof dictionaries]) || ptContent;
  const content = dictionary.notFound;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">
        404
      </span>
      <h1 className="text-4xl font-semibold text-white">{content.title}</h1>
      <p className="text-lg text-slate-300">{content.description}</p>
      <Link
        href={resolveLinkHref(dictionary.locale, { href: content.ctaHref })}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-brand-500/20 transition hover:bg-slate-200"
      >
        {content.ctaLabel}
      </Link>
    </div>
  );
}

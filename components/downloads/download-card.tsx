import Link from 'next/link';

import type { DownloadItem } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';

interface DownloadCardProps {
  download: DownloadItem;
  locale: string;
}

export function DownloadCard({ download, locale }: DownloadCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-brand-400/60 hover:bg-white/10">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/15 blur-3xl transition group-hover:blur-[140px]" />
      <div className="relative space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
          {download.tagline}
        </div>
        <h3 className="text-2xl font-semibold text-white">{download.name}</h3>
        <p className="text-sm text-slate-300">{download.description}</p>
        <ul className="mt-4 space-y-2 text-xs text-slate-300">
          {download.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-brand-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <Link
          href={resolveLinkHref(locale, { href: `/downloads/${download.slug}` })}
          className="inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-200"
        >
          {locale === 'en' ? 'Open guide' : 'Abrir guia'}
          <span aria-hidden className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

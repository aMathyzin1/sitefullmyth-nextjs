import { notFound } from 'next/navigation';

import { enContent } from '@/content/en';
import { ptContent } from '@/content/pt';
import type { Locale, SiteDictionary } from '@/content/types';

const dictionaries: Record<Locale, SiteDictionary> = {
  en: enContent,
  pt: ptContent,
};

export const locales = Object.keys(dictionaries) as Locale[];

export function getDictionary(locale: string): SiteDictionary {
  const normalized = locale?.toLowerCase() as Locale | undefined;

  if (!normalized || !dictionaries[normalized]) {
    notFound();
  }

  return dictionaries[normalized];
}

export function getDownloadBySlug(locale: string, slug: string) {
  const dictionary = getDictionary(locale);
  const download = dictionary.downloads.items.find((item) => item.slug === slug);

  if (!download) {
    notFound();
  }

  return { dictionary, download } as const;
}

export function getRedirectBySlug(locale: string, slug: string) {
  const dictionary = getDictionary(locale);
  const redirect = dictionary.redirects.find((item) => item.slug === slug);

  if (!redirect) {
    notFound();
  }

  return { dictionary, redirect } as const;
}

export function getLegalBySlug(locale: string, slug: string) {
  const dictionary = getDictionary(locale);
  const legal = dictionary.legal.find((item) => item.slug === slug);

  if (!legal) {
    notFound();
  }

  return { dictionary, legal } as const;
}

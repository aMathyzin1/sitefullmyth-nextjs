import { enContent } from './en';
import { ptContent } from './pt';
import { Locale, SiteDictionary } from './types';

const dictionaries: Record<Locale, SiteDictionary> = {
  en: enContent,
  pt: ptContent
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale];
}

export function resolveLocale(pathname: string): Locale {
  if (pathname.toLowerCase().startsWith('/en') || pathname.toLowerCase().startsWith('/en-us')) {
    return 'en';
  }
  return 'pt';
}

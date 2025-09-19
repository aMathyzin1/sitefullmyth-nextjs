import { Injectable } from '@nestjs/common';
import { getDictionary, resolveLocale } from '../../content';
import { DownloadItem, Locale, SiteDictionary } from '../../content/types';

@Injectable()
export class ContentService {
  getLocaleFromPath(pathname: string): Locale {
    return resolveLocale(pathname);
  }

  buildAlternates(pathname: string) {
    const prefixed = pathname.startsWith('/') ? pathname : `/${pathname}`;
    const trimmed = prefixed.replace(/\/+$/, '') || '/';
    const englishPrefix = /^\/en(?:-us)?/i;
    const matchesEnglish = englishPrefix.test(trimmed);
    const suffix = matchesEnglish ? trimmed.replace(englishPrefix, '') : trimmed === '/' ? '' : trimmed;
    const normalizedSuffix = suffix
      ? `/${suffix.replace(/^\/+/, '').replace(/\/{2,}/g, '/').toLowerCase()}`
      : '';
    const englishUrl = normalizedSuffix ? `/en${normalizedSuffix}` : '/en';
    const portugueseUrl = matchesEnglish
      ? normalizedSuffix || '/'
      : trimmed === '/' ? '/' : trimmed.toLowerCase();

    return [
      { locale: 'pt-BR', url: portugueseUrl },
      { locale: 'en-US', url: englishUrl }
    ];
  }

  getBaseContext(locale: Locale, pathname: string) {
    return {
      locale,
      navigation: this.getNavigation(locale),
      footer: this.getFooter(locale),
      alternates: this.buildAlternates(pathname)
    };
  }

  getDictionary(locale: Locale): SiteDictionary {
    return getDictionary(locale);
  }

  getHome(locale: Locale) {
    return this.getDictionary(locale).home;
  }

  getNavigation(locale: Locale) {
    return this.getDictionary(locale).home.navigation;
  }

  getFooter(locale: Locale) {
    return this.getDictionary(locale).home.footer;
  }

  getDownloads(locale: Locale) {
    return this.getDictionary(locale).downloads;
  }

  getDownload(locale: Locale, slug: string): DownloadItem | undefined {
    return this.getDictionary(locale).downloads.items.find((item) => item.slug === slug);
  }

  getAbout(locale: Locale) {
    return this.getDictionary(locale).about;
  }

  getLegal(locale: Locale, slug: 'privacy' | 'terms') {
    return this.getDictionary(locale).legal.find((item) => item.slug === slug);
  }

  getRedirect(locale: Locale, slug: string) {
    return this.getDictionary(locale).redirects.find((item) => item.slug === slug);
  }

  getNotFound(locale: Locale) {
    return this.getDictionary(locale).notFound;
  }

  getGame(locale: Locale) {
    return this.getDictionary(locale).game;
  }
}

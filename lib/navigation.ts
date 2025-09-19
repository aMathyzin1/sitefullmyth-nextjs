import type { NavigationLink } from '@/content/types';

type LinkLike = Pick<NavigationLink, 'href'> & Partial<Pick<NavigationLink, 'external'>>;

export function resolveLinkHref(locale: string, link: LinkLike) {
  if (link.external) {
    return link.href;
  }

  const normalized = link.href.startsWith('/') ? link.href : `/${link.href}`;
  if (normalized === '/' || normalized === '') {
    return `/${locale}`;
  }

  if (normalized.startsWith(`/${locale}`)) {
    return normalized;
  }

  return `/${locale}${normalized}`;
}

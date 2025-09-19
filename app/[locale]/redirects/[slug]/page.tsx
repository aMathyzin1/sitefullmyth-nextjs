import { redirect as nextRedirect } from 'next/navigation';

import { buildMetadata } from '@/lib/metadata';
import { getDictionary, getRedirectBySlug, locales } from '@/lib/dictionaries';

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return dictionary.redirects.map((item) => ({ locale, slug: item.slug }));
  });
}

export function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { redirect } = getRedirectBySlug(params.locale, params.slug);
  return buildMetadata(redirect.seo);
}

export default function RedirectPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { redirect } = getRedirectBySlug(params.locale, params.slug);
  nextRedirect(redirect.url);
}

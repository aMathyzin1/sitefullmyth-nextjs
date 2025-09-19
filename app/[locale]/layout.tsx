import type { ReactNode } from 'react';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { buildMetadata } from '@/lib/metadata';
import { getDictionary, locales } from '@/lib/dictionaries';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const dictionary = getDictionary(params.locale);
  return buildMetadata(dictionary.home.seo);
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const dictionary = getDictionary(params.locale);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={dictionary.locale} navigation={dictionary.home.navigation} />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter footer={dictionary.home.footer} locale={dictionary.locale} />
    </div>
  );
}

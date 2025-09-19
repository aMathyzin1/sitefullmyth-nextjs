import type { Metadata } from 'next';

import type { SeoMetadata } from '@/content/types';

export function buildMetadata(seo: SeoMetadata): Metadata {
  const pageUrl = new URL(seo.url);

  return {
    metadataBase: new URL(pageUrl.origin),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      type: 'website',
      siteName: 'aMathyzin Performance Hub',
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image],
      site: '@aMathyzin',
      creator: '@aMathyzin',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  } satisfies Metadata;
}

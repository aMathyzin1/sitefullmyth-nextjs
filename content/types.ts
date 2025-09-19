export type Locale = 'pt' | 'en';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  highlights: string[];
}

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface DownloadLink {
  label: string;
  url: string;
  type: 'primary' | 'mirror' | 'source';
}

export interface DownloadItem {
  slug: string;
  seo: SeoMetadata;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  tutorialVideo?: string;
  highlights: string[];
  requirements: string[];
  faqs: { question: string; answer: string }[];
  downloadLinks: DownloadLink[];
  extraNotes?: string[];
}

export interface LegalPage {
  slug: 'privacy' | 'terms';
  seo: SeoMetadata;
  title: string;
  updatedAt: string;
  sections: {
    heading: string;
    body: string[];
  }[];
}

export interface AboutPage {
  seo: SeoMetadata;
  title: string;
  intro: string;
  mission: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  timeline: {
    title: string;
    items: { year: string; description: string }[];
  };
  contactCta: {
    title: string;
    description: string;
    actions: { label: string; href: string }[];
  };
}

export interface HomeContent {
  seo: SeoMetadata;
  navigation: NavigationLink[];
  hero: HeroContent;
  features: FeatureHighlight[];
  steps: {
    title: string;
    description: string;
  }[];
  spotlight: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      badge: string;
      href: string;
    }[];
  };
  testimonials: Testimonial[];
  communityCta: {
    title: string;
    description: string;
    buttons: { label: string; href: string }[];
  };
  footer: {
    copyright: string;
    links: NavigationLink[];
  };
}

export interface RedirectLink {
  slug: string;
  url: string;
  label: string;
  seo: SeoMetadata;
}

export interface SiteDictionary {
  locale: Locale;
  home: HomeContent;
  downloads: {
    seo: SeoMetadata;
    title: string;
    description: string;
    categories: {
      id: string;
      title: string;
      description: string;
    }[];
    items: DownloadItem[];
  };
  about: AboutPage;
  legal: LegalPage[];
  redirects: RedirectLink[];
  notFound: {
    seo: SeoMetadata;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  game: {
    seo: SeoMetadata;
    title: string;
    description: string;
  };
}

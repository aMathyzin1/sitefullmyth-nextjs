import Link from 'next/link';

import type { HomeContent } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';

interface SiteFooterProps {
  footer: HomeContent['footer'];
  locale: string;
}

export function SiteFooter({ footer, locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">{footer.copyright}</p>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {footer.links.map((link) => (
            <Link
              key={link.label}
              href={resolveLinkHref(locale, link)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

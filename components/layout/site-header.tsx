'use client';

import { useState } from 'react';

import { List, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { NavigationLink } from '@/content/types';
import { resolveLinkHref } from '@/lib/navigation';
import { cn } from '@/lib/utils';

import { LanguageSwitcher } from './language-switcher';

interface SiteHeaderProps {
  locale: string;
  navigation: NavigationLink[];
}

export function SiteHeader({ locale, navigation }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const logoHref = `/${locale}`;

  const renderLink = (link: NavigationLink) => {
    const href = resolveLinkHref(locale, link);
    const isActive = !link.external && pathname.startsWith(href);

    return (
      <Link
        key={link.label}
        href={href}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noreferrer' : undefined}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white',
          isActive ? 'bg-white/10 text-white shadow-lg shadow-brand-500/20' : 'text-slate-300',
        )}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href={logoHref} className="group inline-flex items-center gap-2">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-lg font-bold text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
            aM
          </span>
          <span className="text-left text-sm font-semibold text-white">
            aMathyzin
            <span className="block text-xs font-normal text-slate-300">Performance Hub</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map(renderLink)}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((state) => !state)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-brand-300/50 hover:bg-white/10 md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X weight="bold" className="h-5 w-5" aria-hidden /> : <List weight="bold" className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-xl shadow-brand-500/10">
            <nav className="flex flex-col gap-2">
              {navigation.map(renderLink)}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

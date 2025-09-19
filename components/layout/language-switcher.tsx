'use client';

import { useTransition } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { locales } from '@/lib/dictionaries';

interface LanguageSwitcherProps {
  locale: string;
}

function buildLocalePath(pathname: string, targetLocale: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  segments[0] = targetLocale;
  return `/${segments.join('/')}`;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <label className="flex items-center gap-2 text-xs font-medium text-slate-300">
      <span className="hidden sm:inline">Idioma</span>
      <select
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white shadow-inner transition focus:border-brand-400 focus:outline-none"
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value;
          startTransition(() => {
            router.push(buildLocalePath(pathname, nextLocale));
          });
        }}
        disabled={isPending}
      >
        {locales.map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {availableLocale.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}

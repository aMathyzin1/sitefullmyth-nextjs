import type { ReactNode } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  target?: string;
  rel?: string;
}

export function ButtonLink({ href, children, variant = 'primary', target, rel }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300',
        variant === 'primary' && 'bg-white text-slate-900 shadow-lg shadow-brand-500/20 hover:bg-slate-200',
        variant === 'secondary' && 'bg-white/10 text-white hover:bg-white/20',
        variant === 'ghost' && 'text-white hover:text-brand-200',
      )}
    >
      {children}
    </Link>
  );
}

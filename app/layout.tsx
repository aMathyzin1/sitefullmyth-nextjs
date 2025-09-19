import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { EnergyLines } from '@/components/ui/energy-lines';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amathyzin.com'),
  title: 'aMathyzin Performance Hub',
  description:
    'Central oficial com otimizações gratuitas, guias estratégicos e comunidade para elevar a performance do seu PC.',
  keywords: [
    'amathyzin',
    'otimização de pc',
    'download booster',
    'melhorar fps',
    'packs gratuitos',
  ],
  openGraph: {
    type: 'website',
    title: 'aMathyzin Performance Hub',
    description:
      'Central oficial com otimizações gratuitas, guias estratégicos e comunidade para elevar a performance do seu PC.',
    siteName: 'aMathyzin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aMathyzin Performance Hub',
    description:
      'Central oficial com otimizações gratuitas, guias estratégicos e comunidade para elevar a performance do seu PC.',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-slate-950 text-slate-100 font-sans',
          fontSans.variable,
        )}
      >
        <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.12),_transparent_55%)]">
          <div className="pointer-events-none absolute inset-0 -z-20 opacity-80">
            <div className="absolute left-1/2 top-[-12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/35 blur-[200px]" />
            <div className="absolute bottom-[-16rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full bg-sky-500/30 blur-[220px]" />
            <div className="absolute left-[-12rem] bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-[200px]" />
          </div>
          <EnergyLines className="-z-10 opacity-70 mix-blend-screen" />
          <div className="pointer-events-none absolute inset-0 -z-30 mask-gradient bg-gradient-to-br from-slate-950 via-slate-950/70 to-slate-950" />
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

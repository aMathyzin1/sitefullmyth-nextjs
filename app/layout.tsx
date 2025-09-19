import './globals.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'aMathyzin Performance Hub',
  description:
    'Plataforma moderna com downloads gratuitos, guias, vídeos e comunidade oficial do aMathyzin.',
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
        <div className="relative isolate min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 mask-gradient">
            <div className="absolute left-1/2 top-0 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-brand-500/40 blur-[160px]" />
            <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/30 blur-[160px]" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

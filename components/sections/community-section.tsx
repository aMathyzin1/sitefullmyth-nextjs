import { ChatsCircle } from '@phosphor-icons/react/dist/ssr';

import { ButtonLink } from '@/components/ui/button-link';
import type { HomeContent } from '@/content/types';

interface CommunitySectionProps {
  community: HomeContent['communityCta'];
}

export function CommunitySection({ community }: CommunitySectionProps) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-slate-950/70 p-12 shadow-[0_24px_140px_rgba(59,130,246,0.25)]">
          <div className="absolute inset-0 opacity-80">
            <div className="absolute left-1/2 top-[-18rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[200px]" />
            <div className="absolute bottom-[-18rem] left-10 h-[28rem] w-[28rem] rounded-full bg-sky-500/25 blur-[200px]" />
            <div className="absolute right-[-6rem] top-10 h-36 w-36 rounded-full bg-emerald-400/30 blur-3xl" />
          </div>
          <div className="relative space-y-8 text-center">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-50 shadow-inner shadow-brand-500/30">
              <ChatsCircle weight="fill" className="h-8 w-8" aria-hidden />
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{community.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-100">{community.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {community.buttons.map((button) => (
                <ButtonLink key={button.label} href={button.href} variant="secondary" target="_blank" rel="noreferrer">
                  {button.label}
                </ButtonLink>
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-100">
              Comunidade + Conteúdo + Suporte
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

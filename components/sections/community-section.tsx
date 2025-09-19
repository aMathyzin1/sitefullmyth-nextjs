import { ButtonLink } from '@/components/ui/button-link';
import type { HomeContent } from '@/content/types';

interface CommunitySectionProps {
  community: HomeContent['communityCta'];
}

export function CommunitySection({ community }: CommunitySectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-brand-500/30 via-slate-900/70 to-sky-500/20 p-10 shadow-2xl shadow-brand-500/20">
          <div className="absolute -left-10 -top-24 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
          <div className="relative space-y-6 text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{community.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-100">{community.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {community.buttons.map((button) => (
                <ButtonLink key={button.label} href={button.href} variant="secondary" target="_blank" rel="noreferrer">
                  {button.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { RunnerPreview } from '@/components/game/runner-preview';
import { ButtonLink } from '@/components/ui/button-link';
import { buildMetadata } from '@/lib/metadata';
import { getDictionary } from '@/lib/dictionaries';

export function generateMetadata({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);
  return buildMetadata(dictionary.game.seo);
}

export default function GamePage({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);
  const game = dictionary.game;

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 pb-24 pt-16">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
          Three.js
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{game.title}</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-200">{game.description}</p>
      </div>
      <RunnerPreview />
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-200">
        <p>
          {dictionary.locale === 'en'
            ? 'A playable build will be available soon. Meanwhile explore the preview and share feedback in our community.'
            : 'Uma build jogável chega em breve. Enquanto isso aproveite a prévia animada e compartilhe feedback na comunidade.'}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <ButtonLink href="https://amathyzin.com/discord" variant="secondary" target="_blank" rel="noreferrer">
            Discord
          </ButtonLink>
          <ButtonLink href="https://github.com/aMathyzin" variant="secondary" target="_blank" rel="noreferrer">
            GitHub
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

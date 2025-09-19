import { DownloadsExplorer } from '@/components/downloads/downloads-explorer';
import { buildMetadata } from '@/lib/metadata';
import { getDictionary } from '@/lib/dictionaries';

export function generateMetadata({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);
  return buildMetadata(dictionary.downloads.seo);
}

export default function DownloadsPage({ params }: { params: { locale: string } }) {
  const dictionary = getDictionary(params.locale);

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pb-24 pt-16">
      <div className="space-y-6 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
          {dictionary.downloads.title}
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">{dictionary.downloads.title}</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-200">{dictionary.downloads.description}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {dictionary.downloads.categories.map((category) => (
          <div
            key={category.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-brand-500/10"
          >
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{category.description}</p>
          </div>
        ))}
      </div>
      <DownloadsExplorer
        locale={dictionary.locale}
        categories={dictionary.downloads.categories}
        items={dictionary.downloads.items}
      />
    </div>
  );
}

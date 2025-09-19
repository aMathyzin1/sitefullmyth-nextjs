'use client';

import { useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import type { DownloadItem, SiteDictionary } from '@/content/types';

import { DownloadCard } from './download-card';

interface DownloadsExplorerProps {
  locale: string;
  categories: SiteDictionary['downloads']['categories'];
  items: DownloadItem[];
}

const keywordMap: Record<string, string[]> = {
  windows: ['windows', 'sistema', 'pack', 'preset', 'automação'],
  games: ['roblox', 'valorant', 'fps', 'jogo', 'games'],
  network: ['rede', 'latência', 'network', 'mtu', 'ttl', 'upload'],
};

function matchesCategory(item: DownloadItem, categoryId: string) {
  const keywords = keywordMap[categoryId];
  if (!keywords) return true;

  const haystack = [
    item.name,
    item.tagline,
    item.description,
    ...item.highlights,
    ...item.seo.keywords,
  ]
    .join(' ')
    .toLowerCase();

  return keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

export function DownloadsExplorer({ locale, categories, items }: DownloadsExplorerProps) {
  const [category, setCategory] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (category !== 'all' && !matchesCategory(item, category)) {
        return false;
      }

      if (!query) return true;
      const normalizedQuery = query.toLowerCase();
      return (
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery) ||
        item.highlights.some((highlight) => highlight.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [items, category, query]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-brand-500/10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === 'all' ? 'bg-white text-slate-900 shadow-lg shadow-brand-500/20' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {locale === 'en' ? 'All' : 'Todos'}
          </button>
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item.id
                  ? 'bg-white text-slate-900 shadow-lg shadow-brand-500/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder={locale === 'en' ? 'Search downloads...' : 'Buscar downloads...'}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:border-brand-400 focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
            {filteredItems.length}/{items.length}
          </span>
        </div>
      </div>
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2"
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          {filteredItems.map((download) => (
            <motion.div
              key={download.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <DownloadCard download={download} locale={locale} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-sm text-slate-300">
          {locale === 'en'
            ? 'No downloads match this filter yet. Try another keyword or category.'
            : 'Nenhum download encontrado para o filtro atual. Tente outro termo ou categoria.'}
        </div>
      ) : null}
    </div>
  );
}

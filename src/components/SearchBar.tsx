'use client';

import { useEffect, useRef, useState } from 'react';
import { Locale, ArticleMeta } from '@/types';
import '@/styles/search.css';

// Algolia Autocomplete работает только на клиенте
export default function SearchBar({ lang }: { lang: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/articles/${lang}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [lang]);

  useEffect(() => {
    if (!ref.current || articles.length === 0) return;

    // Clear previous autocomplete instance
    ref.current.innerHTML = '';

    import('@algolia/autocomplete-js').then(({ autocomplete }) => {
      if (!ref.current) return;
      
      const search = autocomplete({
        container: ref.current,
        placeholder: lang === 'ru' ? 'Поиск статей...' : 'Maqolalarni qidirish...',
        openOnFocus: false,
        detachedMediaQuery: 'none', // Prevent detached mode
        classNames: {
          form: 'relative',
          input: 'w-full px-4 py-3 pl-12 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200',
          panel: 'absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto',
          list: 'py-2',
          item: 'px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0',
        },
        getSources: () => [
          {
            sourceId: 'articles',
            getItems: ({ query }: any) => {
              if (!query || query.length < 2) return [];
              return articles.filter(article => 
                article.title.toLowerCase().includes(query.toLowerCase()) ||
                article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
                article.category.toLowerCase().includes(query.toLowerCase())
              ).slice(0, 8);
            },
            templates: {
              item({ item }: any) {
                return `
                  <a href="/${item.lang}/${item.category}/${item.slug}" class="block">
                    <div class="flex items-start space-x-3">
                      <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div class="flex-1 min-w-0">
                        <div class="font-medium text-gray-900 dark:text-gray-100 truncate">${item.title}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">${item.category}</div>
                        <div class="flex flex-wrap gap-1 mt-2">
                          ${item.tags.slice(0, 3).map((tag: string) => `<span class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">#${tag}</span>`).join('')}
                        </div>
                      </div>
                      <div class="text-xs text-gray-400 dark:text-gray-500">${item.readingTime}</div>
                    </div>
                  </a>
                `;
              },
              noResults() {
                return `
                  <div class="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                    <div class="text-4xl mb-2">🔍</div>
                    <div class="font-medium">${lang === 'ru' ? 'Ничего не найдено' : 'Hech narsa topilmadi'}</div>
                    <div class="text-sm mt-1">${lang === 'ru' ? 'Попробуйте изменить запрос' : 'Qidiruv so\'zini o\'zgartirib ko\'ring'}</div>
                  </div>
                `;
              }
            }
          }
        ]
      } as any);

      // Add search icon after autocomplete is initialized
      setTimeout(() => {
        const form = ref.current?.querySelector('.aa-Form');
        if (form && !form.querySelector('.search-icon')) {
          const icon = document.createElement('div');
          icon.className = 'search-icon absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none z-10';
          icon.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          `;
          form.appendChild(icon);
        }
      }, 100);
    });
  }, [lang, articles]);

  return (
    <div className="relative">
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
      
      {/* Autocomplete Container */}
      <div ref={ref} className="w-full" />
    </div>
  );
} 
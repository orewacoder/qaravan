'use client';

import { useState, useEffect, useRef } from 'react';
import { Locale, ArticleMeta } from '@/types';
import Link from 'next/link';
import { getCategoryName } from '@/lib/translations';

export default function SimpleSearchBar({ lang }: { lang: Locale }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

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
    if (query.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = articles.filter(article => {
      const categoryName = getCategoryName(article.category, lang).toLowerCase();
      return (
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        article.category.toLowerCase().includes(query.toLowerCase()) ||
        categoryName.includes(query.toLowerCase())
      );
    }).slice(0, 8);

    setResults(filtered);
    setShowResults(true);
  }, [query, articles, lang]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full z-[5000] search-results-container">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          placeholder={lang === 'ru' ? 'Поиск статей...' : 'Maqolalarni qidirish...'}
          className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
        
        {isLoading && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="search-results-dropdown absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-[5000] max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((article, index) => (
                <Link
                  key={`${article.lang}-${article.category}-${article.slug}-${index}`}
                  href={`/${article.lang}/${article.fullPath || `${article.category}/${article.slug}`}`}
                  onClick={() => setShowResults(false)}
                  className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
                        {article.title}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {getCategoryName(article.category, lang)}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={`${article.slug}-tag-${tagIndex}`} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {article.readingTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.length >= 2 ? (
            <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
              <div className="text-4xl mb-2">🔍</div>
              <div className="font-medium">
                {lang === 'ru' ? 'Ничего не найдено' : 'Hech narsa topilmadi'}
              </div>
              <div className="text-sm mt-1">
                {lang === 'ru' ? 'Попробуйте изменить запрос' : 'Qidiruv so\'zini o\'zgartirib ko\'ring'}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
} 
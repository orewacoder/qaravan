'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Locale, ArticleMeta } from '@/types';
import Link from 'next/link';
import { getCategoryName } from '@/lib/translations';

export default function PortalSearchBar({ lang }: { lang: Locale }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [articles, setArticles] = useState<ArticleMeta[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchPosition, setSearchPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    // Создаем или находим контейнер для portal
    let container = document.getElementById('search-portal');
    if (!container) {
      container = document.createElement('div');
      container.id = 'search-portal';
      container.style.position = 'absolute';
      container.style.top = '0';
      container.style.left = '0';
      container.style.zIndex = '99999';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    return () => {
      // Очищаем при размонтировании
      const existingContainer = document.getElementById('search-portal');
      if (existingContainer) {
        existingContainer.innerHTML = '';
      }
    };
  }, []);

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
    updateSearchPosition();
  }, [query, articles, lang]);

  const updateSearchPosition = () => {
    if (searchRef.current) {
      const rect = searchRef.current.getBoundingClientRect();
      setSearchPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    function handleScroll() {
      if (showResults) {
        updateSearchPosition();
      }
    }

    function handleResize() {
      if (showResults) {
        updateSearchPosition();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [showResults]);

  const searchResultsPortal = portalContainer && showResults ? createPortal(
    <div 
      className="bg-white/98 dark:bg-gray-800/98 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl max-h-96 overflow-y-auto"
      style={{
        position: 'absolute',
        top: `${searchPosition.top}px`,
        left: `${searchPosition.left}px`,
        width: `${searchPosition.width}px`,
        zIndex: 99999,
        pointerEvents: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}
    >
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
      ) : (
        <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
          <div className="text-4xl mb-2">🔍</div>
          <div className="font-medium">
            {lang === 'ru' ? 'Ничего не найдено' : 'Hech narsa topilmadi'}
          </div>
          <div className="text-sm mt-1">
            {lang === 'ru' ? 'Попробуйте изменить запрос' : 'Qidiruv so\'zini o\'zgartirib ko\'ring'}
          </div>
        </div>
      )}
    </div>,
    portalContainer
  ) : null;

  return (
    <>
      <div ref={searchRef} className="relative w-full">
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
            onFocus={() => {
              if (query.length >= 2) {
                setShowResults(true);
                updateSearchPosition();
              }
            }}
            placeholder={lang === 'ru' ? 'Поиск статей...' : 'Maqolalarni qidirish...'}
            className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
          />
          
          {isLoading && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
            </div>
          )}
        </div>
      </div>
      
      {/* Portal для результатов поиска */}
      {searchResultsPortal}
    </>
  );
} 
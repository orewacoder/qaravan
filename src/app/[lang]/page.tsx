import CategoryList from '@/components/CategoryList';
import SimpleSearchBar from '@/components/SimpleSearchBar';
import { getAllArticles } from '@/lib/content';
import { Locale } from '@/types';
import { isLocale } from '@/lib/i18n';
import { getCategoryName } from '@/lib/translations';
import Link from 'next/link';

export default async function LangHome({ 
  params 
}: { 
  params: Promise<{ lang: string }> 
}) {
  const { lang } = await params;
  
  if (!isLocale(lang)) {
    return <div>Invalid language</div>;
  }
  
  const articles = await getAllArticles(lang);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
            {lang === 'uz' ? 'QAravan' : 'QAravan'}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
            {lang === 'uz' 
              ? 'QA sifatida sayohat. Barqaror relizga yo\'l olgan karavan. Xatosiz, lekin sarguzashtlar bilan.' 
              : 'QA как путешествие. Караван, который идёт к стабильному релизу. Без багов, но с приключениями.'
            }
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{articles.length}</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {lang === 'uz' ? 'Maqolalar' : 'Статей'}
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
                {new Set(articles.map(a => a.category)).size}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {lang === 'uz' ? 'Kategoriyalar' : 'Категорий'}
              </div>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {articles.reduce((acc, article) => acc + article.tags.length, 0)}
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {lang === 'uz' ? 'Teglar' : 'Тегов'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-2xl mx-auto relative z-40 px-4">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
            {lang === 'uz' ? 'Qidiruv' : 'Поиск'}
          </h2>
          <SimpleSearchBar lang={lang} />
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {lang === 'uz' ? 'Kategoriyalar' : 'Категории'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {lang === 'uz' 
              ? 'QA sohasidagi barcha muhim mavzular bo\'yicha tizimli ma\'lumotlar'
              : 'Систематизированная информация по всем важным темам в области QA'
            }
          </p>
        </div>
        <CategoryList lang={lang} />
      </section>

      {/* Recent Articles */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {lang === 'uz' ? 'So\'nggi maqolalar' : 'Последние статьи'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
          {articles.slice(0, 6).map((article, index) => (
            <Link
              key={`${article.category}-${article.slug}-${index}`}
              href={`/${lang}/${article.fullPath || `${article.category}/${article.slug}`}`}
              className="group block"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                    {getCategoryName(article.category, lang)}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.description || (lang === 'uz' ? 'Tavsif mavjud emas' : 'Описание недоступно')}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={`${article.slug}-tag-${tagIndex}`} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Read More Arrow */}
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  {lang === 'uz' ? 'O\'qish' : 'Читать'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 
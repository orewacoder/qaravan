import { getAllArticles } from '@/lib/content';
import { Locale } from '@/types';
import { isLocale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Category names mapping
const categoryNames: Record<string, { uz: string; ru: string }> = {
  'avtomatizaciya-beta': { uz: 'Avtomatlashtirish', ru: 'Автоматизация' },
  'faq-dlya-novichkov': { uz: 'Yangilar uchun FAQ', ru: 'FAQ для новичков' },
  'mobilnoe-testirovanie': { uz: 'Mobil test', ru: 'Мобильное тестирование' },
  'obshee': { uz: 'Umumiy', ru: 'Общее' },
  'poleznye-ssylki': { uz: 'Foydali havolalar', ru: 'Полезные ссылки' },
  'prakticheskaya-chast': { uz: 'Amaliy qism', ru: 'Практическая часть' },
  'sdlc-i-stlc': { uz: 'SDLC va STLC', ru: 'SDLC и STLC' },
  'seti-i-okolo-nikh': { uz: 'Tarmoqlar', ru: 'Сети и около них' },
  'test-dizain': { uz: 'Test dizayni', ru: 'Тест-дизайн' },
  'testirovanie-v-raznykh-sferakh-oblastyakh-testing-different-domains': { uz: 'Turli sohalarda test', ru: 'Тестирование в разных сферах' },
  'testovaya-dokumentaciya-i-artefakty-test-deliverablestest-artifacts': { uz: 'Test hujjatlari', ru: 'Тестовая документация' },
  'vidy-metody-urovni-testirovaniya': { uz: 'Test turlari va usullari', ru: 'Виды, методы, уровни тестирования' }
};

export default async function CategoryPage({
  params
}: {
  params: Promise<{ lang: string; category: string }>
}) {
  const { lang, category } = await params;
  
  if (!isLocale(lang)) {
    notFound();
  }

  const articles = await getAllArticles(lang);
  const categoryArticles = articles.filter(article => article.category === category);

  if (categoryArticles.length === 0) {
    notFound();
  }

  const categoryName = categoryNames[category]?.[lang] || category;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <nav className="mb-6">
          <Link 
            href={`/${lang}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === 'uz' ? 'Bosh sahifa' : 'Главная'}
          </Link>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          {categoryName}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {lang === 'uz' 
            ? `Bu kategoriyada ${categoryArticles.length} ta maqola mavjud`
            : `В этой категории ${categoryArticles.length} статей`
          }
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryArticles.map((article, index) => (
          <Link
            key={`${category}-${article.slug}-${index}`}
            href={`/${lang}/${category}/${article.slug}`}
            className="group block"
          >
            <article className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
              {/* Article Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                  {article.readingTime}
                </span>
                {article.date && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(article.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'uz-UZ')}
                  </span>
                )}
              </div>

              {/* Article Title */}
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {article.title}
              </h2>

              {/* Article Description */}
              {article.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {article.description}
                </p>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={`${article.slug}-tag-${tagIndex}`} 
                    className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
                {article.tags.length > 3 && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    +{article.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Read More */}
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                {lang === 'uz' ? 'O\'qish' : 'Читать'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State (if no articles) */}
      {categoryArticles.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {lang === 'uz' ? 'Maqolalar topilmadi' : 'Статьи не найдены'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {lang === 'uz' 
              ? 'Bu kategoriyada hozircha maqolalar yo\'q'
              : 'В этой категории пока нет статей'
            }
          </p>
        </div>
      )}
    </div>
  );
} 
import { getArticle, getAllArticles } from '@/lib/content';
import { Locale } from '@/types';
import { isLocale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

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

export default async function ArticlePage({
  params
}: {
  params: Promise<{ lang: string; category: string; slug: string }>
}) {
  const { lang, category, slug } = await params;
  
  if (!isLocale(lang)) {
    notFound();
  }

  const article = getArticle(lang, category, slug);
  
  if (!article) {
    notFound();
  }

  const categoryName = categoryNames[category]?.[lang] || category;
  const allArticles = await getAllArticles(lang);
  const categoryArticles = allArticles.filter(a => a.category === category);
  const currentIndex = categoryArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex > 0 ? categoryArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < categoryArticles.length - 1 ? categoryArticles[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <Link 
              href={`/${lang}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {lang === 'uz' ? 'Bosh sahifa' : 'Главная'}
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link 
              href={`/${lang}/${category}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {categoryName}
            </Link>
          </li>
          <li className="flex items-center">
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {article.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              {categoryName}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {article.readingTime}
            </span>
            {article.date && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(article.date).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'uz-UZ')}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {article.title}
          </h1>
          
          {article.description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {article.description}
            </p>
          )}
          
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <main className="mb-12">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }: any) => (
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }: any) => (
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }: any) => (
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }: any) => (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                code: ({ children, className }: any) => {
                  const isInline = !className;
                  if (isInline) {
                    return (
                      <code className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded text-sm">
                        {children}
                      </code>
                    );
                  }
                  return <code className={className}>{children}</code>;
                },
                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg my-6">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }: any) => (
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }: any) => (
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                    {children}
                  </ol>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <nav className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevArticle && (
            <Link
              href={`/${lang}/${category}/${prevArticle.slug}`}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {lang === 'uz' ? 'Oldingi maqola' : 'Предыдущая статья'}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {prevArticle.title}
              </h3>
            </Link>
          )}
          
          {nextArticle && (
            <Link
              href={`/${lang}/${category}/${nextArticle.slug}`}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:text-right"
            >
              <div className="flex items-center justify-end text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                {lang === 'uz' ? 'Keyingi maqola' : 'Следующая статья'}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {nextArticle.title}
              </h3>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
} 
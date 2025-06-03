import { getArticle, getAllArticles } from '@/lib/content';
import { Locale } from '@/types';
import { isLocale } from '@/lib/i18n';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { getCategoryName } from '@/lib/translations';

export default async function DynamicPage({
  params
}: {
  params: Promise<{ lang: string; path: string[] }>
}) {
  const { lang, path: pathSegments } = await params;
  
  if (!isLocale(lang)) {
    notFound();
  }

  // Если это только одна часть пути, это категория
  if (pathSegments.length === 1) {
    const category = pathSegments[0];
    const articles = await getAllArticles(lang);
    const categoryArticles = articles.filter(article => article.category === category);

    if (categoryArticles.length === 0) {
      notFound();
    }

    const categoryName = getCategoryName(category, lang);

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
              href={`/${lang}/${article.fullPath || `${article.category}/${article.slug}`}`}
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
                <div className="flex flex-wrap gap-1 mb-4">
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
      </div>
    );
  }

  // Если это больше одной части пути, это статья
  const category = pathSegments[0];
  const slug = pathSegments[pathSegments.length - 1];
  
  const article = getArticle(lang, category, slug);
  
  if (!article) {
    notFound();
  }

  const categoryName = getCategoryName(category, lang);
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
      <header className="mb-8">
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
      <article className="mb-12">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-gray-200 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-900 prose-pre:text-gray-100">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <nav className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevArticle && (
            <Link
              href={`/${lang}/${prevArticle.fullPath || `${prevArticle.category}/${prevArticle.slug}`}`}
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
              href={`/${lang}/${nextArticle.fullPath || `${nextArticle.category}/${nextArticle.slug}`}`}
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
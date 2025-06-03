import Link from 'next/link';
import NotFoundActions from '@/components/NotFoundActions';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="relative text-6xl mb-4">🔍</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Страница не найдена
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            К сожалению, запрашиваемая страница не существует или была перемещена. 
            Возможно, вы перешли по устаревшей ссылке или ввели неправильный адрес.
          </p>
          
          {/* Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
              <div className="text-2xl mb-2">🏠</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Главная страница
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Вернитесь на главную и найдите нужную информацию
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-4">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Поиск
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Используйте поиск для быстрого нахождения статей
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ru"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            На главную (RU)
          </Link>
          
          <Link
            href="/uz"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Bosh sahifa (UZ)
          </Link>
        </div>

        {/* Additional Help */}
        <NotFoundActions />
      </div>
    </div>
  );
} 
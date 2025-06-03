import { ReactNode, Suspense } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import TelegramNavigation from '@/components/TelegramNavigation';
import TelegramUserInfo from '@/components/TelegramUserInfo';
import { isLocale } from '@/lib/i18n';
import { redirect } from 'next/navigation';
import Loading from './loading';

export default async function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) redirect('/not-found');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <TelegramNavigation />
      {/* Header */}
      <header className="sticky top-0 z-[9999] backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-lg">🐪</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  QAravan
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {lang === 'uz' ? 'Sifat yo\'lida sayohat' : 'Путешествие к качеству'}
                </p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  QAravan
                </h1>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <TelegramUserInfo />
              
              {/* Language Switcher - компактная версия для мобильных */}
              <div className="sm:hidden">
                <Suspense fallback={<div className="w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"/>}>
                  <LanguageSwitcher />
                </Suspense>
              </div>
              
              {/* Language Switcher - полная версия для десктопа */}
              <div className="hidden sm:block">
                <Suspense fallback={<div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"/>}>
                  <LanguageSwitcher />
                </Suspense>
              </div>
              
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              © 2024 QAravan. {lang === 'uz' ? 'Barcha huquqlar himoyalangan.' : 'Все права защищены.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 
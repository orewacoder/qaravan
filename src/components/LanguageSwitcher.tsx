'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, isLocale } from '@/lib/i18n';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const pathLang = pathname.split('/')[1];
  const currentLang = isLocale(pathLang) ? pathLang : 'uz';

  function switchLang(nextLang: string) {
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as any)) {
      segments[1] = nextLang;
    } else {
      segments.splice(1, 0, nextLang);
    }
    startTransition(() => {
      router.push(segments.join('/'));
    });
  }

  return (
    <div className="relative inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-0.5 sm:p-1" aria-label="Переключатель языка">
      {locales.map((lang) => {
        const isActive = currentLang === lang;
        return (
          <button
            key={lang}
            onClick={() => switchLang(lang)}
            disabled={isPending || isActive}
            className={`
              relative px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all duration-200
              ${isActive 
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }
              ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            {isPending && isActive && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <span className={isPending && isActive ? 'opacity-0' : ''}>
              {lang.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
} 
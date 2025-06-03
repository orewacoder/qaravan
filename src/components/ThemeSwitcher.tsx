'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-5 sm:w-12 sm:h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
      className={`
        relative inline-flex h-5 w-10 sm:h-6 sm:w-12 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isDark ? 'bg-blue-600' : 'bg-gray-300'}
      `}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {/* Toggle Circle */}
      <span
        className={`
          inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform duration-200 shadow-lg
          ${isDark ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'}
        `}
      />
      
      {/* Icons */}
      <span className={`absolute left-0.5 sm:left-1 text-xs transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        ☀️
      </span>
      <span className={`absolute right-0.5 sm:right-1 text-xs transition-opacity duration-200 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        🌙
      </span>
    </button>
  );
} 
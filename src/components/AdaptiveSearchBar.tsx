'use client';

import { useEffect, useState } from 'react';
import { Locale } from '@/types';
import PortalSearchBar from './PortalSearchBar';
import MobileSearchBar from './MobileSearchBar';

export default function AdaptiveSearchBar({ lang }: { lang: Locale }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTelegram, setIsTelegram] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkEnvironment = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const width = window.innerWidth;
      
      setIsMobile(width <= 768);
      setIsTelegram(
        userAgent.includes('telegram') || 
        window.Telegram?.WebApp !== undefined ||
        window.location.hostname.includes('telegram')
      );
    };

    checkEnvironment();
    setMounted(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Показываем простой компонент до монтирования
  if (!mounted) {
    return (
      <div className="relative w-full">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder={lang === 'ru' ? 'Поиск статей...' : 'Maqolalarni qidirish...'}
            className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            disabled
          />
        </div>
      </div>
    );
  }

  // Для мобильных устройств или Telegram используем простой компонент
  if (isMobile || isTelegram) {
    return <MobileSearchBar lang={lang} />;
  }

  // Для десктопа используем Portal версию
  return <PortalSearchBar lang={lang} />;
} 
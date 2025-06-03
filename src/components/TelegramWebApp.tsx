'use client';

import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { useTheme } from 'next-themes';

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
    };
    start_param?: string;
  };
  colorScheme: 'light' | 'dark';
  themeParams: {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
  };
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    isActive: boolean;
    setText: (text: string) => void;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
    enable: () => void;
    disable: () => void;
    showProgress: (leaveActive?: boolean) => void;
    hideProgress: () => void;
  };
  BackButton: {
    isVisible: boolean;
    onClick: (callback: () => void) => void;
    show: () => void;
    hide: () => void;
  };
  HapticFeedback: {
    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
    selectionChanged: () => void;
  };
  expand: () => void;
  close: () => void;
  ready: () => void;
}

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

interface TelegramContextType {
  webApp: TelegramWebApp | null;
  user: TelegramWebApp['initDataUnsafe']['user'] | null;
  isLoading: boolean;
  isTelegramEnvironment: boolean;
}

const TelegramContext = createContext<TelegramContextType>({
  webApp: null,
  user: null,
  isLoading: true,
  isTelegramEnvironment: false,
});

export const useTelegram = () => useContext(TelegramContext);

interface TelegramProviderProps {
  children: ReactNode;
}

export function TelegramProvider({ children }: TelegramProviderProps) {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramWebApp['initDataUnsafe']['user'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTelegramEnvironment, setIsTelegramEnvironment] = useState(false);

  useEffect(() => {
    const initTelegram = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const tg = window.Telegram.WebApp;
        
        // Инициализация Web App
        tg.ready();
        
        // Расширение на весь экран
        tg.expand();
        
        setWebApp(tg);
        setUser(tg.initDataUnsafe.user || null);
        setIsTelegramEnvironment(true);
        
        // Настройка темы
        document.documentElement.style.setProperty('--tg-bg-color', tg.themeParams.bg_color);
        document.documentElement.style.setProperty('--tg-text-color', tg.themeParams.text_color);
        document.documentElement.style.setProperty('--tg-hint-color', tg.themeParams.hint_color);
        document.documentElement.style.setProperty('--tg-link-color', tg.themeParams.link_color);
        document.documentElement.style.setProperty('--tg-button-color', tg.themeParams.button_color);
        document.documentElement.style.setProperty('--tg-button-text-color', tg.themeParams.button_text_color);
        
        // Добавляем класс для Telegram среды
        document.body.classList.add('tg-viewport');
        
        // Отправляем событие для синхронизации с next-themes
        window.dispatchEvent(new CustomEvent('telegram-theme-init', { 
          detail: { colorScheme: tg.colorScheme } 
        }));
      } else {
        // Если не в Telegram, устанавливаем светлую тему по умолчанию
        document.documentElement.classList.remove('dark');
      }
      
      setIsLoading(false);
    };

    // Проверяем, загружен ли уже Telegram Web App
    if (window.Telegram?.WebApp) {
      initTelegram();
    } else {
      // Ждем загрузки скрипта
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.onload = initTelegram;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <TelegramContext.Provider value={{ webApp, user, isLoading, isTelegramEnvironment }}>
      {children}
    </TelegramContext.Provider>
  );
}

// Новый компонент для синхронизации темы
export function TelegramThemeSync() {
  const { setTheme } = useTheme();
  const { isTelegramEnvironment } = useTelegram();

  useEffect(() => {
    if (!isTelegramEnvironment) return;

    const handleTelegramThemeInit = (event: CustomEvent) => {
      const { colorScheme } = event.detail;
      setTheme(colorScheme);
    };

    window.addEventListener('telegram-theme-init', handleTelegramThemeInit as EventListener);

    return () => {
      window.removeEventListener('telegram-theme-init', handleTelegramThemeInit as EventListener);
    };
  }, [isTelegramEnvironment, setTheme]);

  return null;
}

export function TelegramWebAppInitializer() {
  const { isLoading, isTelegramEnvironment } = useTelegram();

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🐪</div>
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Загрузка QAravan...</p>
        </div>
      </div>
    );
  }

  if (!isTelegramEnvironment) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 m-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">⚠️</div>
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
              Не Telegram среда
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              Это приложение оптимизировано для запуска в Telegram Web App
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
} 
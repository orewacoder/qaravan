'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTelegram } from './TelegramWebApp';

export function TelegramNavigation() {
  const { webApp, isTelegramEnvironment } = useTelegram();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!webApp || !isTelegramEnvironment) return;

    // Определяем, нужно ли показывать кнопку "Назад"
    const isNotHomePage = pathname !== '/ru' && pathname !== '/uz' && pathname !== '/';
    
    if (isNotHomePage) {
      // Показываем кнопку "Назад"
      webApp.BackButton.show();
      
      // Настраиваем обработчик нажатия
      const handleBackClick = () => {
        // Проверяем, можем ли мы вернуться в истории браузера
        if (window.history.length > 1) {
          router.back();
        } else {
          // Если истории нет, идем на главную
          router.push('/ru');
        }
      };
      
      webApp.BackButton.onClick(handleBackClick);
    } else {
      // Скрываем кнопку "Назад" на главной странице
      webApp.BackButton.hide();
    }

    // Настройка главной кнопки в зависимости от страницы
    if (pathname.includes('/ru/') || pathname.includes('/uz/')) {
      if (pathname.split('/').length === 3) {
        // Страница категории
        webApp.MainButton.setText('🔍 Поиск статей');
        webApp.MainButton.show();
        
        const handleSearchClick = () => {
          webApp.HapticFeedback.impactOccurred('light');
          // Прокрутка к поиску или фокус на поле поиска
          const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        };
        
        webApp.MainButton.onClick(handleSearchClick);
      } else if (pathname.split('/').length >= 4) {
        // Страница статьи
        webApp.MainButton.setText('📤 Поделиться');
        webApp.MainButton.show();
        
        const handleShareClick = () => {
          webApp.HapticFeedback.notificationOccurred('success');
          
          // Получаем данные текущей страницы
          const title = document.title;
          const url = window.location.href;
          
          // Формируем сообщение для отправки
          const shareText = `📚 ${title}\n\n🔗 ${url}`;
          
          // Используем Telegram API для отправки сообщения
          if (navigator.share) {
            navigator.share({
              title: title,
              text: shareText,
              url: url
            });
          } else {
            // Fallback: копируем в буфер обмена
            navigator.clipboard.writeText(shareText).then(() => {
              webApp.HapticFeedback.notificationOccurred('success');
              // Можно показать уведомление
            });
          }
        };
        
        webApp.MainButton.onClick(handleShareClick);
      }
    } else {
      // Главная страница
      webApp.MainButton.hide();
    }

    // Cleanup функция
    return () => {
      webApp.BackButton.hide();
      webApp.MainButton.hide();
    };
  }, [webApp, isTelegramEnvironment, pathname, router]);

  // Обработка закрытия приложения
  useEffect(() => {
    if (!webApp || !isTelegramEnvironment) return;

    const handleCloseApp = () => {
      webApp.close();
    };

    // Можно добавить логику для определенных действий
    // Например, при нажатии Escape или определенных условиях
    
    return () => {
      // Cleanup
    };
  }, [webApp, isTelegramEnvironment]);

  return null; // Этот компонент не рендерит UI
}

export default TelegramNavigation; 
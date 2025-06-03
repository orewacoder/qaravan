'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTelegram } from './TelegramWebApp';

export function TelegramNavigation() {
  const { webApp, isTelegramEnvironment } = useTelegram();
  const router = useRouter();
  const pathname = usePathname();
  const lastInternalPath = useRef<string>('/ru'); // Запоминаем последний внутренний путь

  useEffect(() => {
    if (!webApp || !isTelegramEnvironment) return;

    // Сохраняем текущий путь как последний внутренний
    if (pathname.startsWith('/ru') || pathname.startsWith('/uz')) {
      lastInternalPath.current = pathname;
    }

    // Определяем, нужно ли показывать кнопку "Назад"
    const isNotHomePage = pathname !== '/ru' && pathname !== '/uz' && pathname !== '/';
    
    if (isNotHomePage) {
      // Показываем кнопку "Назад"
      webApp.BackButton.show();
      
      // Настраиваем обработчик нажатия
      const handleBackClick = () => {
        try {
          // Проверяем, есть ли referrer из того же домена
          const currentOrigin = window.location.origin;
          const documentReferrer = document.referrer;
          
          // Если мы пришли с внешнего сайта или нет истории
          if (!documentReferrer || !documentReferrer.startsWith(currentOrigin)) {
            // Возвращаемся к разумной странице в зависимости от текущего пути
            const pathSegments = pathname.split('/').filter(Boolean);
            
            if (pathSegments.length >= 3) {
              // Если мы на странице статьи, идем к категории
              const lang = pathSegments[0];
              const category = pathSegments[1];
              router.push(`/${lang}/${category}`);
            } else if (pathSegments.length === 2) {
              // Если мы на странице категории, идем на главную
              const lang = pathSegments[0];
              router.push(`/${lang}`);
            } else {
              // Идем на главную
              router.push(lastInternalPath.current.startsWith('/uz') ? '/uz' : '/ru');
            }
            return;
          }

          // Пытаемся использовать стандартную навигацию назад
          if (window.history.length > 1) {
            // Проверяем, можем ли мы безопасно вернуться назад
            const canGoBack = window.history.state !== null || window.history.length > 2;
            
            if (canGoBack) {
              router.back();
            } else {
              // Fallback к логической навигации
              const pathSegments = pathname.split('/').filter(Boolean);
              
              if (pathSegments.length >= 3) {
                // С страницы статьи к категории
                const lang = pathSegments[0];
                const category = pathSegments[1];
                router.push(`/${lang}/${category}`);
              } else if (pathSegments.length === 2) {
                // С страницы категории на главную
                const lang = pathSegments[0];
                router.push(`/${lang}`);
              } else {
                router.push('/ru');
              }
            }
          } else {
            // Если истории совсем нет, идем на главную
            router.push(lastInternalPath.current.startsWith('/uz') ? '/uz' : '/ru');
          }
        } catch (error) {
          console.error('Navigation error:', error);
          // В случае ошибки всегда возвращаемся на главную
          router.push(lastInternalPath.current.startsWith('/uz') ? '/uz' : '/ru');
        }
      };
      
      webApp.BackButton.onClick(handleBackClick);
    } else {
      // Скрываем кнопку "Назад" на главной странице
      webApp.BackButton.hide();
    }

    // Настройка главной кнопки в зависимости от страницы
    if (pathname.includes('/ru/') || pathname.includes('/uz/')) {
      if (pathname.split('/').length >= 4) {
        // Страница статьи - показываем кнопку "Поделиться"
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
      } else {
        // Страница категории или главная - скрываем MainButton
        webApp.MainButton.hide();
      }
    } else {
      // Главная страница - скрываем MainButton
      webApp.MainButton.hide();
    }

    // Cleanup функция
    return () => {
      webApp.BackButton.hide();
      webApp.MainButton.hide();
    };
  }, [webApp, isTelegramEnvironment, pathname, router]);

  // Обработка событий навигации для лучшего UX
  useEffect(() => {
    if (!webApp || !isTelegramEnvironment) return;

    // Обработчик для события beforeunload (когда пользователь покидает страницу)
    const handleBeforeUnload = () => {
      // Сохраняем текущий путь в sessionStorage для возможного восстановления
      if (pathname.startsWith('/ru') || pathname.startsWith('/uz')) {
        sessionStorage.setItem('qaravan-last-path', pathname);
      }
    };

    // Обработчик для восстановления после возврата
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Страница была восстановлена из кэша
        const savedPath = sessionStorage.getItem('qaravan-last-path');
        if (savedPath && savedPath !== pathname) {
          // Возможно, нужно обновить состояние
          lastInternalPath.current = savedPath;
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [webApp, isTelegramEnvironment, pathname]);

  return null; // Этот компонент не рендерит UI
}

export default TelegramNavigation; 
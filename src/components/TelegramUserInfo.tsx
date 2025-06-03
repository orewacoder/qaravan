'use client';

import { useTelegram } from './TelegramWebApp';

export function TelegramUserInfo() {
  const { user, isTelegramEnvironment } = useTelegram();

  if (!isTelegramEnvironment || !user) {
    return null;
  }

  return (
    <div className="flex items-center space-x-1 sm:space-x-2 bg-blue-50 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full">
      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        {user.first_name?.[0]?.toUpperCase() || '👤'}
      </div>
      <span className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200 hidden sm:inline">
        {user.first_name} {user.last_name || ''}
      </span>
    </div>
  );
}

export default TelegramUserInfo; 
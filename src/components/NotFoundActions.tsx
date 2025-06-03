'use client';

export default function NotFoundActions() {
  return (
    <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
      <p>
        Если проблема повторяется, попробуйте{' '}
        <button 
          onClick={() => window.location.reload()} 
          className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          обновить страницу
        </button>
        {' '}или{' '}
        <button 
          onClick={() => window.history.back()} 
          className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          вернуться назад
        </button>
      </p>
    </div>
  );
} 
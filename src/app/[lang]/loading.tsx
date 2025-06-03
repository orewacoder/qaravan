export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
      {/* Main Loading Animation */}
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full"></div>
        </div>
        
        {/* Inner Ring */}
        <div className="absolute inset-2 w-8 h-8 border-2 border-purple-200 dark:border-purple-800 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Загрузка...
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Подготавливаем контент для вас
        </p>
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
} 
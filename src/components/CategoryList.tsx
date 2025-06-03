import Link from 'next/link';
import { getCategories } from '@/lib/content';
import { Locale } from '@/types';
import { getCategoryName, getCategoryIcon } from '@/lib/translations';

export default function CategoryList({ lang }: { lang: Locale }) {
  const categories = getCategories(lang);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => {
        const icon = getCategoryIcon(category);
        const name = getCategoryName(category, lang);
        
        return (
          <Link
            key={category}
            href={`/${lang}/${category}`}
            className="group block"
          >
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/80 dark:hover:bg-gray-800/80">
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              
              {/* Category Name */}
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {lang === 'uz' 
                  ? 'Bu kategoriyada QA sohasidagi muhim mavzular yoritilgan'
                  : 'В этой категории освещены важные темы в области QA'
                }
              </p>
              
              {/* Arrow */}
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                {lang === 'uz' ? 'Ko\'rish' : 'Смотреть'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
} 
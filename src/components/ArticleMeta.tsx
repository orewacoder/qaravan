import type { ArticleMeta } from '@/types';

export default function ArticleMeta({ meta }: { meta: ArticleMeta }) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
      <span aria-label="⏱">{meta.readingTime}</span>
      {meta.date && (
        <span aria-label="Дата публикации">
          {new Date(meta.date).toLocaleDateString(meta.lang === 'ru' ? 'ru-RU' : 'uz-UZ')}
        </span>
      )}
      {meta.tags.length > 0 && (
        <span>
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 mr-1"
            >
              #{tag}
            </span>
          ))}
        </span>
      )}
    </div>
  );
} 
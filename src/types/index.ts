export type Locale = 'ru' | 'uz';

export interface ArticleMeta {
  title: string;
  slug: string;
  category: string;
  fullPath?: string; // Полный путь для файлов в подпапках
  tags: string[];
  readingTime: string;
  lang: Locale;
  description?: string;
  date?: string;
}

export interface Article extends ArticleMeta {
  content: string;
} 
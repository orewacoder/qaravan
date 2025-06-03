// Для SSR и Node.js API нужны типы Node.js
import process from 'node:process';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Article, ArticleMeta, Locale } from '@/types';
import { cache } from 'react';

const CONTENT_ROOT: Record<Locale, string> = {
  ru: path.join(process.cwd(), 'qa_bible_ru'),
  uz: path.join(process.cwd(), 'qa_bible_uz')
};

function walkDir(dir: string, fileList: string[] = []): string[] {
  const files: string[] = fs.readdirSync(dir);
  files.forEach((file: string) => {
    // Исключаем служебные папки
    if (file.startsWith('.')) {
      return;
    }
    
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

export const getAllArticles = cache(async (lang: Locale): Promise<ArticleMeta[]> => {
  try {
    const contentPath = CONTENT_ROOT[lang];
    if (!contentPath || !fs.existsSync(contentPath)) {
      console.warn(`Content directory not found for language: ${lang}`);
      return [];
    }
    
    const files = walkDir(contentPath);
    return files.map((file: string) => {
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      const slug = path.basename(file, '.md');
      const relPath = path.relative(contentPath, file);
      const pathParts = relPath.split(path.sep);
      const [category] = pathParts;
      // Для файлов в подпапках сохраняем полный путь без расширения
      const fullPath = relPath.replace(/\.md$/, '');
      
      return {
        title: data.title || slug,
        slug,
        category,
        fullPath, // Добавляем полный путь
        tags: data.tags || [],
        readingTime: readingTime(raw).text,
        lang,
        description: data.description || '',
        date: data.date || ''
      };
    });
  } catch (error) {
    console.error(`Error loading articles for ${lang}:`, error);
    return [];
  }
});

export function getArticle(lang: Locale, category: string, slug: string): Article | null {
  // Сначала пробуем найти файл в корне категории
  let filePath = path.join(CONTENT_ROOT[lang], category, `${slug}.md`);
  
  // Если файл не найден, ищем во всех подпапках
  if (!fs.existsSync(filePath)) {
    const contentPath = CONTENT_ROOT[lang];
    const allFiles = walkDir(contentPath);
    const targetFile = allFiles.find(file => {
      const relPath = path.relative(contentPath, file);
      const fileSlug = path.basename(file, '.md');
      const fileCategory = relPath.split(path.sep)[0];
      return fileSlug === slug && fileCategory === category;
    });
    
    if (targetFile) {
      filePath = targetFile;
    } else {
      return null;
    }
  }
  
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const relPath = path.relative(CONTENT_ROOT[lang], filePath);
  const fullPath = relPath.replace(/\.md$/, '');
  
  return {
    title: data.title || slug,
    slug,
    category,
    fullPath,
    tags: data.tags || [],
    readingTime: readingTime(raw).text,
    lang,
    description: data.description || '',
    date: data.date || '',
    content
  };
}

export function getCategories(lang: Locale): string[] {
  return fs
    .readdirSync(CONTENT_ROOT[lang])
    .filter((f: string) => 
      fs.statSync(path.join(CONTENT_ROOT[lang], f)).isDirectory() && 
      !f.startsWith('.')
    );
}

export const getArticles = cache(async (lang: string) => {
  // Your existing article fetching logic
}); 
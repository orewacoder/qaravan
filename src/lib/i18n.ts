import { Locale } from '@/types';

export const locales: Locale[] = ['ru', 'uz'];
export const defaultLocale: Locale = 'ru';

export function isLocale(lang: string): lang is Locale {
  return ['uz', 'ru'].includes(lang);
} 
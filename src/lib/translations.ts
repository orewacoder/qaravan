import { Locale } from '@/types';

// Category icons mapping
export const categoryIcons: Record<string, string> = {
  'avtomatizaciya-beta': '🤖',
  'faq-dlya-novichkov': '❓',
  'mobilnoe-testirovanie': '📱',
  'obshee': '📚',
  'poleznye-ssylki': '🔗',
  'prakticheskaya-chast': '⚡',
  'sdlc-i-stlc': '🔄',
  'seti-i-okolo-nikh': '🌐',
  'test-dizain': '🎨',
  'testirovanie-v-raznykh-sferakh-oblastyakh-testing-different-domains': '🏢',
  'testovaya-dokumentaciya-i-artefakty-test-deliverablestest-artifacts': '📄',
  'vidy-metody-urovni-testirovaniya': '🔍'
};

// Category names mapping
export const categoryNames: Record<string, { uz: string; ru: string }> = {
  'avtomatizaciya-beta': { uz: 'Avtomatlashtirish', ru: 'Автоматизация' },
  'faq-dlya-novichkov': { uz: 'Yangilar uchun FAQ', ru: 'FAQ для новичков' },
  'mobilnoe-testirovanie': { uz: 'Mobil test', ru: 'Мобильное тестирование' },
  'obshee': { uz: 'Umumiy', ru: 'Общее' },
  'poleznye-ssylki': { uz: 'Foydali havolalar', ru: 'Полезные ссылки' },
  'prakticheskaya-chast': { uz: 'Amaliy qism', ru: 'Практическая часть' },
  'sdlc-i-stlc': { uz: 'SDLC va STLC', ru: 'SDLC и STLC' },
  'seti-i-okolo-nikh': { uz: 'Tarmoqlar', ru: 'Сети и около них' },
  'test-dizain': { uz: 'Test dizayni', ru: 'Тест-дизайн' },
  'testirovanie-v-raznykh-sferakh-oblastyakh-testing-different-domains': { uz: 'Turli sohalarda test', ru: 'Тестирование в разных сферах' },
  'testovaya-dokumentaciya-i-artefakty-test-deliverablestest-artifacts': { uz: 'Test hujjatlari', ru: 'Тестовая документация' },
  'vidy-metody-urovni-testirovaniya': { uz: 'Test turlari va usullari', ru: 'Виды, методы, уровни тестирования' }
};

// Helper function to get translated category name
export function getCategoryName(category: string, lang: Locale): string {
  return categoryNames[category]?.[lang] || category;
}

// Helper function to get category icon
export function getCategoryIcon(category: string): string {
  return categoryIcons[category] || '📁';
} 
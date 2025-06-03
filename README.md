# 🐪 QAravan – блог о пути к идеальному качеству

**QA как путешествие. Караван, который идёт к стабильному релизу. Без багов, но с приключениями.**

Современное веб-приложение для изучения методов и практик тестирования программного обеспечения. Поддерживает русский и узбекский языки.

## ✨ Особенности караванного путешествия

- 🌍 **Мультиязычность**: Поддержка русского и узбекского языков
- 🎨 **Современный дизайн**: Красивый UI с градиентами, анимациями и стеклянными эффектами
- 🌙 **Темная тема**: Автоматическое переключение между светлой и темной темами
- 🔍 **Умный поиск**: Быстрый поиск по статьям с автодополнением
- 📱 **Адаптивность**: Отлично работает на всех устройствах
- ⚡ **Высокая производительность**: Построено на Next.js 15 с App Router
- 🎯 **SEO-оптимизация**: Правильная структура для поисковых систем
- 🐪 **Караванный подход**: Пошаговое изучение QA с приключениями

## 🚀 Технологии

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + Custom Components
- **Language**: TypeScript
- **Content**: Markdown файлы
- **Search**: Algolia Autocomplete
- **Themes**: next-themes
- **Markdown**: react-markdown + remark/rehype plugins

## 📁 Структура проекта

```
├── src/
│   ├── app/                    # App Router страницы
│   │   ├── [lang]/            # Языковые маршруты
│   │   │   ├── [category]/    # Страницы категорий
│   │   │   └── [slug]/        # Страницы статей
│   │   └── api/               # API маршруты
│   ├── components/            # React компоненты
│   ├── lib/                   # Утилиты и хелперы
│   └── types/                 # TypeScript типы
├── qa_bible_ru/              # Контент на русском (караванные маршруты)
└── qa_bible_uz/              # Контент на узбекском (караванные маршруты)
```

## 🛠 Установка и запуск

1. **Клонирование репозитория**
```bash
git clone <repository-url>
cd qaravan
```

2. **Установка зависимостей**
```bash
npm install
```

3. **Запуск в режиме разработки**
```bash
npm run dev
```

4. **Сборка для продакшена**
```bash
npm run build
npm start
```

## 📝 Добавление контента

### Структура статей

Статьи хранятся в папках `qa_bible_ru/` и `qa_bible_uz/` в формате Markdown:

```markdown
---
title: "Название статьи"
description: "Краткое описание"
tags: ["тег1", "тег2"]
date: "2024-01-01"
---

# Содержание статьи

Ваш контент в формате Markdown...
```

### Добавление новой категории

1. Создайте папку в `qa_bible_ru/` и `qa_bible_uz/`
2. Добавьте соответствующие переводы в компоненты:
   - `src/components/CategoryList.tsx`
   - `src/app/[lang]/[category]/page.tsx`

## 🎨 Дизайн-система

### Цветовая палитра
- **Primary**: Blue (600-700)
- **Secondary**: Purple (600-700)
- **Accent**: Indigo (600-700)
- **Neutral**: Gray (100-900)

### Компоненты
- **Cards**: Стеклянные эффекты с backdrop-blur
- **Buttons**: Градиенты с hover-эффектами
- **Navigation**: Современные toggle-переключатели
- **Typography**: Градиентные заголовки

## 🔧 Конфигурация

### Языки
Настройка языков в `src/lib/i18n.ts`:
```typescript
export const locales = ['ru', 'uz'] as const;
export type Locale = typeof locales[number];
```

### Темы
Конфигурация тем в `src/app/layout.tsx` с использованием `next-themes`.

### Поиск
Настройка поиска в `src/components/SearchBar.tsx` с использованием Algolia Autocomplete.

## 📊 Производительность

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100%
- ♿ **Accessibility**: WCAG 2.1 AA

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - За отличный React framework
- [Tailwind CSS](https://tailwindcss.com/) - За удобную CSS-библиотеку
- [Algolia](https://www.algolia.com/) - За мощный поиск
- Сообществу QA за ценный контент

---

**QAravan** - Ваш караван в путешествии к идеальному качеству! 🐪🚀 
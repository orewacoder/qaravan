# 🤖 Настройка Telegram Web App для QAravan

## 📋 Шаги для локального тестирования

### 1. Установка ngrok (для публичного доступа к localhost)

#### Windows:
```bash
# Скачайте ngrok с https://ngrok.com/
# Или установите через scoop:
scoop install ngrok

# Или через chocolatey:
choco install ngrok
```

#### Регистрация и настройка:
```bash
# Зарегистрируйтесь на https://ngrok.com/
# Получите ваш authtoken
ngrok config add-authtoken YOUR_AUTHTOKEN
```

### 2. Запуск локального сервера

```bash
# В терминале проекта
npm run dev
```

### 3. Создание туннеля ngrok

```bash
# В новом терминале
ngrok http 3000
```

Вы получите URL вида: `https://abc123.ngrok.io`

### 4. Настройка бота в BotFather

Отправьте следующие команды @BotFather:

```
/setmenubutton
[выберите вашего бота]
🐪 QAravan
https://abc123.ngrok.io/ru
```

Также настройте команды:
```
/setcommands
[выберите вашего бота]
start - 🏠 Главная страница
help - ❓ Помощь
search - 🔍 Поиск статей
```

### 5. Настройка домена (опционально)

Если у вас есть собственный домен:
```
/setdomain
[выберите вашего бота]
https://your-domain.com
```

### 6. Тестирование функций

#### Основные возможности Web App:
- ✅ Автоматическая тема (светлая/темная)
- ✅ Кнопка "Назад" для навигации
- ✅ Главная кнопка для действий (Поиск/Поделиться)
- ✅ Тактильная обратная связь
- ✅ Отображение информации о пользователе
- ✅ Адаптивный дизайн

#### Тестовые сценарии:
1. **Главная страница**: Главная кнопка скрыта
2. **Страница категории**: Главная кнопка = "🔍 Поиск статей"
3. **Страница статьи**: Главная кнопка = "📤 Поделиться"
4. **Навигация**: Кнопка "Назад" работает корректно

### 7. Структура бота (пример кода)

```javascript
// bot.js
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => {
  ctx.reply(
    '🐪 Добро пожаловать в QAravan!\n\n' +
    'Караван знаний о QA и тестировании.\n' +
    'Выберите язык и начните путешествие!',
    Markup.inlineKeyboard([
      [
        Markup.button.webApp('🇷🇺 Русский', 'https://your-ngrok-url.ngrok.io/ru'),
        Markup.button.webApp('🇺🇿 O\'zbek', 'https://your-ngrok-url.ngrok.io/uz')
      ],
      [Markup.button.url('🌐 Открыть в браузере', 'https://your-ngrok-url.ngrok.io')]
    ])
  );
});

bot.command('help', (ctx) => {
  ctx.reply(
    '📚 QAravan - это библиотека знаний о QA\n\n' +
    '🔍 Поиск по статьям\n' +
    '📱 Мобильное тестирование\n' +
    '🤖 Автоматизация\n' +
    '🎨 Тест-дизайн\n' +
    'И многое другое!'
  );
});

bot.command('search', (ctx) => {
  ctx.reply(
    'Воспользуйтесь поиском в Web App:',
    Markup.inlineKeyboard([
      [Markup.button.webApp('🔍 Открыть поиск', 'https://your-ngrok-url.ngrok.io/ru')]
    ])
  );
});

bot.launch();
```

### 8. Развертывание в продакшен

#### Vercel (рекомендуется):
```bash
# Установка Vercel CLI
npm i -g vercel

# Развертывание
vercel

# Настройка домена в BotFather
/setmenubutton
[ваш бот]
🐪 QAravan
https://your-app.vercel.app/ru
```

#### Альтернативы:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

### 9. Отладка

#### Проверка в DevTools:
```javascript
// В консоли браузера
console.log(window.Telegram?.WebApp);
console.log(window.Telegram?.WebApp?.initDataUnsafe);
```

#### Типичные проблемы:
1. **HTTPS required**: ngrok автоматически предоставляет HTTPS
2. **CORS errors**: Настройте `next.config.js`
3. **Theme not applied**: Проверьте загрузку `telegram-web-app.js`

### 10. Полезные ссылки

- [Telegram Web App Documentation](https://core.telegram.org/bots/webapps)
- [BotFather Commands](https://core.telegram.org/bots#botfather)
- [ngrok Documentation](https://ngrok.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## 🚀 Быстрый старт

```bash
# 1. Запустить проект
npm run dev

# 2. В новом терминале - запустить ngrok
ngrok http 3000

# 3. Скопировать URL из ngrok
# 4. Настроить в BotFather
# 5. Тестировать в Telegram!
```

Удачи с запуском QAravan в Telegram! 🐪✨ 
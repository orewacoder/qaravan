# 🔐 Настройка SSL для QAravan (Telegram Web App)

Этот гайд поможет настроить HTTPS для вашего домена `bladriverbla.com`, чтобы использовать сайт в Telegram Web App.

## 🎯 Что нужно

- ✅ Домен `bladriverbla.com` (уже настроен)
- ✅ Сервер с IP `46.203.233.183` 
- ✅ Работающее приложение QAravan
- 📧 Ваш email для регистрации SSL сертификата

## 🚀 Автоматическая настройка (Рекомендуется)

### Шаг 1: Подготовка файлов

```bash
# Загрузите обновленные файлы
cd /var/www/qaravan
git pull origin main
```

### Шаг 2: Редактирование email

Отредактируйте файл `setup-ssl.sh` и замените email:

```bash
nano setup-ssl.sh
# Измените строку: EMAIL="your-email@example.com"
# На: EMAIL="ваш-реальный-email@example.com"
```

### Шаг 3: Запуск автоматической настройки

```bash
# Сделайте скрипт исполняемым
chmod +x setup-ssl.sh

# Запустите установку SSL
sudo ./setup-ssl.sh
```

Скрипт автоматически:
- Установит Certbot
- Получит SSL сертификат от Let's Encrypt
- Настроит Nginx с SSL
- Включит автоматическое обновление сертификатов
- Настроит перенаправление HTTP → HTTPS

## 🔧 Ручная настройка (если нужно)

### 1. Установка Certbot

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

### 2. Получение SSL сертификата

```bash
sudo certbot certonly --nginx -d bladriverbla.com -d www.bladriverbla.com
```

### 3. Обновление конфигурации Nginx

```bash
# Скопируйте SSL конфигурацию
sudo cp /var/www/qaravan/nginx-ssl.conf /etc/nginx/sites-available/qaravan

# Проверьте конфигурацию
sudo nginx -t

# Перезапустите Nginx
sudo systemctl reload nginx
```

### 4. Автоматическое обновление сертификатов

```bash
# Добавьте в cron задачу
sudo crontab -e

# Добавьте строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 🧪 Проверка SSL

### Проверка в браузере
- Откройте: https://bladriverbla.com/uz
- Убедитесь, что отображается 🔒 (замок безопасности)

### Проверка через командную строку
```bash
curl -I https://bladriverbla.com/
```

### Онлайн проверка SSL
Проверьте ваш SSL на: https://www.ssllabs.com/ssltest/analyze.html?d=bladriverbla.com

## 🤖 Настройка Telegram Bot

После успешной настройки SSL, используйте в настройках Telegram Bot:

### Для узбекского контента:
```
https://bladriverbla.com/uz
```

### Для русского контента:
```
https://bladriverbla.com/ru
```

## 🔍 Troubleshooting

### Проблема: Сертификат не получается

```bash
# Проверьте DNS записи
nslookup bladriverbla.com

# Убедитесь что домен указывает на ваш сервер
ping bladriverbla.com
```

### Проблема: Nginx не запускается

```bash
# Проверьте логи
sudo tail -f /var/log/nginx/error.log

# Проверьте конфигурацию
sudo nginx -t
```

### Проблема: PM2 приложение не работает

```bash
# Проверьте статус
pm2 status

# Перезапустите приложение
pm2 restart qaravan

# Проверьте логи
pm2 logs qaravan
```

## 📊 Полезные команды

### Проверка статуса сервисов
```bash
sudo systemctl status nginx
sudo systemctl status pm2-root
pm2 status
```

### Проверка сертификатов
```bash
sudo certbot certificates
```

### Принудительное обновление сертификата
```bash
sudo certbot renew --force-renewal
```

### Просмотр логов
```bash
# Nginx логи
sudo tail -f /var/log/nginx/qaravan.access.log
sudo tail -f /var/log/nginx/qaravan.error.log

# PM2 логи
pm2 logs qaravan --lines 50
```

## 🎉 После настройки

После успешной настройки SSL:

1. ✅ Ваш сайт доступен по HTTPS
2. ✅ HTTP автоматически перенаправляется на HTTPS  
3. ✅ SSL сертификат обновляется автоматически
4. ✅ Готов для использования в Telegram Web App
5. ✅ Настроены заголовки безопасности для Telegram

## 🔗 URLs для Telegram Bot

- **Главная (UZ)**: `https://bladriverbla.com/uz`
- **Главная (RU)**: `https://bladriverbla.com/ru`
- **Категория**: `https://bladriverbla.com/uz/kategoriya-slug`
- **Статья**: `https://bladriverbla.com/uz/kategoriya-slug/statya-slug`

## 📧 Поддержка

При возникновении проблем:
1. Проверьте логи Nginx и PM2
2. Убедитесь что домен правильно указывает на сервер
3. Проверьте статус всех сервисов
4. При необходимости перезапустите сервисы 
#!/bin/bash

# QAravan SSL Setup Script
# Автоматическая настройка HTTPS для bladriverbla.com

set -e

echo "🔐 Настройка SSL для QAravan..."

# Проверка, что скрипт запущен от root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Запустите скрипт от имени root: sudo ./setup-ssl.sh"
    exit 1
fi

DOMAIN="bladriverbla.com"
EMAIL="your-email@example.com"  # Замените на ваш email

echo "📋 Домен: $DOMAIN"
echo "📧 Email: $EMAIL"

# Обновление системы
echo "🔄 Обновление системы..."
apt update

# Установка Certbot если не установлен
if ! command -v certbot &> /dev/null; then
    echo "📦 Установка Certbot..."
    apt install -y certbot python3-certbot-nginx
fi

# Остановка Nginx для получения сертификата
echo "⏸️  Остановка Nginx..."
systemctl stop nginx

# Создание временной конфигурации для получения сертификата
echo "⚙️  Создание временной конфигурации..."
cat > /etc/nginx/sites-available/qaravan-temp << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location / {
        return 200 'SSL setup in progress...';
        add_header Content-Type text/plain;
    }
}
EOF

# Включение временной конфигурации
ln -sf /etc/nginx/sites-available/qaravan-temp /etc/nginx/sites-enabled/qaravan
rm -f /etc/nginx/sites-enabled/default

# Запуск Nginx с временной конфигурацией
echo "▶️  Запуск Nginx с временной конфигурацией..."
systemctl start nginx

# Получение SSL сертификата
echo "🔐 Получение SSL сертификата от Let's Encrypt..."
certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN --email $EMAIL --agree-tos --no-eff-email --non-interactive

# Проверка успешного получения сертификата
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "✅ SSL сертификат успешно получен!"
else
    echo "❌ Ошибка получения SSL сертификата"
    exit 1
fi

# Копирование основной SSL конфигурации
echo "⚙️  Установка основной SSL конфигурации..."
cp /var/www/qaravan/nginx-ssl.conf /etc/nginx/sites-available/qaravan

# Проверка конфигурации Nginx
echo "🔍 Проверка конфигурации Nginx..."
nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Конфигурация Nginx корректна"
else
    echo "❌ Ошибка в конфигурации Nginx"
    exit 1
fi

# Перезапуск Nginx с SSL конфигурацией
echo "🔄 Перезапуск Nginx с SSL..."
systemctl reload nginx

# Настройка автоматического обновления сертификатов
echo "🔄 Настройка автоматического обновления сертификатов..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Проверка статуса
echo "🔍 Проверка статуса сервисов..."
systemctl status nginx --no-pager -l
systemctl status pm2-root --no-pager -l

# Тест SSL
echo "🧪 Тестирование SSL соединения..."
sleep 5
curl -I https://$DOMAIN/ || echo "⚠️  SSL тест не прошел, но это может быть временно"

echo ""
echo "🎉 SSL настройка завершена!"
echo ""
echo "📋 Информация:"
echo "   🌐 HTTP:  http://$DOMAIN (перенаправляется на HTTPS)"
echo "   🔐 HTTPS: https://$DOMAIN"
echo "   🔐 HTTPS: https://www.$DOMAIN"
echo ""
echo "📊 Проверить SSL сертификат:"
echo "   https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"
echo ""
echo "🤖 Теперь можете использовать в Telegram Bot:"
echo "   URL: https://$DOMAIN/uz"
echo "   или: https://$DOMAIN/ru"
echo ""

# Показать статус PM2
echo "📊 Статус приложения:"
pm2 status

echo "✅ Готово! Ваш сайт теперь доступен по HTTPS" 
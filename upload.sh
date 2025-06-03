#!/bin/bash

# Скрипт загрузки QAravan на сервер
set -e

# Настройки сервера (измените под свои данные)
SERVER_USER="your-username"
SERVER_HOST="your-server-ip"
SERVER_PATH="/tmp/qaravan.tar.gz"

echo "📦 Создаем архив проекта..."

# Создаем архив проекта
tar -czf qaravan.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude="*.log" \
  .

echo "📤 Загружаем архив на сервер..."

# Загружаем архив на сервер
scp qaravan.tar.gz $SERVER_USER@$SERVER_HOST:$SERVER_PATH

echo "✅ Архив загружен на сервер!"
echo ""
echo "🚀 Теперь на сервере выполните:"
echo "  cd /var/www/qaravan"
echo "  ./deploy.sh"
echo ""
echo "🔧 Или подключитесь к серверу:"
echo "  ssh $SERVER_USER@$SERVER_HOST"

# Удаляем локальный архив
rm -f qaravan.tar.gz
echo "🧹 Локальный архив очищен" 
#!/bin/bash

# Скрипт автоматического деплоя QAravan через Git
set -e

PROJECT_DIR="/var/www/qaravan"
REPO_URL="https://github.com/your-username/qaravan.git" # Замените на ваш URL репозитория
BRANCH="main" # или master

echo "🚀 Начинаем Git-деплой QAravan..."

# Проверяем, инициализирован ли Git репозиторий
if [ ! -d "$PROJECT_DIR/.git" ]; then
    echo "📥 Клонируем репозиторий впервые..."
    
    # Создаем директорию проекта если не существует
    sudo mkdir -p $PROJECT_DIR
    sudo chown -R $USER:$USER $PROJECT_DIR
    
    # Клонируем репозиторий
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
else
    echo "📁 Репозиторий уже существует, обновляем..."
    cd $PROJECT_DIR
    
    # Останавливаем приложение
    echo "📦 Останавливаем приложение..."
    pm2 stop qaravan || true
    
    # Создаем резервную копию текущей версии
    echo "💾 Создаем резервную копию..."
    BACKUP_DIR="/var/backups/qaravan-$(date +%Y%m%d_%H%M%S)"
    sudo cp -r $PROJECT_DIR $BACKUP_DIR || true
    echo "💾 Резервная копия: $BACKUP_DIR"
    
    # Сохраняем локальные изменения (если есть)
    git stash push -m "Auto-stash before deploy $(date)" || true
    
    # Обновляем код
    echo "📥 Обновляем код из репозитория..."
    git fetch origin
    git reset --hard origin/$BRANCH
fi

# Проверяем текущую ветку и коммит
echo "📍 Текущая ветка: $(git branch --show-current)"
echo "📍 Последний коммит: $(git log -1 --oneline)"

# Устанавливаем/обновляем зависимости
echo "📦 Устанавливаем зависимости..."
npm ci --production=false

# Собираем проект
echo "🏗️  Собираем проект..."
npm run build

# Очищаем cache Next.js
echo "🧹 Очищаем кэш..."
rm -rf .next/cache

# Делаем скрипты исполняемыми
chmod +x deploy.sh backup.sh || true

# Перезапускаем приложение
echo "🔄 Перезапускаем приложение..."
pm2 start ecosystem.config.js --env production || pm2 restart qaravan

# Сохраняем конфигурацию PM2
pm2 save

echo "✅ Git-деплой завершен успешно!"
echo "🌐 Приложение доступно на порту 3000"
echo ""
echo "📊 Полезные команды:"
echo "  pm2 status              - статус приложения"
echo "  pm2 logs qaravan        - логи приложения"
echo "  pm2 monit               - мониторинг ресурсов"
echo "  git log --oneline -10   - последние 10 коммитов"
echo "  git status              - статус репозитория" 
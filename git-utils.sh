#!/bin/bash

# Git утилиты для QAravan
set -e

PROJECT_DIR="/var/www/qaravan"

# Функция для показа помощи
show_help() {
    echo "🐪 Git утилиты для QAravan"
    echo ""
    echo "Использование: $0 [команда]"
    echo ""
    echo "Команды:"
    echo "  deploy          - Быстрый деплой с Git"
    echo "  rollback [n]    - Откат на n коммитов назад (по умолчанию 1)"
    echo "  status          - Статус Git и PM2"
    echo "  logs            - Показать логи Git и приложения"
    echo "  backup          - Создать резервную копию"
    echo "  restart         - Перезапустить приложение"
    echo "  update-deps     - Обновить зависимости"
    echo ""
    echo "Примеры:"
    echo "  $0 deploy                 - Деплой последней версии"
    echo "  $0 rollback 3            - Откат на 3 коммита назад"
    echo "  $0 status                - Показать статус"
}

# Функция деплоя
deploy() {
    echo "🚀 Быстрый Git-деплой..."
    cd $PROJECT_DIR
    ./deploy.sh
}

# Функция отката
rollback() {
    local commits=${1:-1}
    echo "⏪ Откат на $commits коммит(ов) назад..."
    
    cd $PROJECT_DIR
    
    # Останавливаем приложение
    pm2 stop qaravan || true
    
    # Получаем хеш коммита для отката
    local target_commit=$(git rev-parse HEAD~$commits)
    echo "📍 Откатываемся к коммиту: $target_commit"
    
    # Создаем бэкап текущего состояния
    local backup_branch="backup-$(date +%Y%m%d_%H%M%S)"
    git branch $backup_branch
    echo "💾 Создана backup ветка: $backup_branch"
    
    # Выполняем откат
    git reset --hard $target_commit
    
    # Переустанавливаем зависимости и пересобираем
    npm ci
    npm run build
    
    # Запускаем приложение
    pm2 start qaravan
    
    echo "✅ Откат завершен успешно!"
    echo "📍 Текущий коммит: $(git log -1 --oneline)"
}

# Функция статуса
status() {
    echo "📊 Статус QAravan"
    echo "================="
    
    cd $PROJECT_DIR
    
    echo ""
    echo "📂 Git статус:"
    echo "Ветка: $(git branch --show-current)"
    echo "Коммит: $(git log -1 --oneline)"
    echo "Статус: $(git status --porcelain | wc -l) измененных файлов"
    
    echo ""
    echo "🚀 PM2 статус:"
    pm2 status
    
    echo ""
    echo "💾 Доступные бэкапы:"
    ls -la /var/backups/ | grep qaravan | tail -5 || echo "Нет бэкапов"
}

# Функция логов
logs() {
    echo "📋 Логи QAravan"
    echo "==============="
    
    cd $PROJECT_DIR
    
    echo ""
    echo "📂 Последние 5 коммитов:"
    git log --oneline -5
    
    echo ""
    echo "🚀 PM2 логи (последние 20 строк):"
    pm2 logs qaravan --lines 20
}

# Функция бэкапа
backup() {
    echo "💾 Создание резервной копии..."
    cd $PROJECT_DIR
    ./backup.sh
}

# Функция перезапуска
restart() {
    echo "🔄 Перезапуск приложения..."
    pm2 restart qaravan
    pm2 status
}

# Функция обновления зависимостей
update_deps() {
    echo "📦 Обновление зависимостей..."
    cd $PROJECT_DIR
    
    pm2 stop qaravan
    npm update
    npm audit fix --force || true
    npm run build
    pm2 start qaravan
    
    echo "✅ Зависимости обновлены!"
}

# Основная логика
case "${1:-help}" in
    deploy)
        deploy
        ;;
    rollback)
        rollback $2
        ;;
    status)
        status
        ;;
    logs)
        logs
        ;;
    backup)
        backup
        ;;
    restart)
        restart
        ;;
    update-deps)
        update_deps
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "❌ Неизвестная команда: $1"
        echo ""
        show_help
        exit 1
        ;;
esac 
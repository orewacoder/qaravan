#!/bin/bash

# Скрипт резервного копирования QAravan
BACKUP_DIR="/var/backups/qaravan"
PROJECT_DIR="/var/www/qaravan"
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="qaravan_backup_$DATE.tar.gz"

echo "🔄 Создаем резервную копию..."

# Создаем директорию для бэкапов
sudo mkdir -p $BACKUP_DIR

# Создаем архив проекта
sudo tar -czf "$BACKUP_DIR/$BACKUP_NAME" \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.git' \
  -C /var/www qaravan

echo "✅ Резервная копия создана: $BACKUP_DIR/$BACKUP_NAME"

# Удаляем старые бэкапы (старше 30 дней)
sudo find $BACKUP_DIR -name "qaravan_backup_*.tar.gz" -type f -mtime +30 -delete

echo "🧹 Старые резервные копии очищены" 
# 🚀 Установка QAravan на Debian сервер (Git-based) 

Профессиональное развертывание приложения QAravan на Debian сервере с использованием Git.

## 🎯 Почему Git - лучший выбор?

- ✅ **Версионность** - полная история изменений
- ✅ **Автоматизация** - простые обновления через `git pull`
- ✅ **Откат** - можно вернуться к любой версии
- ✅ **Безопасность** - код всегда в Git репозитории
- ✅ **CI/CD** - автоматический деплой через GitHub Actions
- ✅ **Командная работа** - несколько разработчиков

## 📋 Требования

- Debian 10+ (или Ubuntu 18.04+)
- Root или sudo доступ
- Минимум 1GB RAM
- 10GB свободного места на диске
- **Git репозиторий** (GitHub, GitLab, etc.)

## 🛠 Шаг 1: Подготовка сервера

Подключитесь к серверу и выполните:

```bash
# Обновляем систему
sudo apt update && sudo apt upgrade -y

# Устанавливаем необходимые пакеты
sudo apt install curl wget gnupg2 software-properties-common apt-transport-https ca-certificates git -y

# Устанавливаем Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Проверяем версии
node --version  # должно быть v20.x.x
npm --version   # должно быть 10.x.x
git --version   # должно быть 2.x.x

# Устанавливаем PM2 глобально
sudo npm install -g pm2

# Устанавливаем Nginx
sudo apt install nginx -y

# Проверяем статус Nginx
sudo systemctl status nginx
```

## 🔧 Шаг 2: Настройка Git на сервере

```bash
# Создаем SSH ключ для Git (если нужно)
ssh-keygen -t ed25519 -C "server@your-domain.com"

# Показываем публичный ключ (добавьте в GitHub/GitLab)
cat ~/.ssh/id_ed25519.pub

# Или настраиваем Git с токеном доступа
git config --global user.name "Server User"
git config --global user.email "server@your-domain.com"
```

## 📦 Шаг 3: Создание Git репозитория

### На GitHub:
1. Создайте новый репозиторий "qaravan"
2. Добавьте SSH ключ сервера в Deploy Keys
3. Скопируйте URL репозитория

### Локально (на вашем компьютере):

```bash
# Инициализируем Git (если еще не сделано)
git init
git add .
git commit -m "🚀 Initial commit: QAravan project"

# Добавляем remote origin
git remote add origin https://github.com/your-username/qaravan.git

# Пушим код
git branch -M main
git push -u origin main
```

## 🚀 Шаг 4: Git-деплой на сервер

```bash
# Создаем директории
sudo mkdir -p /var/www/qaravan
sudo mkdir -p /var/log/pm2
sudo mkdir -p /var/backups/qaravan

# Устанавливаем права доступа
sudo chown -R $USER:$USER /var/www/qaravan
sudo chown -R $USER:$USER /var/log/pm2

# Клонируем репозиторий
git clone https://github.com/your-username/qaravan.git /var/www/qaravan
cd /var/www/qaravan

# Делаем скрипты исполняемыми
chmod +x deploy.sh backup.sh git-utils.sh

# Обновляем URL репозитория в deploy.sh
nano deploy.sh
# Замените: REPO_URL="https://github.com/your-username/qaravan.git"

# Первый деплой
./deploy.sh
```

## 🤖 Шаг 5: Настройка автоматического деплоя (GitHub Actions)

### На GitHub:
1. Перейдите в Settings → Secrets and variables → Actions
2. Добавьте secrets:
   - `HOST` - IP адрес вашего сервера
   - `USERNAME` - имя пользователя на сервере
   - `PRIVATE_KEY` - содержимое файла `~/.ssh/id_rsa` (приватный ключ)
   - `PORT` - порт SSH (обычно 22)

### Проверка:
После каждого `git push` в ветку `main` будет автоматически запускаться деплой!

## 🌐 Шаг 6: Настройка Nginx

```bash
# Редактируем конфигурацию Nginx
sudo nano /var/www/qaravan/nginx.conf

# Измените your-domain.com на ваш домен или IP
# Затем скопируйте конфигурацию:

sudo cp /var/www/qaravan/nginx.conf /etc/nginx/sites-available/qaravan
sudo ln -s /etc/nginx/sites-available/qaravan /etc/nginx/sites-enabled/

# Удаляем дефолтный сайт (опционально)
sudo rm /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
sudo nginx -t

# Перезапускаем Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

## 🔄 Ежедневное использование

### Быстрые команды через git-utils.sh:

```bash
cd /var/www/qaravan

# Деплой последней версии
./git-utils.sh deploy

# Статус проекта
./git-utils.sh status

# Откат на 1 коммит назад
./git-utils.sh rollback

# Откат на 3 коммита назад
./git-utils.sh rollback 3

# Показать логи
./git-utils.sh logs

# Перезапустить приложение
./git-utils.sh restart

# Создать бэкап
./git-utils.sh backup

# Обновить зависимости
./git-utils.sh update-deps
```

### Обновление проекта:

```bash
# На локальном компьютере
git add .
git commit -m "✨ Новые изменения"
git push

# На сервере (или автоматически через GitHub Actions)
cd /var/www/qaravan
./deploy.sh

# Или через git-utils
./git-utils.sh deploy
```

## 🆘 Устранение проблем

### Git проблемы:
```bash
# Проверяем статус Git
cd /var/www/qaravan
git status
git log --oneline -5

# Сброс локальных изменений
git reset --hard origin/main

# Принудительное обновление
git fetch origin
git reset --hard origin/main
```

### Откат к предыдущей версии:
```bash
# Откат на 1 коммит
./git-utils.sh rollback

# Откат на конкретный коммит
git reset --hard COMMIT_HASH
npm ci && npm run build
pm2 restart qaravan
```

## 🔒 Безопасность Git

```bash
# Проверка SSH подключения к GitHub
ssh -T git@github.com

# Настройка приватного репозитория (рекомендуется)
# Добавьте в GitHub: Settings → Deploy keys → Add deploy key

# Использование Personal Access Token вместо пароля
git remote set-url origin https://YOUR_TOKEN@github.com/username/qaravan.git
```

## 📊 Мониторинг

```bash
# Веб-хуки для уведомлений
# Добавьте в GitHub: Settings → Webhooks → Add webhook
# URL: https://your-domain.com/api/webhook

# Настройка cron для автоматических бэкапов
sudo crontab -e
# Добавьте: 0 3 * * * /var/www/qaravan/backup.sh

# Мониторинг логов в реальном времени
pm2 logs qaravan --lines 50
tail -f /var/log/nginx/access.log
```

## 🎉 Готово!

Теперь у вас настроен профессиональный Git-based деплой:

- 🚀 **Автоматический деплой** при push в main
- ⏪ **Простой откат** к любой версии
- 📊 **Мониторинг** и логирование
- 💾 **Автоматические бэкапы**
- 🔄 **Простое обновление** одной командой

### Полезные ссылки:
- Ваш сайт: http://your-domain.com
- PM2 мониторинг: `pm2 monit`
- Git логи: `git log --oneline --graph`

**QAravan караван готов к путешествию с Git! 🐪📚🚀** 
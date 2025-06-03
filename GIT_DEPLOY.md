# 🚀 Быстрый Git-деплой QAravan

## ⚡ Инициализация проекта в Git

```bash
# 1. Создайте репозиторий на GitHub: https://github.com/new
# 2. На локальном компьютере:

git init
git add .
git commit -m "🚀 Initial commit: QAravan project"
git remote add origin https://github.com/your-username/qaravan.git
git branch -M main
git push -u origin main
```

## 🖥️ Первый деплой на сервер

```bash
# На Debian сервере:

# Подготовка
sudo apt update && sudo apt install nodejs npm git nginx -y
sudo npm install -g pm2

# Клонирование и деплой
git clone https://github.com/your-username/qaravan.git /var/www/qaravan
cd /var/www/qaravan
chmod +x *.sh

# Обновите URL в deploy.sh
nano deploy.sh  # REPO_URL="https://github.com/your-username/qaravan.git"

# Запуск
./deploy.sh
```

## 🔄 Ежедневное использование

```bash
# Локально - внесите изменения и запушьте:
git add .
git commit -m "✨ Новая фича"
git push

# На сервере - обновите:
cd /var/www/qaravan
./git-utils.sh deploy

# Или просто:
./deploy.sh
```

## 🤖 Автоматический деплой (GitHub Actions)

В GitHub репозитории:
1. **Settings** → **Secrets and variables** → **Actions**
2. Добавьте secrets:
   - `HOST` - IP вашего сервера
   - `USERNAME` - пользователь на сервере  
   - `PRIVATE_KEY` - SSH приватный ключ

Теперь каждый `git push` автоматически обновит сайт! 🎉

## 🛠️ Полезные команды

```bash
# Статус проекта
./git-utils.sh status

# Откат на предыдущую версию
./git-utils.sh rollback

# Логи приложения и Git
./git-utils.sh logs

# Перезапуск
./git-utils.sh restart
```

## 🎯 Результат

- ✅ Автоматический деплой при push
- ✅ Версионность и откат  
- ✅ Мониторинг и логи
- ✅ Профессиональный workflow

**Караван готов! 🐪🚀** 
# 🏥 Clinic Web — веб-приложение для записи к врачу

Простое fullstack-приложение, позволяющее пользователям записаться к врачу через веб-форму, а администратору просматривать список заявок.

🔗 Репозиторий: [alex-smail/clinic-web](https://github.com/alex-smail/clinic-web)

---

## 🚀 Возможности

- 📋 Запись на приём:
  - ФИО
  - Номер телефона
  - Жалоба (опционально)
- ✅ Проверка корректности ввода (например, номер телефона)
- 💾 Сохранение данных в MongoDB
- 👨‍⚕️ Просмотр всех заявок (для администратора)
- 📅 Формат даты: `дд.мм.гггг`

---

## 🛠️ Стек технологий

- **Frontend:** React, React Router, InputMask
- **Backend:** Node.js, Express
- **БД:** MongoDB + Mongoose
- **Дополнительно:** dotenv, chalk, fetch API

---

## 📁 Структура проекта

\`\`\`
clinic-web/
│
├── public/
├── dist/                     # Сборка фронтенда
├── src/
│   ├── components/           # Компоненты интерфейса
│   ├── pages/                # Страницы (форма, список пациентов)
│   ├── model/                # Mongoose-схемы (пациент, пользователь)
│   ├── controllers/          # Контроллеры для API
│   ├── config/               # Константы и настройки
│   └── utils/                # Утилиты (валидация, формат даты и др.)
├── server.js                 # Основной серверный файл Express
├── .env                      # Конфигурация среды
└── README.md
\`\`\`

---

## ⚙️ Установка и запуск

### 1. Клонировать проект:

\`\`\`bash
git clone https://github.com/alex-smail/clinic-web.git
cd clinic-web
\`\`\`

### 2. Установить зависимости:

\`\`\`bash
npm install
\`\`\`

### 3. Создать файл `.env`:

\`\`\`bash
touch .env
\`\`\`

Пример содержимого `.env`:

\`\`\`
PORT=3000
MONGODB_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/clinic
\`\`\`

### 4. Запустить сервер:

\`\`\`bash
node server.js
\`\`\`

> Сервер будет доступен по адресу: [http://localhost:3000](http://localhost:3000)

---
### 5. Скриншоты:

<div align="center">
  <img src="./src/assets/1.png" alt="img">
</div>

<div align="center">
  <img src="./src/assets/2.png" alt="img">
</div>

<div align="center">
  <img src="./src/assets/3.png" alt="img">
</div>

---

## 🧑‍💻 Автор

**Aleksey Zelenko**
GitHub: [alex-smail](https://github.com/alex-smail)

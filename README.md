# 🏥 Clinic Web — веб-приложение для записи к врачу

Простое fullstack-приложение, позволяющее пользователям записаться к врачу через веб-форму, а администратору просматривать список заявок.

🔗 Репозиторий: [alex-smail/clinic-web](https://github.com/alex-smail/clinic-web)

---

## 🚀 Возможности

-   📋 Запись на приём:
    -   ФИО
    -   Номер телефона
    -   Жалоба (опционально)
-   ✅ Проверка корректности ввода (например, номер телефона)
-   💾 Сохранение данных в MongoDB
-   👨‍⚕️ Просмотр всех заявок (для администратора)
-   📅 Формат даты: `дд.мм.гггг`

---

## 🛠️ Стек технологий

-   **Frontend:** React, React Router, InputMask
-   **Backend:** Node.js, Express
-   **БД:** MongoDB + Mongoose
-   **Дополнительно:** dotenv, chalk, fetch API

---

## 📁 Структура проекта

<pre>
	clinic-web/
	│
	├── client/                  # Клиентская часть (React + Vite)
	│   ├── public/              # Публичные файлы (favicon и др.)
	│   ├── src/
	│   │   ├── api/             # Запросы к серверу (fetch)
	│   │   ├── components/      # Повторно используемые UI-компоненты
	│   │   ├── pages/           # Страницы приложения (форма, авторизация, список)
	│   │   └── utils/           # Утилиты (валидация, формат даты и т.д.)
	│   ├── index.html           # HTML-шаблон
	│   └── vite.config.js       # Настройки Vite
	│
	├── server/                  # Серверная часть (Express + MongoDB)
	│   ├── src/
	│   │   ├── controllers/     # Логика для API (пациенты, авторизация)
	│   │   ├── model/           # Mongoose-схемы (пациент, пользователь)
	│   │   ├── config/          # Константы и конфиги (порт, переменные)
	│   │   └── server.js        # Точка входа сервера
	│   └── .env                 # Переменные окружения (MONGODB_URI и др.)
	│
	├── dist/                    # Сборка фронтенда (генерируется автоматически)
	├── package.json             # Скрипты и зависимости
	└── README.md                # Документация проекта

</pre>

---

## ⚙️ Установка и запуск

### 1. Клонировать проект:

<pre>
git clone https://github.com/alex-smail/clinic-web.git
cd clinic-web
</pre>

### 2. Установить зависимости:

<pre>
npm install
</pre>

### 3. Создать файл `.env` файл в папке `server/` и добавь путь:

<pre>
MONGODB_URI=mongodb+srv://логин:пароль@cluster0.iewtero.mongodb.net/patients?retryWrites=true&w=majority&appName=Cluster0
</pre>

Пример содержимого `.env`:

<pre>
PORT=3000
MONGODB_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/clinic
</pre>

### 4. Запустить сервер:

<pre>
npm run dev
</pre>

---

### 5. Скриншоты:

<div align="center">
  <img src="./client/src/assets/1.png" alt="img">
</div>

<div align="center">
  <img src="./client/src/assets/2.png" alt="img">
</div>

<div align="center">
  <img src="./client/src/assets/3.png" alt="img">
</div>

---

## 🧑‍💻 Автор

**Aleksey Zelenko**
GitHub: [alex-smail](https://github.com/alex-smail)

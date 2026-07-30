# Orders_products

Тестовое задание, реализованное на **React + TypeScript + Vite**.

## Возможности

- Авторизация по JWT
- Автоматическая авторизация при запуске приложения
- Защищенные маршруты (Protected Routes)
- Просмотр списка приходов
- Бесконечная прокрутка (Infinite Scroll)
- Просмотр детальной информации о приходе
- Подсчет количества продуктов и общей стоимости
- Удаление прихода с подтверждением
- WebSocket-счетчик активных пользователей
- Адаптивная архитектура Feature-Sliced Design (FSD)

---

## Стек технологий

### Frontend

- React 19
- TypeScript
- Vite
- Redux Toolkit
- RTK Query
- React Router
- SCSS Modules
- Bootstrap
- React Intersection Observer
- Socket.IO Client
- i18next

### Backend

- NestJS
- TypeScript
- JWT Authentication
- Socket.IO
- Swagger

---

## Структура проекта

```
src
│
├── app
├── pages
├── widgets
├── features
├── entities
├── shared
└── assets
```

Проект построен по принципам **Feature-Sliced Design (FSD)**.

---

## Основной функционал

### Авторизация

При первом запуске приложения автоматически выполняется вход.

JWT-токен сохраняется в LocalStorage и используется для последующих запросов.

---

### Orders

- получение списка приходов;
- пагинация;
- Infinite Scroll;
- просмотр деталей прихода;
- удаление прихода;
- отображение количества продуктов;
- отображение общей стоимости.

---

### Products

- просмотр списка продуктов;
- привязка продуктов к приходу;
- отображение цены;
- отображение статуса продукта.

---

### WebSocket

Верхняя панель отображает количество пользователей, одновременно работающих в приложении.

---

## Запуск проекта

### Frontend

Установка зависимостей

```bash
npm install
```

Запуск

```bash
npm run dev
```

## Backend

Проект использует отдельный NestJS API.

По умолчанию ожидается запуск сервера по адресу

```
http://localhost:3000
```

Swagger API

```
http://localhost:3000/api/docs
```

---
## Используемые команды

### Frontend

```bash
npm run dev
```

Запуск проекта

```bash
npm run build
```

Сборка production

```bash
npm run preview
```

Просмотр production сборки

```bash
npm run test
```

Запуск тестов

---

## Архитектурные решения

В проекте использованы следующие подходы:

- Feature-Sliced Design
- Redux Toolkit
- RTK Query
- Кастомные React Hooks
- SCSS Modules
- Компонентный подход
- Lazy Loading
- Infinite Scroll
- JWT Authentication
- WebSocket

---

## Реализованные кастомные хуки

- useInfiniteScroll
- useSessions

---

## Деплой

Frontend

Vercel="https://test-react-dzencode-beige.vercel.app/orders"

Backend

Render="https://test-react-dzencode-server.onrender.com/api/"

---

# Используемая стратегия ветвления

Проект разрабатывался с использованием **Git Flow**.

Основные ветки:

- **main** — стабильная версия проекта;
- **develop** — основная ветка разработки;
- **feature/*** — ветки для реализации отдельных задач.

## Автор

Maksym Osypchuk 
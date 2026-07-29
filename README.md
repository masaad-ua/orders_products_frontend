# Inventory

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
npm run lint
```

Проверка ESLint

```bash
npm run test
```

Запуск тестов

---

### Backend

```bash
npm run start
```

```bash
npm run start:dev
```

```bash
npm run build
```

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

## API

Основные эндпоинты

```
POST /api/auth/login

GET /api/orders

GET /api/orders/:id

DELETE /api/orders/:id

GET /api/products
```

Полная документация API доступна через Swagger.

---

## Деплой

Frontend

Vercel

Backend

NestJS

---

## Скриншоты

### Orders

> добавить скриншот

### Order Details

> добавить скриншот

### Delete Modal

> добавить скриншот

---

## Что можно улучшить

- Unit-тесты
- E2E тесты
- Виртуализация списков
- Темная тема
- Drag & Drop
- Фильтрация и поиск
- Создание и редактирование приходов
- Создание и редактирование продуктов

---

## Автор

Maksym Osypchuk
# GitHub User Search App

Простое React-приложение для поиска пользователей GitHub с отображением информации о пользователе и его репозиториях.

---

##  Стек технологий

- React + TypeScript  
- Vite (сборщик)  
- Vitest (юнит-тесты)  
- Playwright (e2e-тесты)  
- ESLint + Prettier (линтинг и форматирование)  
- Husky + Commitlint (хуки Git для проверки коммитов)  
- React Testing Library (юнит-тестирование компонентов)  

---

##  Структура проекта

- `src/` — исходный код приложения  
- `src/features/` — отдельные функциональные блоки (UserCard, RepoList, SearchInput)  
- `src/shared/lib/` — API и типы  
- `src/__tests__/` — юнит и e2e тесты  
- `.husky/` — git хуки  
- `vite.config.ts` — конфигурация Vite  
- `vitest.config.ts` — конфигурация Vitest (если есть)  
- `commitlint.config.js` — конфигурация commitlint  

---

## ⚡ Установка и запуск

1. Склонируй репозиторий:

    ```bash
    git clone <url_репозитория>
    cd <папка_проекта>
    ```

2. Установи зависимости:

    ```bash
    npm install
    ```

3. Запусти dev сервер:

    ```bash
    npm run dev
    ```

4. Открой в браузере:  
   `http://localhost:5173`

---

##  Тестирование

### Юнит-тесты (Vitest + React Testing Library)

Запуск:

```bash
npm run test


Режим watch:
npm run test:watch

E2E-тесты (Playwright)
Установи браузеры Playwright (если ещё не установлены):

npx playwright install
Запуск тестов:

npx playwright test
Запуск с UI:

npx playwright test --ui
Git хуки и контроль качества

Husky и Commitlint
Перед коммитом запускается линтер и/или тесты (в зависимости от настроек)
Проверяется формат сообщения коммита по стандарту Conventional Commits
Используемые скрипты (package.json)

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "lint": "eslint . --ext .ts,.tsx",
    "prepare": "husky install",
    "format": "prettier --write ."
  }
}
Полезные команды

npm run lint — проверить код линтером
npm run format — отформатировать код через prettier
npm run test — запустить юнит тесты
npx playwright test — запустить e2e тесты


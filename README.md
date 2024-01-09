# Интерфейс поиска пользователей на GitHub по логину.
Приложение использует API GitHub для получения данных пользователя и отображает их в список с пагинацией. Можно нажать на имя пользователя, чтобы просмотреть его данные профиля.
### Аттестация для SkyPro

Как добавить персональный токен GitHub:
Для увеличения лимита запросов к API GitHub можно добавить персональный токен GitHub в файл api. 

Перейдите по адресу https://github.com/settings/tokens и сгенерируйте новый персональный токен доступа с областью repo.
В директории проекта откройте файл api.js, расположенный в папке src/api/.
Замените значение переменной token на ваш персональный токен доступа.
## Примечания по локальному запуску проекта для разработки


Для клонирования репозитория выполните команду:

```bash
git clone https://github.com/natalikalinina1/skygithab-search-users
```

Перед запуском проекта необходимо установить зависимости:

```bash
npm install
```

Запуск проекта:

```bash
npm run start
```

Запуск тестов:

```bash
npm test
```

Проект будет запущен по адресу: http://localhost:3000

## Backend данные

Данные по пользователям берем с https://api.github.com/search/users?q={имя пользователя} (документация: https://developer.github.com/v3/search/#search-users).

## Стэк библиотек проекта

React
react-dom
react-redux
Styled-Components
Jest
axios
eslint
husky

## Назначение папок и файлов проекта

**/components** - компоненты общие для всего проекта
**/pages** - страницы приложения  
**/store** - файлы, относящиеся к управлению состоянием приложения
**/styles** - глобальные стили приложения
**/api** - функционал посвященный операциям с API (бэкэндом)  
src/index.js: главная точка входа приложения
src/App.js: основной компонент приложения

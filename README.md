#  Интерфейс поиска пользователей на GitHub по логину (Skygithab-search-users).
## Описание проекта:
Приложение использует API GitHub для получения данных пользователя и отображает их в приложении с пагинацией. Можно нажать на имя пользователя, чтобы просмотреть его данные профиля, перейти по ссылке на страницу профиля в GitHub, а также перейти на главную страницу GitHub нажав на логотип.
### Аттестация для SkyPro
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

Для увеличения лимита запросов к API GitHub можно добавить персональный токен GitHub в файл api.

Как добавить персональный токен GitHub:
Перейдите по адресу https://github.com/settings/tokens и сгенерируйте новый персональный токен доступа с областью repo.
В директории проекта откройте файл api.js, расположенный в папке src/api
Замените значение переменной token на ваш персональный токен доступа

## Backend данные
Данные по пользователям  (документация: https://developer.github.com/v3/search/#search-users).

## Стэк библиотек проекта
- React
- React DOM
- React Redux
- Redux Toolkit
- Styled Components
- Axios
- Jest
- Husky
- ESlint
- Babel

## Назначение папок и файлов проекта
**/components** - компоненты общие для всего проекта
**/pages** - страницы приложения  
**/store** - файл, относящийся к управлению состоянием приложения
**/styles** - глобальные стили приложения
**/api** - функционал посвященный операциям с API (бэкэндом)  
**/index**: главная точка входа приложения
**/App**: основной компонент приложения

## Структура и функционал приложения
- [x] поиск: по логину:
![images](https://raw.githubusercontent.com/natalikalinina1/skygithab-search-users/master/public/assets-githab/header.JPG)

Пользователь вводит логин и нажимает кнопку с иконкой лупы для поиска, а по клику на логотип, осуществляется переход на главную GitHab.  
Настроена валидация ввода:
![images](https://raw.githubusercontent.com/natalikalinina1/skygithab-search-users/master/public/assets-githab/searchvalid.JPG)
- [x] сортировка: по количеству репозиториев (возрастанию/убыванию):
![images](https://raw.githubusercontent.com/natalikalinina1/skygithab-search-users/master/public/assets-githab/main.JPG)
- [x] пагинация;
- [x] при клике на элемент открываются подробности (фото, ссылка на профиль, дата регистрации, количество репозиториев, количество подписчиков, страна, если указана):
![images](https://raw.githubusercontent.com/natalikalinina1/skygithab-search-users/master/public/assets-githab/clickmain.JPG)   


- [x] Также в проекте реализовано 3 юнит-теста.
- [x] Создана обработка ошибок сервера, в случае которых , пользователю отображается соответсвующая страница.


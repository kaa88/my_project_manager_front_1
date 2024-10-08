# TODO
+ переделать layout, чтобы скролился body
- добавить везде tsdoc
- LoginPage / RegisterPage не используются
- таски-сабтаски - отдельные таблицы в бд... когда создаю саб - отправляю 1 запрос по сабу, бэк создает запись, присваивает id, потом сразу идет в таблицу таска и записывает id туда (и возможно еще кол-во сабов, но можно при getTask запрашивать еще кол-во сабов)
- вынести страницы в src/pages, тк страница может содержать несколько фичей
- в каждый Page добавить PageTitlе, и убрать их из роутера
- убрать логику из страниц, они должны быть тонкими
- куда сунуть PageTitle? нужен PageDescription? может сделать через хуки?
- helloPage сделать как лендинг с intersection анимацией... можно добавить FAQ и инфо о проекте (см. пример buymeacoffee.com)

# Задачи фронт
+ верстка AuthLayout
+ верстка AccountLayout + sidebar
+ верстка Modal
+ сделать базовый ui-kit (button, input, spinner, checkbox/switch)
+- верстка форм login register
- функционал авторизации (register, log in, refresh)
- функционал сброса пароля (restore, restoreConfirm)
- верстка и функционал страницы Task (загрузка, сохранение)
- верстка TaskList
- верстка Kanban доски
- useFetching hook
- добавить DnD
- реализация нескольких досок
- верстка стр. настройки пользователя
- цветовые темы
- локализация (en,ru)
- добавить persist
- страница подтверждения почты
- страница сброса пароля
- чат
- поиск

==================================

# Notes
CRA, React, Redux toolkit, Redux Saga, scss (ui kit), own hook form

Страницы:
- вход / рег / подтв email / сброс пароля
- канбан
- список тасков (с фильтрами)
- редактирование таски
- настройки пользователя
- wiki
- календарь тасок и событий
- инфо о сервисе (как пользоваться)

Фичи:
- авторизация (мультисессия)
- настройки пользователя (имя, почта, фото, роль, профессия, контакты)
- роли пользователей (owner, admin, user)
- команды (фронт, бэк...)
- видимость тасок по ролям и командам
- таски, настройка, статусы, комменты, саб-таски, спринты (milestones)
- канбан доска с базовыми статусами + возможность добавлять статусы (колонки)
- добавл и удал досок
- поиск по таскам (и остальному)
- темы (Light, dark, colorful)
- языки (en, ru)
- чат (с отображением статуса "онлайн")
- срочные уведомления ("собрание через 5 минут")

Архитектура:
- api - объявление api, обработчики, типы
- features - логика, разделенная по категориям, включает специфичные страницы, крупные блоки, api funcs, store, utils
- form - объявление обработчика форм, настройки валидации
- router - объявление роутера, константы путей
- shared - общие функции, типы, хуки, ассеты...
- store - объявление redux, типизированные хуки, persist, контроль миграций
- styles - базовые стили, reset, переменные
- ui - интерфейс, лейауты, кит, стор для ui
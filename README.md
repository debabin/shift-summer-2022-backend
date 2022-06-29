# **Shift summer 2022 backend ☀️**

Данный репозиторий содержит backend для выполнения индивидуальных заданий. В данном репозитории вы можете есть routes для получения персонажей из вселленных **🧪 rick and mory** и **⚗️ breaking bad** , a также один post запрос.

## Системные требования

> необходимо скачать [**nodejs/npm**](https://nodejs.org/en/download/)

- **nodejs** > 16
- **npm** > 8

## Как запустить

Сначала нужно установить npm пакеты

```
npm i
```

После чего запустить сервер

```
npm i
```

## Если нет возможности скачать и запустить проект ?

Для таких случаях захостили сервер на [Heroku](https://dashboard.heroku.com/). Ссылка - https://shift-summer-2022-backend.herokuapp.com/

## Документация

- **🔥 project api** - https://shift-summer-2022-backend.herokuapp.com/api/
- **🧪 rick and mory** - https://rickandmortyapi.com/
- **⚗️ breaking bad** - https://breakingbadapi.com/

## Запросы

> base url - http://localhost:3000/api

### Order

- **POST** /create/order - запрос для создание заказа 📦
  - body - { order: object }

### Rick and morty

> чтобы запросы работали необходимо указать header authToken (любая строка)

- **GET** /rickAndMorty/characters/{characterNumber} - запрос возвращает персонажа из вселенной **⚗️ breaking bad**
  - page (int, optional)
- **GET** /rickAndMorty/characters/?page={number} - запрос возвращает персонажей из вселенной **🧪 rick and mory**
  - page (int, optional)

### Breaking bad

> чтобы запросы работали необходимо указать header authToken (любая строка)

- **GET** /rickAndMorty/characters/{characterNumber} - запрос возвращает персонажа из вселенной **🧪 rick and mory**
  - characterNumber (int)
- **GET** /rickAndMorty/characters/?page={number} - запрос возвращает персонажей из вселенной **⚗️ breaking bad**
  - page (int, optional)

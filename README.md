# Innowise Lab Internship: Level 1: Clever to-do list

## [Task](https://mail.google.com/chat/u/2/?zx=mki4ph6vn9e9#chat/space/AAAAg3mEYtY)

## How to run the app:

1. Clone this repo

```
$git clone https://github.com/mikepetrusha/innowise-lab-internship-level-1-clever-to-do-list.git
```

2. Open the directory in code editor
3. Run `$ npm install` to install all the dependencies
4. Run app with `$ npm run start` to run the app in your browser

## Additional scripts
- `$ npm run test` runs the tests
- `$ npm run build` builds the app for production to the `dist` folder

## Database snapshot
<img width="994" alt="image" src="https://user-images.githubusercontent.com/87857659/210250615-940f6b75-4afa-463d-8994-f08f4a472fab.png">


## Application stack
- React 
- Firebase
- react-router-dom
- yup
- moment
- Prettier
- ESLint

## Folders structure
```
📦src
 ┣ 📂api
 ┃ ┗ 📜firebase.config.js
 ┣ 📂components
 ┃ ┣ 📂Calendar
 ┃ ┃ ┣ 📜Calendar.css
 ┃ ┃ ┗ 📜Calendar.jsx
 ┃ ┣ 📂CalendarItem
 ┃ ┃ ┣ 📜CalendarItem.css
 ┃ ┃ ┗ 📜CalendarItem.jsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂RemoveButton
 ┃ ┃ ┗ 📜RemoveButton.jsx
 ┃ ┣ 📂Scroller
 ┃ ┃ ┣ 📜Scroller.css
 ┃ ┃ ┗ 📜Scroller.jsx
 ┃ ┣ 📂TodoItem
 ┃ ┃ ┣ 📜TodoItem.css
 ┃ ┃ ┗ 📜TodoItem.jsx
 ┃ ┗ 📂TodoList
 ┃ ┃ ┣ 📜TodoList.css
 ┃ ┃ ┗ 📜TodoList.jsx
 ┣ 📂contexts
 ┃ ┣ 📜AuthContext.jsx
 ┃ ┗ 📜TodoContext.jsx
 ┣ 📂pages
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📜Dashboard.css
 ┃ ┃ ┗ 📜Dashboard.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜Todo.css
 ┃ ┃ ┗ 📜Todo.jsx
 ┃ ┣ 📜SigninPage.jsx
 ┃ ┗ 📜SignupPage.jsx
 ┣ 📂router
 ┃ ┗ 📜AppRoute.jsx
 ┣ 📂utils
 ┃ ┗ 📜PickDate.js
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```


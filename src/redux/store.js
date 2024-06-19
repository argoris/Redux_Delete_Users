import {configureStore} from '@reduxjs/toolkit';
import { counterReducer } from './reducer/counterReducer';
import usersReducer from './reducer/usersReducer';
import postsReducer from "./reducer/postsReducer";

export default configureStore({
    reducer:{
        counter: counterReducer,
        users: usersReducer,
        posts: postsReducer
    }
})

// ! configureStore() - це спеціальна річ.
// ! configureStore - це функція з бібліотеки Redux Toolkit, яка використовується для створення Redux Store у додатку.
// ! Redux Store - це об'єкт, який зберігає глобальний стан додатку. Він дозволяє управляти станом централізовано і забезпечує...
// ! ...легкий доступ до даних з різних компонентів.
// ! configureStore спрощує процес налаштування Store порівняно зі стандартним Redux. Вона автоматично об'єднує редюсери...
// ! ...(reducers), додає деякі розширення за замовчуванням (такі як Redux DevTools) та дозволяє легко налаштовувати додаткові...
// ! ...параметри.
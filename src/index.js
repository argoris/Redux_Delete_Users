import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./reduxMain/store";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/indexRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

// ! Імпортуємо Provider import {Provider} from 'react-redux';
// ! Імпортуємо store import store from './redux/store';

// ! 2) Щоб елементи (element) відображалися ми повинні кинути в рутовий індех (index.js) "<RouterProvider/>", і в цю коипоненту...
// ! ...ми повинні в (route) прокинути роути (routes) "<RouterProvider route={routes} />"

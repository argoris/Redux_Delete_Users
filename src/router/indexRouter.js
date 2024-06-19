// ! 1) Cтворюємо базу роутів за допомогою функції "createBrowserRouter()" і імпортуємо її з 'react-router-dom'.
// ! 2) Щоб елементи (element) відображалися ми повинні кинути в рутовий індех (index.js) "<RouterProvider/>", і в цю коипоненту...
// ! ...ми повинні в (route) прокинути роути (routes) "<RouterProvider route={routes} />"
// * ---------------------------------------------------------------------
import { Link, createBrowserRouter } from "react-router-dom";
import RouterDom from "../RouterDom";
import Home from "../pagesRouterDom/Home/Home";
import Users from "../pagesRouterDom/Users/Users";
import About from "../pagesRouterDom/About/About";
import { Button, Result } from "antd";
import UserPage from "../pagesRouterDom/UserPage/UserPage";

export const routes = createBrowserRouter([
  {
    path: "/", //! Шлях
    element: <RouterDom />, //! Елмент який відображає шлях
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: 'users/:userId',
        element: <UserPage/>
      },
      {
        path: "about",
        element: <About />,
        // ! loader: - допоміжні елементи
        // ! action: - допоміжні елементи
      },
    ],
  },
  {
    //! Коли переходимо на не існуючу сторінку.
    path: "*",
    element: (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={'/home'}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    ),
  },
]);

// ? Дивитись документацію "https://reactrouter.com". Початок в "tutorial" - https://reactrouter.com/en/main/start/tutorial
// ! React router dom - це певна маршрутизація (певна бібліотека), яка бде вирішувати цю маршрутизацію.
// ! Є два поняття: маршрутизація і роутинг. Вони схожі, тільки мають мінімальну відмінність і обидва означають те, як ми будемо...
// ! ...переходити по наших сторінках.
// * РОУТИНГ. Він визначає, яка частина мого сайту або додатку, буде показуватись на екрані при певному URL. Тобто, URL...
// * ...змінюється і частина нашого додатку теж змінюється, і саме вона визначає яка частина нашого додатку буде показуватись.
// ! Головне правило, в тому, що сторінка не перезавантажується.
// ! React router dom - Це бібліотека (пакет), яка надає засоби для реалізації цього роутингу.
// ! Основні компоненти: 1) Браузер роутер (<BrowserRouter>). 2) Роут (<Route></Route>). 3) Лінк (<Link></Link>).

// ? Покрокове створення.
// ! 1) Спочатку створюємо папку "router" з файлом "indexRouter" в якому створюємо цілу базу роутів за допомогою...
// ! ..."createBrowserRouter()". Це повинен бути масив.
// ! 2) Щоб елементи (element) відображалися ми повинні кинути в рутовий індех (index.js) "<RouterProvider/>", і в цю коипоненту...
// ! ...ми повинні в (route) прокинути роути (routes) "<RouterProvider route={routes} />"

// ! useParams() - при кліку на певного юзера, цей хук, виборає "id" того юзера і відображає контент.

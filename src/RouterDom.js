import { Breadcrumb, Button, Layout, Menu, Row, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserOutlined, HomeOutlined, SettingOutlined } from "@ant-design/icons";

const breadcrumbNameMap = {
  "/users": "users",
  "/users/ddc3": "Application ddc3",
};

const RouterDom = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("home");
    }
  }, []);

  const pathSnippets = location.pathname.split("/").filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((value, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{value}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">root</Link>,
      key: "home",
    },
  ].concat(extraBreadcrumbItems);

  const items = [
    {
      label: <Link to={"home"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"users"}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      disabled: true,
    },
  ];

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      <Header style={{ color: "#fff" }}>
        <Menu
          selectedKeys={[location.pathname.split("/")[1]]}
          defaultSelectedKeys={[location.pathname.split("/")[1]]}
          mode="horizontal"
          items={items}
          theme="dark"
        />
      </Header>
      <Content style={{ padding: "20px 50px" }}>
        <Breadcrumb items={breadcrumbItems} />
        <Outlet />
      </Content>
      <Footer style={{ backgroundColor: "#001529", color: "#fff" }}>
        Footer
      </Footer>
    </Layout>
  );
};

// const RouterDom = () => {
//   return (
//     <>
//     <Row>
//         <Space>
//         <Link to={"/home"}>
//           <Button type="link">Home</Button>
//         </Link>
//         <Link to={"/users"}>
//           <Button type="link">Users</Button>
//         </Link>
//       </Space>
//     </Row>
//       <Outlet/>
//     </>
//   );
// }

export default RouterDom;

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
// ! 3) Додаємо тег "<link to={"/home"}></Link>". Компонента "<Link></Link>" повинна розміщуватись в будь якій компоненті, яка...
// ! ...знаходиться в компоненті "<RouterProvider router={routes} />"
// ! 4) Додаємо тег "<Outlet/>", який відповідає за відображення контенту сторінкu на яку ми переходимо.

// ! Є інші шляхи створення роутів (Стеціальні компоненти роути). В Документації Route/Route!
// ! useLocation() - спеціальний хук з react router dom, який при перезавантаженні сторінки, в "nav", залишає вказівник на якій...
// ! ...сторінці ми знаходимося.
// ! useNavigate() - спеціальний хук з react router dom, який перенаправляє (редиректить) на іншу сторінку.

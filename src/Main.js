import React, { useEffect, useState } from "react";
import {  Layout, Menu, message } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import UsersList from "./pagesMain/UsersList/UsersList";
import AddUser from "./pagesMain/AddUser/AddUser";

const Main = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [activePage, setActivePage] = useState()

  const success = (text) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const menuItems = [
    {
      key: "UsersList",
      label: "Users",
    },
    {
      key: "AddUser",
      label: "Add user",
    },
  ];

  function switchPages(page){
    // eslint-disable-next-line default-case
    switch (page) {
      case "AddUser": {
        return <AddUser success={success} setActivePage={setActivePage} />;
      }
      case "UsersList": {
        return <UsersList success={success} />;
      }
    }
  }

  return (
    <Layout className={"layout"} style={{ minHeight: "100vh" }}>
      {contextHolder}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          style={{
            width: "100%",
          }}
          onClick={(item) => {
            const page = switchPages(item.key);
            setActivePage(page);
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {activePage}
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Main;


// ! Redux використовуємо для того щоб простіше було прописати логіку додавання, редагування і видалення юзерів. логіку яка...
// ! ...була поза сайтом, щоб не прокидати юзерів пропсами, в кожну апку, через UseState. А завдяки Redux, я можу в будь якому...
// ! ...елементі моєї програми доступитись, через useSelector, до моєї data і там змінити її.
// ! Весь функціонал я прописую в store, action, types i reducers, i в index.js змінюємо як повинна відображатись App.

{/* <Row justify={"space-between"}>
  <Col span={20}>
    <Space wrap>
      {users.map((value) => (
        <Card
          onClick={() => callback(value)}
          style={{ cursor: "pointer" }}
          key={value.id}
        >
          <Typography.Text type={"secondary"}>{value.id}</Typography.Text>
          <Typography.Title>{value.username}</Typography.Title>
        </Card>
      ))}
    </Space>
  </Col>
  <Col span={4}>
    {!!activeUser.id && (
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={activeUser}
      >
        <Form.Item name={"username"} label={"username"}>
          <Input />
        </Form.Item>

        <Form.Item name={"password"} label={"password"}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type={"primary"}>Submit</Button>
        </Form.Item>
      </Form>
    )}
  </Col>
</Row>; */}
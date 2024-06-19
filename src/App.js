import React, { useEffect } from "react";
import { Button, Card, Col, Divider, Row, Space, Spin, Typography } from "antd";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getPost,
  getPosts,
  getUser,
  getUsers,
  increment,
} from "./redux/actions";

function App() {
  // ! Щоб змінювати дані, ми повинні на них підписатися, тобто ці дані звідкись отримати та зловити, тому ми використовумо...
  // ! ...спеціальні хуки (useDispatch())
  const dispatch = useDispatch();

  // ! Використовуємо хук, який бере дані з нашого стейту (useSelector())
  const counter = useSelector((state) => state.counter.data);

  // ! Users. All Users
  const users = useSelector(state => state.users.data)
  const user = useSelector(state => state.users.item)

  // ! Posts. All Posts
 const posts = useSelector(state => state.posts.data)
 const post = useSelector(state => state.posts.item)

  // ! Loading
  const loadingUsers = useSelector(state => state.users.loading)

  // ! Error
  const error = useSelector(state => state.users.error)

  // ! useEffect() викликається тоді коли все монтується. Коли App з'являється на сайті useEffect() спрацьовує.
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Row>
        <Divider>Users</Divider>
        <Col span={20}>
          <Space wrap>
            {loadingUsers ? (
              <Spin />
            ) : (
              users.map((value) => (
                <Card key={value.id} onClick={() => dispatch(getUser(value))}>
                  {value.username}
                </Card>
              ))
            )}
            {!!error && error.message}
          </Space>
        </Col>
        <Col>
          {
            <Card>
              <Typography.Title>{user.username}</Typography.Title>
            </Card>
          }
        </Col>
      </Row>
      <Row>
        <Divider>Posts</Divider>
        <Col span={20}>
          <Space wrap>
            {posts.map((value) => (
              <Card key={value.id} onClick={() => dispatch(getPost(value))}>
                {value.title}
              </Card>
            ))}
          </Space>
        </Col>
        <Col span={4}>
          {
            <Card>
              <Typography.Title>{post.title}</Typography.Title>
            </Card>
          }
        </Col>
      </Row>
      <Divider className={'divider-button'} style={{color: 'red'}} orientation={'left'} dashed>Counter Button</Divider>
      <Button onClick={() => dispatch(increment(counter))}>+</Button>
      {counter}
      <Button onClick={() => dispatch(decrement(counter))}>-</Button>
    </>
  );
}

// ! Counter Redux. Додавання і відніманн. Перевіряємо в консолі через вкладку Redux
// function App() {
//   // ! Щоб змінювати дані, ми повинні на них підписатися, тобто ці дані звідкись отримати та зловити, тому ми використовумо...
//   // ! ...спеціальні хуки (useDispatch())
//   const dispatch = useDispatch();

//   // ! Використовуємо хук, який бере дані з нашого стейту (useSelector())
//   const counter = useSelector((state) => state.counter.data);

//   return (
//     <Space className="App">
//       <Button onClick={() => dispatch(increment(counter))}>+</Button>
//       {counter}
//       <Button onClick={() => dispatch(decrement(counter))}>-</Button>
//     </Space>
//   );
// }

export default App;

// ! useDispatch() i useSelector() - це хуки, які вбудовані React Redux
// * --------------------------------------------------
// ! Спочатку ми використовуємо фунцію яка створює store.
// ! Redux - допоміжна бібліотека
// ! Redux - біблітека для керування стану нашого сайту (додатку), який інтегрується в нашій App. Ця бібліотека дозволяє нам...
// ! ...управляти складним станом додатку і забзпечує легкісь управління, прогнозованість станом у великих, складних сайтах або...
// ! ...додатках.
// ! Redux базується на концепції: один центральний стан, який зберігається у вигляді обєкту і змінюється за допомогою спеціальних...
// ! функцій, таких як екшени і редюсери, які обробляють ці дії.
// ! Redux - бібліотека, яка керує певними даними на нашому сайті, і ці дані зберігаються в одному великому стані, ніби один...
// ! ...центральний стан.
// ! В Redux є екшени і редюсери.
// ! Store - це центральне місце на сайті, в якому зберігаються всі наші дані.
// ! Store - це місце, де зберігаються дані (певний стан), і екшени - функіії, які змінюють цей стан.
// ! Інсталювати "npm install react-redux"
// ! Додати в Chrome "Redux DevTools"
// ! Інсталювати "npm install @reduxjs/toolkit"
// ! В index.js змінюємо " <React.StrictMode>" на "<Provider store={store}> <App /> </Provider>"

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="App">
//       Redux
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// }

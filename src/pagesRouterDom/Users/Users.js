import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { axiosRequest } from "../../reduxMain/actions";
import { Button, Empty, Space, Table } from "antd";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(axiosRequest("", "users", ""));
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "password",
      dataIndex: "password",
      key: "password",
    },
  ];

  return (
    <>
      <Link to={"/about"}>About</Link>
      <>
        <Table
          rowKey={(r) => r.id}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigate(`${record.id}`)
              }, 
            };
          }}
          dataSource={users}
          columns={columns}
          locale={{
            emptyText: (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
                <Link to={"/home"}>
                  <Button type="primary">Go to Home</Button>
                </Link>
              </Empty>
            ),
          }}
        />
      </>
    </>
  );
};

export default Users;

// ! useDispatch() - виводимо юзерів через useEffect(). Вони спочатку відображаються тільки в консолі в "Redux"
// ! useSelector((state) => state.users.data) - виводимо юзерів "users.map()" на моніторі.
// ! useNavigate() - при кліку на одного зюзерів ми переходимо на окрему сторінку. "onRow"
// ! navigate(`users/${record.id}`) - немає "/" перед users, тоді (http://localhost:3001/users/users/ddc3) до поточного посилання...
// ! ...додається "users/ddc3"
// ! navigate(`/users/${record.id}`) - є "/" перед users, тоді (http://localhost:3001/users/ddc3)

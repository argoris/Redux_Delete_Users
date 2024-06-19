import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { axiosRequest, clearError } from "../../reduxMain/actions";
import { Button, Descriptions, Space } from "antd";

const UserPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.item);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(axiosRequest({ id: userId }, "users", "get"));
  }, []);

  useEffect(() => {
    if (!!error) {
        dispatch(clearError());
      navigate('/users')
    }
  }, [error]);

  return (
    <>
      {!!user.id && (
        <Descriptions
          title={
            <Space>
              <span>User # ${user.id}</span>
              <Button
                onClick={() =>
                  dispatch(axiosRequest(user, "users", "delete")).then(() => {
                    navigate("/users");
                  })
                }
                danger
                type="text"
              >
                Delete
              </Button>
            </Space>
          }
        >
          <Descriptions.Item label="UserName">
            {user.username}
          </Descriptions.Item>
          <Descriptions.Item label="Password">
            {user.password}
          </Descriptions.Item>
        </Descriptions>
      )}
      <Link to={"/home"}>Home</Link>
    </>
  );
};

export default UserPage;

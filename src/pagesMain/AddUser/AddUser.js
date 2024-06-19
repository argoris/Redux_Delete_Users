import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useDispatch } from "react-redux";
import { axiosRequest } from "../../reduxMain/actions";
import UsersList from "../UsersList/UsersList";

const AddUser = ({ setActivePage, success }) => {
  const dispatch = useDispatch();
  const [form] = useForm();

  const onFinish = (values) => {
    dispatch(axiosRequest(values, "users", "post")).then(() => {
      setActivePage(<UsersList />);
    });
    success(values.username);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name={"username"} label={"username"}>
          <Input />
        </Form.Item>

        <Form.Item name={"password"} label={"password"}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type={"primary"}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddUser;

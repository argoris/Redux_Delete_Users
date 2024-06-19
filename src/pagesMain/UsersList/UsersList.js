import {
  Button,
  Col,
  Card,
  Typography,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
  Popconfirm
} from "antd";

import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../reduxMain/actions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;

const UsersList = ({ success }) => {
  // ! Drawer
  const [open, setOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue(activeUser);
  }, [activeUser]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    dispatch(axiosRequest({ ...values, id: activeUser.id }, "users", "put"));
    success(`${activeUser.username} is edit and has name ${values.username}`);
    onClose();
  };

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  useEffect(() => {
    dispatch(axiosRequest("", "users", ""));
  }, []);

  return (
    <>
      <Space wrap>
        {users.map((value) => (
          <Card
            onClick={() => {
              setActiveUser(value);
              showDrawer();
            }}
            style={{ cursor: "pointer" }}
            key={value.id}
          >
            <Typography.Text type={"secondary"}>{value.id}</Typography.Text>
            <Typography.Title>{value.username}</Typography.Title>
          </Card>
        ))}
      </Space>
      {!!activeUser && (
        <Drawer
          destroyOnClose
          title={`Edit ${activeUser.username}`}
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Popconfirm
                title={`Delete ${activeUser.username}`}
                description={`Are you sure to delete this user?`}
                onConfirm={()=>{
                    dispatch(axiosRequest(activeUser, "users", "delete")).then(
                      () => {
                        onClose();
                      }
                    )
                    success(`${activeUser.username} is delete!`)
                }}
                onCancel={()=>{
                    onClose()
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  danger
                  type={"primary"}
                >
                  Delete
                </Button>
              </Popconfirm >
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={() => form.submit()} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form
            form={form}
            initialValues={activeUser}
            layout="vertical"
            hideRequiredMark
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="username"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter user username",
                    },
                  ]}
                >
                  <Input placeholder="Please enter user username" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="password"
                  rules={[
                    {
                      required: true,
                      message: "Please enter password",
                    },
                  ]}
                >
                  <Input.Password
                    style={{
                      width: "100%",
                    }}
                    placeholder="Please enter password"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      )}
    </>
  );
};

export default UsersList;

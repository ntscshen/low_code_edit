/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:41:06
 * @LastEditTime: 2023-09-26 17:13:00
 * @FilePath: /low_code/src/pages/login/index.tsx
 * @Description:
 */
import { FC, useEffect } from 'react';
import styles from './index.module.less';
import { Link } from 'react-router-dom';
import { Space, Typography, Form, Input, Button, Checkbox } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { REGISTER_PATHNAME } from '@/Utils/constant';
import {
  deleteUserFromStorage,
  getUserInfoFromStorage,
  rememberUser,
} from '@/Utils';
const { Title } = Typography;

import '@/_mock/index.ts';
import axios from 'axios';

const Login: FC = () => {
  const [form] = Form.useForm();
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({
      username,
      password,
    });
  }, []);

  useEffect(() => {
    axios.get('/api/test').then((res) => console.log(res));
  }, []);

  const onFinish = (value: any) => {
    const { username, password, remember } = value || {};
    if (remember) {
      rememberUser(username, password); // 设置
    } else {
      deleteUserFromStorage(); // 删除
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          // initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
              >
                登录
              </Button>
              <Link to={REGISTER_PATHNAME}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

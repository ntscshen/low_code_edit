/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:41:29
 * @LastEditTime: 2023-09-25 17:31:41
 * @FilePath: /low_code/src/pages/register/index.tsx
 * @Description:
 */
import { FC } from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '@/Utils/constant';

const { Title } = Typography;

const Register: FC = () => {
  const onFinish = (value: any) => {
    console.log('🚀 ~ file: index.tsx:19 ~ onFinish ~ value:', value);
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>

      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '字符长度在 5-20 之间',
              },
              {
                pattern: /^\w+$/,
                message: '只能是数字字母下划线',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirm"
            dependencies={['password']} // 依赖于 password, password 变化，会重新触发 validator验证
            rules={[
              { required: true, message: '请再次输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(new Error('两次密码不一致'));
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
              >
                注册
              </Button>
              <Link to={LOGIN_PATHNAME}>已有账户，登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

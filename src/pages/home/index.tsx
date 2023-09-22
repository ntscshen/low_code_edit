/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:39:20
 * @LastEditTime: 2023-09-22 18:30:38
 * @FilePath: /low_code/src/pages/Home/index.tsx
 * @Description:
 */
import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'antd';

const Home: FC = () => {
  const nav = useNavigate();
  const clickHandler = () => {
    // nav('/login?l=100');
    nav({
      pathname: '/login',
      search: 'l=200',
    });
  };
  return (
    <div>
      Home
      <Button onClick={clickHandler}>登录</Button>
      <Link to="/register?r=10">注册</Link>
    </div>
  );
};

export default Home;

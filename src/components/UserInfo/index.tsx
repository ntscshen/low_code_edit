/*
 * @Author: ntscshen
 * @Date: 2023-09-22 23:19:27
 * @LastEditTime: 2023-09-22 23:25:36
 * @FilePath: /low_code/src/components/UserInfo/index.tsx
 * @Description:
 */
import { LOGIN_PATHNAME } from '@/Utils/constant';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const UserInfo: FC = () => {
  return (
    <>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </>
  );
};

export default UserInfo;

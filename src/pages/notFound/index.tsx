/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:43:34
 * @LastEditTime: 2023-09-23 17:50:14
 * @FilePath: /low_code/src/pages/notFound/index.tsx
 * @Description:
 */

import { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MANAGE_LIST_PATHNAME } from '@/Utils/constant';

const NotFound: FC = () => {
  const nav = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          type="primary"
          onClick={() => nav(MANAGE_LIST_PATHNAME)}
        >
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;

/*
 * @Author: ntscshen
 * @Date: 2023-09-22 16:01:59
 * @LastEditTime: 2023-09-22 19:05:13
 * @FilePath: /low_code/src/layouts/ManageLayout.tsx
 * @Description:
 */
import { FC } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button, Space, Divider } from 'antd';
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import styles from './ManageLayout.module.less';

const ManageLayout: FC = () => {
  const { pathname } = useLocation();
  console.log('🚀 ~ file: ManageLayout.tsx:21 ~ pathname:', pathname);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space wrap>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
          >
            创建问卷
          </Button>
          <Divider style={{ borderTop: '1px solid red' }} />
          <Link to="/manage/list">
            <Button
              type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
              size="large"
              icon={<BarsOutlined />}
            >
              我的问卷
            </Button>
          </Link>
          <Link to="/manage/star">
            <Button
              type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
              size="large"
              icon={<StarOutlined />}
            >
              星标问卷
            </Button>
          </Link>
          <Link to="/manage/trash">
            <Button
              type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
              size="large"
              icon={<DeleteOutlined />}
            >
              回收站
            </Button>
          </Link>
        </Space>
      </div>
      <div className={styles.right}>
        {/* Outlet 用来指定自路由被注入的位置 */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ManageLayout;

/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:56:26
 * @LastEditTime: 2023-09-22 23:26:25
 * @FilePath: /low_code/src/layouts/MainLayout.tsx
 * @Description:
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '@/components/Logo';
import UserInfo from '@/components/UserInfo';
import styles from './MainLayout.module.less';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            <UserInfo />
          </div>
        </Header>
        <Content className={styles.main}>
          <Outlet />
        </Content>
        <Footer className={styles.footer}>问卷 &copy; 1993 - 2035</Footer>
      </Layout>
    </>
  );
};

export default MainLayout;

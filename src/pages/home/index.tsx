/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:39:20
 * @LastEditTime: 2023-09-27 16:28:02
 * @FilePath: /low_code/src/pages/home/index.tsx
 * @Description:
 */
import { FC, useEffect } from 'react';
import { Button, Typography } from 'antd';
import { MANAGE_LIST_PATHNAME } from '@/Utils/constant';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();

  useEffect(() => {
    // 前端port http://localhost:5173/
    // 后端prot http://localhost:3001/
    // 跨域了
    fetch('/api/test')
      .then((res) => res.json())
      .then((data) => console.log('fetch data', data));
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
      </div>
      <div className={styles.info}>
        <Button
          type="primary"
          onClick={() => nav(MANAGE_LIST_PATHNAME)}
        >
          开始使用
        </Button>
      </div>
    </div>
  );
};

export default Home;

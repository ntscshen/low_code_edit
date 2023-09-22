import { FC } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
const { Title } = Typography;
import styles from './index.module.less';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <Link to="/">
      <Space className={styles.logo}>
        <Title>
          <EditOutlined />
        </Title>
        <Title>问卷</Title>
      </Space>
    </Link>
  );
};
export default Logo;

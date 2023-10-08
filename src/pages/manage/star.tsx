/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:45:58
 * @LastEditTime: 2023-10-08 18:09:15
 * @FilePath: /low_code/src/pages/manage/star.tsx
 * @Description:
 */
/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:49:31
 * @LastEditTime: 2023-09-23 22:18:15
 * @FilePath: /low_code/src/pages/question/Statistics/index.tsx
 * @Description:
 */

import { FC } from 'react';
import { useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import styles from './List.module.less';
import { Empty, Spin, Typography } from 'antd';
import ListSearch from '@/components/ListSearch';
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData';
import ListPage from '@/components/ListPage';
const { Title } = Typography;

const Star: FC = () => {
  useTitle('星标问卷');

  const { data = {}, loading } = useLoadQuestionListData({ isStar: true });
  const { list, total = 0 } = data;
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.context}>
          {!loading && list?.length === 0 && <Empty description="暂无数据" />}
          {list?.length > 0 &&
            list?.map((item: any) => {
              const { id } = item;
              return (
                <QuestionCard
                  key={id}
                  {...item}
                />
              );
            })}
        </div>
      </Spin>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  );
};

export default Star;

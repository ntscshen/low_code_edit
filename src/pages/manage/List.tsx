/*
 * @Author: ntscshen
 * @Date: 2023-09-21 22:06:24
 * @LastEditTime: 2023-09-28 16:53:20
 * @FilePath: /low_code/src/pages/manage/List.tsx
 * @Description:
 */

import { FC } from 'react';
import styles from './List.module.less';
import { useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import { Spin, Typography } from 'antd';
import ListSearch from '@/components/ListSearch';
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData';
const { Title } = Typography;

const List: FC = () => {
  useTitle('我的问卷');

  // const { loading, data } = useRequest(getQuestionListService);
  const { loading, data } = useLoadQuestionListData();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.context}>
          {/* {loading ? <Spin /> : ''} */}
          {data &&
            data.list.length > 0 &&
            data?.list.map((item: any) => {
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
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;

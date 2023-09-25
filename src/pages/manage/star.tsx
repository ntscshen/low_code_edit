/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:45:58
 * @LastEditTime: 2023-09-25 14:46:54
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

import { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import styles from './List.module.less';
import { Empty, Typography } from 'antd';
import ListSearch from '@/components/ListSearch';
const { Title } = Typography;

const rowQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: '2023-09-21 22:35:18',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '2023-09-20 21:35:18',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: true,
    answerCount: 1,
    createdAt: '2023-09-19 20:35:18',
  },
];

const Star: FC = () => {
  const [questionList] = useState(rowQuestionList);
  useTitle('星标问卷');
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
      <div className={styles.context}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map((item) => {
            const { id } = item;
            return (
              <QuestionCard
                key={id}
                {...item}
              />
            );
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;

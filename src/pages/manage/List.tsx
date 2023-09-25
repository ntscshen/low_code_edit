/*
 * @Author: ntscshen
 * @Date: 2023-09-21 22:06:24
 * @LastEditTime: 2023-09-23 22:35:20
 * @FilePath: /low_code/src/pages/manage/List.tsx
 * @Description:
 */

import { FC, useState } from 'react';
import styles from './List.module.less';
import { useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import { Typography } from 'antd';
import ListSearch from '@/components/ListSearch';
const { Title } = Typography;

const rowQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
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
    isStar: false,
    answerCount: 1,
    createdAt: '2023-09-19 20:35:18',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createdAt: '2023-09-19 19:35:18',
  },
];

const List: FC = () => {
  const [questionList] = useState(rowQuestionList);
  useTitle('我的问卷');

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}><ListSearch /></div>
      </div>
      <div className={styles.context}>
        {questionList.map((item) => {
          const { id } = item;
          return (
            <QuestionCard
              key={id}
              {...item}
            />
          );
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;

/*
 * @Author: ntscshen
 * @Date: 2023-09-18 17:53:46
 * @LastEditTime: 2023-09-18 18:15:28
 * @FilePath: /low_code/src/List.tsx
 * @Description:
 */
// import React, { FC } from 'react';
import type { FC } from 'react';
import QuestionCard from './components/QuestionCard.tsx';
import { QuestionListType } from './components/QuestionCard';
import './List.css';

const List: FC = () => {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
  ];
  return (
    <div>
      <h1>问卷列表页</h1>
      <ul>
        {questionList.map((item: QuestionListType) => {
          const { id, title, isPublished } = item;
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;

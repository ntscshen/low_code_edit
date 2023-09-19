/*
 * @Author: ntscshen
 * @Date: 2023-09-19 18:42:35
 * @LastEditTime: 2023-09-19 22:09:16
 * @FilePath: /low_code/src/List2.tsx
 * @Description:
 */
import { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard.tsx';
import { QuestionListType } from './components/QuestionCard.ts';
import './List.css';

const List: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
  ]);
  const add = () => {
    const random = Math.random().toString().slice(-3);
    setQuestionList([
      ...questionList,
      {
        id: `q ${random}`,
        title: `问卷 ${random}`,
        isPublished: false,
      },
    ]);
  };
  const delQuestion = (id: string) => {
    setQuestionList(
      questionList.filter((item) => {
        if (item.id === id) return false;
        return true;
      }),
    );
  };
  const pubsliQuestion = (id: string) => {
    setQuestionList(
      questionList.map((item) => {
        if (item.id === id) return { ...item, isPublished: true };
        return item;
      }),
    );
  };
  return (
    <div>
      <h1>问卷列表页2</h1>
      <ul>
        {questionList.map((item: QuestionListType) => {
          const { id, title, isPublished } = item;
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              delQuestion={delQuestion}
              pubsliQuestion={pubsliQuestion}
            />
          );
        })}
      </ul>
      <button onClick={add}>添加问卷</button>
    </div>
  );
};

export default List;

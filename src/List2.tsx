/*
 * @Author: ntscshen
 * @Date: 2023-09-19 18:42:35
 * @LastEditTime: 2023-09-21 18:21:50
 * @FilePath: /low_code/src/List2.tsx
 * @Description:
 */
import { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard.tsx';
import { QuestionListType } from './components/QuestionCard.ts';
import './List.css';

import { useTitle, useMouse } from 'ahooks';
// import useTitle from './hooks/useTitle.ts';
// import useMouse from './hooks/useMouse.ts';
import useGetInfo from './hooks/useGetInfo.ts';

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

  useTitle('ceshi2222');
  const mouse = useMouse();
  const { loading, info } = useGetInfo();
  return (
    <div>
      <h1>问卷列表页2</h1>
      <button onClick={add}>添加问卷</button>
      <div>{loading ? '加载中...' : info}</div>

      <div>
        X:{mouse.clientX}, Y:{mouse.clientY}
      </div>
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
    </div>
  );
};

export default List;

/*
 * @Author: ntscshen
 * @Date: 2023-09-18 18:05:42
 * @LastEditTime: 2023-09-21 21:36:10
 * @FilePath: /low_code/src/components/QuestionCard.tsx
 * @Description:
 */
import { QuestionListType } from './QuestionCard';
import cssModule from '../List.module.less';
import clsx from 'clsx';

const QuestionCard = (item: QuestionListType) => {
  const { id, title, isPublished, delQuestion, pubsliQuestion } = item;

  const edit = (id: string) => {
    console.log('id :>> ', id);
  };
  const del = (id: string) => {
    delQuestion && delQuestion(id);
  };
  const publish = (id: string) => {
    pubsliQuestion && pubsliQuestion(id);
  };
  const itemClassName = clsx({
    [cssModule['list-item']]: true,
    [cssModule.published]: isPublished,
  });
  return (
    <li
      key={id}
      className={itemClassName}
    >
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span className={cssModule['published-span']}>已发布</span>
      ) : (
        <span>未发布</span>
      )}
      &nbsp;
      <button onClick={() => publish(id)}>发布问卷</button>
      <button onClick={() => edit(id)}>编辑问卷</button>
      <button onClick={() => del(id)}>删除问卷</button>
    </li>
  );
};
export default QuestionCard;

/*
 * @Author: ntscshen
 * @Date: 2023-09-18 18:05:42
 * @LastEditTime: 2023-09-22 15:42:06
 * @FilePath: /low_code/src/components/QuestionCard/index.tsx
 * @Description:
 */
import { FC } from 'react';
import { QuestionListType } from './index.type';
import styles from './index.module.less';
// import clsx from 'clsx';

const QuestionCard: FC<QuestionListType> = (item: QuestionListType) => {
  const { title, isPublished, createdAt, answerCount } = item;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <span className={styles['published-span']}>已发布</span>
          ) : (
            <span>未发布</span>
          )}
          &nbsp;
          <span>答卷： {answerCount}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;

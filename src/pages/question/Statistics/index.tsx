/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:49:31
 * @LastEditTime: 2023-09-28 15:54:14
 * @FilePath: /low_code/src/pages/question/Statistics/index.tsx
 * @Description:
 */

import useLoadQuestionData from '@/hooks/useLoadQuestionData';
import { FC } from 'react';

const Statistics: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <div>
      <p>statistic page</p>
      {loading ? <p>loading ...</p> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Statistics;

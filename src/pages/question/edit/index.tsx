/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:48:12
 * @LastEditTime: 2023-09-28 15:54:03
 * @FilePath: /low_code/src/pages/question/edit/index.tsx
 * @Description:
 */

import { FC } from 'react';
import useLoadQuestionData from '@/hooks/useLoadQuestionData';

const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData();
  return (
    <div>
      <p>Edit page</p>
      {loading ? <p>loading ...</p> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Edit;

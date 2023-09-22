/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:48:12
 * @LastEditTime: 2023-09-22 17:41:10
 * @FilePath: /low_code/src/pages/question/edit/index.tsx
 * @Description:
 */

import { FC } from 'react';
import { useParams } from 'react-router-dom';


const Edit: FC = () => {
  const { id } = useParams();
  return <div>Edit {id}</div>;
};

export default Edit;

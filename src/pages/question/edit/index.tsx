/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:48:12
 * @LastEditTime: 2023-09-27 16:46:45
 * @FilePath: /low_code/src/pages/question/edit/index.tsx
 * @Description:
 */

import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuestionService } from '@/services/question';

const Edit: FC = () => {
  const { id = '' } = useParams();
  useEffect(() => {
    const fn = async () => {
      const data = await getQuestionService(id);
      console.log('data :>> ', data);
    };
    fn();
  }, []);
  return <div>Edit {id}</div>;
};

export default Edit;

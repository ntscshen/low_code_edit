/*
 * @Author: ntscshen
 * @Date: 2023-09-28 14:06:00
 * @LastEditTime: 2023-09-28 15:53:22
 * @FilePath: /low_code/src/hooks/useLoadQuestionData.ts
 * @Description:
 */
import { getQuestionService } from '@/services/question';
import { useRequest } from 'ahooks';
import { useParams } from 'react-router-dom';

const useLoadQuestionData = () => {
  const { id = '' } = useParams();

  const load = async () => {
    return await getQuestionService(id);
  };
  const { loading, data, error } = useRequest(load);
  return { loading, data, error };
};

export default useLoadQuestionData;

/*
 * @Author: ntscshen
 * @Date: 2023-09-28 16:37:59
 * @LastEditTime: 2023-09-28 17:01:14
 * @FilePath: /low_code/src/hooks/useLoadQuestionListData.ts
 * @Description:
 */
import { LIST_SEARCH_PARAM_KEY } from '@/Utils/constant';
import { getQuestionListService } from '@/services/question';
import { useRequest } from 'ahooks';
import { useSearchParams } from 'react-router-dom';

type OptionType = {
  isStar: boolean;
  isDeleted: boolean;
};

const useLoadQuestionListData = (opt: Partial<OptionType> = {}) => {
  const [searchParams] = useSearchParams();
  const { isStar, isDeleted } = opt;

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
      const data = getQuestionListService({ keyword, isStar, isDeleted });
      return data;
    },
    {
      refreshDeps: [searchParams], // 刷新依赖项
    },
  );
  return { data, loading, error };
};

export default useLoadQuestionListData;

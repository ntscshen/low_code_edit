/*
 * @Author: ntscshen
 * @Date: 2023-09-28 16:37:59
 * @LastEditTime: 2023-10-08 15:42:17
 * @FilePath: /low_code/src/hooks/useLoadQuestionListData.ts
 * @Description:
 */
import {
  LIST_PAGE_DEFAULT,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_DEFAULT,
  LIST_PAGE_SIZE_PARAM_KEY,
  LIST_SEARCH_PARAM_KEY,
} from '@/Utils/constant';
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
  // 1. useRequest 包成Hooks
  // 2. 异步使用 axios 去获取数据( 数据的统一拦截器 interceptors )
  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''; // 搜索值
      const page =
        parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') ||
        LIST_PAGE_DEFAULT; // page 当前页
      const pageSize =
        parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
        LIST_PAGE_SIZE_DEFAULT; // pageSize 每页多少条

      const data = getQuestionListService({
        keyword,
        isStar,
        isDeleted,
        page,
        pageSize,
      });
      return data;
    },
    {
      refreshDeps: [searchParams], // 刷新依赖项
    },
  );
  return { data, loading, error };
};

export default useLoadQuestionListData;

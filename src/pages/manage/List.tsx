/*
 * @Author: ntscshen
 * @Date: 2023-09-21 22:06:24
 * @LastEditTime: 2023-10-09 15:20:13
 * @FilePath: /low_code/src/pages/manage/List.tsx
 * @Description:
 */

import { FC, useEffect, useRef, useState } from 'react';
import styles from './List.module.less';
import { useDebounceFn, useRequest, useTitle } from 'ahooks';
import QuestionCard from '@/components/QuestionCard';
import { Empty, Spin, Typography } from 'antd';
import ListSearch from '@/components/ListSearch';
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData';
import { useSearchParams } from 'react-router-dom';
import { getQuestionListService } from '@/services/question';
import {
  LIST_PAGE_SIZE_DEFAULT,
  LIST_SEARCH_PARAM_KEY,
} from '@/Utils/constant';
const { Title } = Typography;

const List: FC = () => {
  useTitle('我的问卷');

  // const { loading, data } = useLoadQuestionListData();
  const footRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false); // 是否已经开始加载(防抖有延迟时间)
  const [page, setPage] = useState(1); // 不在url中显示， 上划加载的内部逻辑
  const [list, setList] = useState([]); // 全部的列表数据，上划加载更多，累加
  const [total, setTotal] = useState(0); // 总条数
  const haveMoreData = total > list.length; // 有没有更多的，未加载的数据内容

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';

  // 搜索时，信息重置
  useEffect(() => {
    setPage(1);
    setStarted(false);
    setList([]);
    setTotal(0);
  }, [keyword]);

  // 真正加载
  const { run: load, loading } = useRequest(
    async () => {
      const data = await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE_DEFAULT,
        keyword,
      });
      return data;
    },
    {
      manual: true,
      onSuccess(result) {
        const { list: l = [], total = 0 } = result;
        setList(list.concat(l));
        setTotal(total);
        setPage(page + 1);
      },
    },
  );
  // bottom < 视口高度 (证明元素显示出来了)
  // 触发加载 - 防抖
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const element = footRef.current;
      if (element == null) return;
      const footDom = element.getBoundingClientRect();
      if (footDom == null) return;
      const { bottom } = footDom;
      if (bottom <= window.innerHeight) {
        load();
        setStarted(true);
      }
    },
    {
      wait: 500,
    },
  );

  // 1. 当页面加载
  useEffect(() => {
    tryLoadMore();
  }, [searchParams]);
  // 2. 当页面滚动
  useEffect(() => {
    if (haveMoreData) {
      window.addEventListener('scroll', tryLoadMore);
    }
    return () => {
      window.removeEventListener('scroll', tryLoadMore);
    };
  }, [searchParams, haveMoreData]);

  const LoadMoreElement = () => {
    if (!started || loading) return <Spin />;
    if (total === 0) return <Empty description="暂无数据" />;
    if (!haveMoreData) return <span>没有更多了...</span>;
    return <span>开始加载下一页</span>;
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.context}>
        {list &&
          list?.length > 0 &&
          list?.map((item: any) => {
            const { id } = item;
            return (
              <QuestionCard
                key={id}
                {...item}
              />
            );
          })}
      </div>
      <div
        className={styles.footer}
        ref={footRef}
      >
        {LoadMoreElement()}
      </div>
    </>
  );
};

export default List;

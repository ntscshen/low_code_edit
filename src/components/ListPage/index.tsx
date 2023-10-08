/*
 * @Author: ntscshen
 * @Date: 2023-10-08 18:04:11
 * @LastEditTime: 2023-10-08 18:31:22
 * @FilePath: /low_code/src/components/ListPage/index.tsx
 * @Description:
 */
import {
  LIST_PAGE_DEFAULT,
  LIST_PAGE_PARAM_KEY,
  LIST_PAGE_SIZE_DEFAULT,
  LIST_PAGE_SIZE_PARAM_KEY,
} from '@/Utils/constant';
import { Pagination } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface IListPage {
  total: number;
}

const ListPage: FC<IListPage> = (props: IListPage) => {
  const { total } = props;
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(LIST_PAGE_DEFAULT);
  const [pageSize, setPageSize] = useState(LIST_PAGE_SIZE_DEFAULT);
  const nav = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const page =
      parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') ||
      LIST_PAGE_DEFAULT; // page 当前页
    setPage(page);
    const pageSize =
      parseInt(searchParams.get(LIST_PAGE_SIZE_PARAM_KEY) || '') ||
      LIST_PAGE_SIZE_DEFAULT; // pageSize 每页多少条
    setPageSize(pageSize);
  }, [searchParams]);

  const handlePageChange = (page: number, pageSize: number) => {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString());
    searchParams.set(LIST_PAGE_SIZE_PARAM_KEY, pageSize.toString());
    nav({
      pathname,
      search: searchParams.toString(),
    });
  };
  return (
    <Pagination
      defaultCurrent={1}
      total={total}
      current={page}
      pageSize={pageSize}
      onChange={handlePageChange}
    />
  );
};

export default ListPage;

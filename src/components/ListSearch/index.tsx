/*
 * @Author: ntscshen
 * @Date: 2023-09-25 14:23:01
 * @LastEditTime: 2023-09-25 15:13:48
 * @FilePath: /low_code/src/components/ListSearch/index.tsx
 * @Description:
 */
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Input } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { LIST_SEARCH_PARAM_KEY } from '@/Utils/constant';
const { Search } = Input;

const ListSearch: FC = () => {
  // 受控组件
  const [value, setValue] = useState('');
  const nav = useNavigate();
  const { pathname } = useLocation();
  // 获取 url 参数，并设置到 input value
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
    setValue(newVal);
  }, [searchParams]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSearch = (value: string) => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  };
  return (
    <Search
      placeholder="输入搜索关键字"
      onSearch={handleSearch}
      style={{ width: '260px' }}
      onChange={handleChange}
      value={value}
      allowClear
    />
  );
};
export default ListSearch;

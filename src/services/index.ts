/*
 * @Author: ntscshen
 * @Date: 2023-09-26 16:28:14
 * @LastEditTime: 2023-10-08 15:34:29
 * @FilePath: /low_code/src/services/index.ts
 * @Description:
 */
import { message } from 'antd';
import axios from 'axios';

export type ResType = {
  errno: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: any;
};

export type SearchParams = {
  keyword: string;
  isStar: boolean;
  isDeleted: boolean;
  page: number;
  pageSize: number;
};

const instance = axios.create({
  timeout: 10 * 1000,
});

// response 拦截器 统一处理 errno 和 msg
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { errno, data } = resData;
  console.log(
    '🚀 ~ file: index.ts:29 ~ instance.interceptors.response.use ~ resData:',
    data,
  );

  if (errno !== 0) {
    const msg = (data?.msg as string) || '';
    msg && message.error(msg);
    throw new Error(msg);
  }

  return data as never;
});

export default instance;

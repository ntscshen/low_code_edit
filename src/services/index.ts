/*
 * @Author: ntscshen
 * @Date: 2023-09-26 16:28:14
 * @LastEditTime: 2023-09-26 17:19:56
 * @FilePath: /low_code/src/services/index.ts
 * @Description:
 */
import { message } from 'antd';
import axios, { AxiosResponse } from 'axios';

export type ResType = {
  errno: number;
  data?: ResDataType;
  msg?: string;
};

export type ResDataType = {
  [key: string]: unknown;
};

const instance = axios.create({
  timeout: 10 * 1000,
});

// response 拦截器 统一处理 errno 和 msg
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType;
  const { errno, data, msg } = resData;

  if (errno !== 0) {
    msg && message.error(msg);
    throw new Error(msg);
  }

  return data as never;
});

export default instance;

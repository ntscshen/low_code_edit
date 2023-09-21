/*
 * @Author: ntscshen
 * @Date: 2023-09-21 17:17:07
 * @LastEditTime: 2023-09-21 17:26:22
 * @FilePath: /low_code/src/hooks/useGetInfo.ts
 * @Description:
 */
import { useEffect, useState } from 'react';

// 模拟的异步获取信息
const getInfo = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Date.now().toString());
    }, 1500);
  });
};

const useGetInfo = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState('');

  useEffect(() => {
    getInfo().then(info => {
      setLoading(false);
      setInfo(info);
    });
  }, []);

  return { loading, info };
};

export default useGetInfo;

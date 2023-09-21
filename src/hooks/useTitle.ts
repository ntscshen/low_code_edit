/*
 * @Author: ntscshen
 * @Date: 2023-09-21 17:01:15
 * @LastEditTime: 2023-09-21 17:01:51
 * @FilePath: /low_code/src/hooks/useTitle.ts
 * @Description:
 */
import { useEffect } from 'react';

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default useTitle;

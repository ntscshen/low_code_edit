/*
 * @Author: ntscshen
 * @Date: 2023-09-21 17:05:29
 * @LastEditTime: 2023-09-21 17:10:55
 * @FilePath: /low_code/src/hooks/useMouse.ts
 * @Description:
 */
import { useState, useEffect } from 'react';

// 获取鼠标位置
const useMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseEventHandler = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    // 监听鼠标事件
    window.addEventListener('mousemove', mouseEventHandler);
    // 组件销毁时候
    return () => {
      window.removeEventListener('mousemove', mouseEventHandler);
    };
  }, []);
  return { x, y };
};

export default useMouse;

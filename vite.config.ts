/*
 * @Author: ntscshen
 * @Date: 2023-09-18 17:21:48
 * @LastEditTime: 2023-09-21 22:58:30
 * @FilePath: /low_code/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // 将@配置为根路径
    },
  },
});

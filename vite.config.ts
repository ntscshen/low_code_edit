/*
 * @Author: ntscshen
 * @Date: 2023-09-18 17:21:48
 * @LastEditTime: 2023-09-27 16:29:33
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
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // 要代理的目标服务器地址
        changeOrigin: true, // 修改请求头重的 Origin 为目标服务器地址
      },
    },
  },
});

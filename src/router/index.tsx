/*
 * @Author: ntscshen
 * @Date: 2023-09-22 16:14:32
 * @LastEditTime: 2023-09-23 19:01:40
 * @FilePath: /low_code/src/router/index.tsx
 * @Description:
 */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import ManageLayout from '@/layouts/ManageLayout';
import QuestionLayout from '@/layouts/QuestionLayout';

import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';
import NotFound from '@/pages/notFound';
import List from '@/pages/manage/List';
import Star from '@/pages/manage/star';
import Trash from '@/pages/manage/trash';
import Edit from '@/pages/question/edit';

// 使用 createBrowserRouter 创建路由器
const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'statistics/:id',
        element: <Star />,
      },
    ],
  },
]);

export default routerConfig;

/*
 * @Author: ntscshen
 * @Date: 2023-09-18 17:21:48
 * @LastEditTime: 2023-09-22 17:05:33
 * @FilePath: /low_code/src/App.tsx
 * @Description:
 */
import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';

function App() {
  return <RouterProvider router={routerConfig} />;
}

export default App;

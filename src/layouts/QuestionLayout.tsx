/*
 * @Author: ntscshen
 * @Date: 2023-09-22 16:06:11
 * @LastEditTime: 2023-09-22 16:06:15
 * @FilePath: /low_code/src/layouts/QuestionLayout.tsx
 * @Description:
 */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const QuestionLayout: FC = () => {
  return (
    <>
      <div>QuestionLayout header</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>QuestionLayout footer</div>
    </>
  );
};

export default QuestionLayout;

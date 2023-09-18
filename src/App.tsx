/*
 * @Author: ntscshen
 * @Date: 2023-09-18 17:21:48
 * @LastEditTime: 2023-09-18 17:29:15
 * @FilePath: /low_code/src/App.tsx
 * @Description:
 */
import {} from 'react';
import './App.css';

function App() {
  const questionList = [
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: false },
    { id: 'q3', title: '问卷3', isPublished: true },
    { id: 'q4', title: '问卷4', isPublished: false },
  ];
  const edit = (id: string) => {
    console.log('id :>> ', id);
  };
  return (
    <div>
      <h1>问卷列表页</h1>
      <ul>
        {questionList.map((item) => {
          const { id, title, isPublished } = item;
          return (
            <li key={id} className='list-item'>
              <strong>{title}</strong>
              &nbsp;
              {isPublished ? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span>未发布</span>
              )}
              &nbsp;
              <button onClick={() => edit(id)}>编辑问卷</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

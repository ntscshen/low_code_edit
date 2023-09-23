/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:46:19
 * @LastEditTime: 2023-09-23 23:08:22
 * @FilePath: /low_code/src/pages/manage/trash.tsx
 * @Description:
 */
import { FC, useState } from 'react';
import styles from './List.module.less';
import { useTitle } from 'ahooks';
import {
  Empty,
  Typography,
  Table,
  Tag,
  Button,
  Space,
  Modal,
  message,
} from 'antd';
import { ExclamationCircleOutlined, StarOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { confirm } = Modal;

const rowQuestionList = [
  {
    id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '2023-09-21 22:35:18',
  },
  {
    id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '2023-09-20 21:35:18',
  },
  {
    id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 1,
    createdAt: '2023-09-19 20:35:18',
  },
  {
    id: 'q4',
    title: '问卷4',
    isPublished: false,
    isStar: false,
    answerCount: 4,
    createdAt: '2023-09-19 19:35:18',
  },
];

const Trash: FC = () => {
  const [questionList] = useState(rowQuestionList);
  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>已发布</Tag>
        );
      },
    },
    {
      title: '是否标星',
      dataIndex: 'isStar',
      render: (isStar: boolean) => {
        return isStar ? (
          <StarOutlined style={{ color: 'red' }} />
        ) : (
          <StarOutlined />
        );
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ];
  const [selectedId, setSelectedId] = useState<string[]>([]);

  useTitle('回收站');

  const del = () => {
    confirm({
      title: '确定要彻底删除该问卷吗？',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success('删除成功'),
    });
  };

  const tableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedId.length === 0}
          >
            恢复
          </Button>
          <Button
            danger
            disabled={selectedId.length === 0}
            onClick={del}
          >
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q.id}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            console.log('selectedRowKeys :>> ', selectedRowKeys);
            setSelectedId(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>（搜索）{JSON.stringify(selectedId)}</div>
      </div>
      <div className={styles.context}>
        {questionList.length === 0 && <Empty description="暂无数据" />}

        {questionList.length > 0 && tableElem}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
};

export default Trash;

/*
 * @Author: ntscshen
 * @Date: 2023-09-22 15:46:19
 * @LastEditTime: 2023-10-08 18:35:29
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
  Spin,
} from 'antd';
import { ExclamationCircleOutlined, StarOutlined } from '@ant-design/icons';
import ListSearch from '@/components/ListSearch';
import useLoadQuestionListData from '@/hooks/useLoadQuestionListData';
import ListPage from '@/components/ListPage';
const { Title } = Typography;
const { confirm } = Modal;

const Trash: FC = () => {
  useTitle('回收站');
  const { loading, data } = useLoadQuestionListData({ isDeleted: true });
  const { list, total } = data || {};

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
        dataSource={list}
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
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.context}>
          {!loading && list?.length === 0 && <Empty description="暂无数据" />}

          {list?.length > 0 && tableElem}
        </div>
      </Spin>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  );
};

export default Trash;

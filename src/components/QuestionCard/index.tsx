/*
 * @Author: ntscshen
 * @Date: 2023-09-18 18:05:42
 * @LastEditTime: 2023-09-23 22:12:55
 * @FilePath: /low_code/src/components/QuestionCard/index.tsx
 * @Description:
 */
import { FC } from 'react';
import { QuestionListType } from './index.type';
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd';
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import {
  QUESTION_EDIT_PATHNAME,
  QUESTION_STAR_PATHNAME,
} from '@/Utils/constant';
const { confirm } = Modal;
// import clsx from 'clsx';

const QuestionCard: FC<QuestionListType> = (item: QuestionListType) => {
  const { id, title, isPublished, isStar, createdAt, answerCount } = item;
  const nav = useNavigate();
  const duplicate = () => {
    message.success('复制成功');
  };
  const del = () => {
    confirm({
      title: '确定要删除该问卷吗？',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success('删除成功'),
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={
              isPublished
                ? `${QUESTION_STAR_PATHNAME}/${id}`
                : `${QUESTION_EDIT_PATHNAME}/${id}`
            }
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷： {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '10px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`${QUESTION_EDIT_PATHNAME}/${id}`)}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`${QUESTION_STAR_PATHNAME}/${id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={<StarOutlined />}
              type="text"
              size="small"
            >
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷?"
              okText="确定"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button
                icon={<CopyOutlined />}
                type="text"
                size="small"
              >
                复制
              </Button>
            </Popconfirm>
            <Button
              icon={<DeleteOutlined />}
              type="text"
              size="small"
              onClick={del}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;

/*
 * @Author: ntscshen
 * @Date: 2023-09-26 17:21:54
 * @LastEditTime: 2023-09-27 17:01:28
 * @FilePath: /low_code/src/services/question.ts
 * @Description:
 */
import axios, { ResDataType } from './index';

// 获取单个问卷信息
const getQuestionService = async (id: string): Promise<ResDataType> => {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as ResDataType;
  return data;
};

// 创建问卷
const createQuestionService = async (): Promise<ResDataType> => {
  const url = '/api/question';
  const data = (await axios.post(url)) as ResDataType;
  return data;
};

export { getQuestionService, createQuestionService };

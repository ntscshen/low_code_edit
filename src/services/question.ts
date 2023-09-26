/*
 * @Author: ntscshen
 * @Date: 2023-09-26 17:21:54
 * @LastEditTime: 2023-09-26 17:24:55
 * @FilePath: /low_code/src/services/question.ts
 * @Description:
 */
import axios, { ResDataType } from './index';

const getQuestionService = async (id: string): Promise<ResDataType> => {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as ResDataType;
  return data;
};

export { getQuestionService };

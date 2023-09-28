/*
 * @Author: ntscshen
 * @Date: 2023-09-26 17:21:54
 * @LastEditTime: 2023-09-28 16:49:09
 * @FilePath: /low_code/src/services/question.ts
 * @Description:
 */
import axios, { ResDataType, SearchParams } from './index';

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

/**
Partial 局部的

type ObjType = {
  a: string;
  b: number;
  c: boolean
}

const obj1: ObjType = {
  a: 'x',
  b: 100,
  c: true
}

为了灵活，我们可以定义的时候，使用问号进行处理
但是想让它更灵活一些，不用修改之前定义好的ObjType，只要是这个属性的一部分就行

const obj2 = Partial<ObjType> = { // obj2是 ObjType的一部分即可
  a: 's'
}


 * */

const getQuestionListService = async (
  opt: Partial<SearchParams> = {},
): Promise<ResDataType> => {
  const url = '/api/question';
  const data = (await axios.get(url, { params: opt })) as ResDataType;
  return data;
};

export { getQuestionService, createQuestionService, getQuestionListService };

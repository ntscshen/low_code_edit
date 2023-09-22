/*
 * @Author: ntscshen
 * @Date: 2023-09-18 18:14:33
 * @LastEditTime: 2023-09-21 22:58:12
 * @FilePath: /low_code/src/components/QuestionCard/QuestionCard.type.ts
 * @Description:
 */
export type QuestionListType = {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

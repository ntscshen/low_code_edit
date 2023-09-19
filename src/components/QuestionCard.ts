/*
 * @Author: ntscshen
 * @Date: 2023-09-18 18:14:33
 * @LastEditTime: 2023-09-19 22:08:10
 * @FilePath: /low_code/src/components/QuestionCard.ts
 * @Description:
 */
export type QuestionListType = {
  id: string;
  title: string;
  isPublished: boolean;
  delQuestion?: (id: string) => void;
  pubsliQuestion?: (id: string) => void;
};

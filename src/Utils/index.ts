/*
 * @Author: ntscshen
 * @Date: 2023-09-25 16:29:55
 * @LastEditTime: 2023-09-25 16:33:49
 * @FilePath: /low_code/src/Utils/index.ts
 * @Description:
 */
import { USERNAME_KEY, PASSWORD_KEY } from './constant';

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
};

const deleteUserFromStorage = () => {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
};

const getUserInfoFromStorage = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
};

export { rememberUser, deleteUserFromStorage, getUserInfoFromStorage };

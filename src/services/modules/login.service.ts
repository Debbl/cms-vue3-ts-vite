import type { IResponseData } from '../type';
import type { IAccount, ILoginResult } from './type';
import { dRequest } from '../index';

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users',
  UserMenus = '/role',
}

function accountLoginRequest(account: IAccount) {
  return dRequest.post<IResponseData<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true,
  });
}

function userInfoByIdRequest(id: number) {
  return dRequest.get<IResponseData>({
    url: LoginAPI.LoginUserInfo + '/' + id,
  });
}

function userMenusByRoleIdRequest(id: number) {
  return dRequest.get<IResponseData>({
    url: LoginAPI.UserMenus + '/' + id + '/menu',
  });
}

export { accountLoginRequest, userInfoByIdRequest, userMenusByRoleIdRequest };

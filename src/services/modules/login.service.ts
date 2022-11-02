import requester from "../request";
import type { IResponseData } from "../type";
import type { ILoginResult } from "./type";
import type { IAccount } from "~/views/login/cpns/type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users",
  UserMenus = "/role",
}

function accountLoginRequest(account: IAccount) {
  return requester.post<IResponseData<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    showLoading: true,
  });
}

function userInfoByIdRequest(id: number) {
  return requester.get<IResponseData>({
    url: `${LoginAPI.LoginUserInfo}/${id}`,
  });
}

function userMenusByRoleIdRequest(id: number) {
  return requester.get<IResponseData>({
    url: `${LoginAPI.UserMenus}/${id}/menu`,
  });
}

export { accountLoginRequest, userInfoByIdRequest, userMenusByRoleIdRequest };

import requester from "..";
import type { IResponseData } from "../type";
import type { ILoginResult } from "./type";
import type { IAccount } from "~/views/login/cpns/type";

const LOGIN_API = {
  AccountLogin: "/login",
  LoginUserInfo: "/users",
  UserMenus: "/role",
};

function accountLoginRequest(account: IAccount) {
  return requester.post<IResponseData<ILoginResult>>({
    url: LOGIN_API.AccountLogin,
    data: account,
    showLoading: true,
  });
}

function userInfoByIdRequest(id: number) {
  return requester.get<IResponseData>({
    url: `${LOGIN_API.LoginUserInfo}/${id}`,
  });
}

function userMenusByRoleIdRequest(id: number) {
  return requester.get<IResponseData>({
    url: `${LOGIN_API.UserMenus}/${id}/menu`,
  });
}

export { accountLoginRequest, userInfoByIdRequest, userMenusByRoleIdRequest };

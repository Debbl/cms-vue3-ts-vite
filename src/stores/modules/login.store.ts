import { defineStore } from "pinia";
import type { UserMenu } from "./type";
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByRoleIdRequest,
} from "~/services/modules/login.service";
import localCache from "~/utils/localCache";
import router from "~/router";
import type { IAccount } from "~/views/login/cpns/type";
import { mapMenusToRoutes } from "~/utils/mapMenus";

const useLoginStore = defineStore("login", {
  state: (): {
    token: string;
    userInfo: any;
    userMenus: UserMenu[];
  } => ({
    token: localCache.getCache("token") ?? "",
    userInfo: localCache.getCache("userInfo") ?? {},
    userMenus: localCache.getCache("userMenus") ?? [],
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // token
      const loginResult = await accountLoginRequest(account);
      const { id, token } = loginResult.data;
      this.token = token;
      localCache.setCache("token", token);
      // 用户信息
      const userInfoResult = await userInfoByIdRequest(id);
      const userInfo = userInfoResult.data;
      this.userInfo = userInfo;
      localCache.setCache("userInfo", userInfo);
      // 用户权限菜单
      const userMenusResult = await userMenusByRoleIdRequest(userInfo.role.id);
      const userMenus = userMenusResult.data;
      this.userMenus = userMenus;
      localCache.setCache("userMenus", userMenus);

      const routes = mapMenusToRoutes(this.userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });

      // 登录成功跳转
      router.push("/main");
    },
    // 添加 routes 到 main 的 children
    loadLocalUserData() {
      const token = localCache.getCache("token");
      const userInfo = localCache.getCache("userInfo");
      const userMenus = localCache.getCache("userMenus");
      if (token && userInfo && userMenus) {
        this.token = token;
        this.userInfo = userInfo;
        this.userMenus = userMenus;
      }
      const routes = mapMenusToRoutes(this.userMenus);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
    },
  },
});

export default useLoginStore;

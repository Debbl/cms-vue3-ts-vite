import type { IAccount } from '@/services/modules/type';
import type { UserMenu } from './type';
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByRoleIdRequest,
} from '@/services/modules/login.service';
import { defineStore } from 'pinia';
import localCache from '@/utils/localCache';
import router from '@/router';

const useLoginStore = defineStore('login', {
  state: (): {
    token: string;
    userInfo: object;
    userMenus: UserMenu[];
  } => ({
    token: '',
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    setupLogin() {
      const token = localCache.getCache('token');
      if (token) this.token = token;
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) this.userInfo = userInfo;
      const userMenus = localCache.getCache('userMenus');
      if (userMenus) this.userMenus = userMenus;
    },
    async accountLoginAction(account: IAccount) {
      // token
      const loginResult = await accountLoginRequest(account);
      const { id, token } = loginResult.data;
      this.token = token;
      localCache.setCache('token', token);
      // 用户信息
      const userInfoResult = await userInfoByIdRequest(id);
      const userInfo = userInfoResult.data;
      this.userInfo = userInfo;
      localCache.setCache('userInfo', userInfo);
      // 用户权限菜单
      const userMenusResult = await userMenusByRoleIdRequest(userInfo.role.id);
      const userMenus = userMenusResult.data;
      this.userMenus = userMenus;
      localCache.setCache('userMenus', userMenus);
      // 登录成功跳转
      router.push('/main');
    },
    // 添加 routes 到 main 的 children
  },
});

export default useLoginStore;

import type { IAccount } from '@/services/modules/type';
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByRoleId,
} from '@/services/modules/login.service';
import { defineStore } from 'pinia';
import localCache from '@/utils/localCache';
import router from '@/router';

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    userInfo: {},
    userMenus: [],
  }),
  actions: {
    async accountLoginAction(account: IAccount) {
      // token
      const loginResult = await accountLoginRequest(account);
      const { id, token } = loginResult.data;
      localCache.setCache('token', token);
      // 用户信息
      const userInfoResult = await userInfoByIdRequest(id);
      const userInfo = userInfoResult.data;
      this.userInfo = userInfo;
      localCache.setCache('userInfo', userInfo);
      // 用户权限菜单
      const userMenusResult = await userMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusResult.data;
      this.userMenus = userMenus;
      localCache.setCache('userMenus', userMenus);
      // 登录成功跳转
      router.push('/main');
    },
  },
});

export default useLoginStore;

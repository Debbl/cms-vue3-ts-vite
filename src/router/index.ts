import type { RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/localCache';
import { createRouter, createWebHistory } from 'vue-router';

const Login = () => import('@/views/login/Login.vue');
const Main = () => import('@/views/main/Main.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/main',
    component: Main,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!localCache.getCache('token')) {
      return '/login';
    }
  }
});

export default router;

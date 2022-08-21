import { createRouter, createWebHistory } from 'vue-router';
import { type RouteRecordRaw } from 'vue-router';

const Login = () => import('@/views/login/login.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

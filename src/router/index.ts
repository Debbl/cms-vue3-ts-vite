import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: import('@/views/Home.vue'),
  },
  {
    path: '/about',
    component: import('@/views/About.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

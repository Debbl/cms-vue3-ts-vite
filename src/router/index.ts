import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

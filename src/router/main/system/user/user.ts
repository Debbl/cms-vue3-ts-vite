import { RouteRecordRaw } from 'vue-router';

const User = () => import('@/views/main/system/user/User.vue');

const userRoute: RouteRecordRaw = {
  name: 'user',
  path: '/main/system/user',
  component: User,
};

export default userRoute;

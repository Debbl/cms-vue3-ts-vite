import { RouteRecordRaw } from 'vue-router';

const OverView = () => import('@/views/main/analysis/overview/Overview.vue');

const overviewRoute: RouteRecordRaw = {
  name: 'overview',
  path: 'main/analysis/overview',
  component: OverView,
};

export default overviewRoute;

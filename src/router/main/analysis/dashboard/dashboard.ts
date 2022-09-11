import { RouteRecordRaw } from 'vue-router';

const Dashboard = () => import('@/views/main/analysis/dashboard/Dashboard.vue');

const dashboardRoute: RouteRecordRaw = {
  name: 'dashboard',
  path: 'main/analysis/dashboard',
  component: Dashboard,
};

export default dashboardRoute;

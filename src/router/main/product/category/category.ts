import { RouteRecordRaw } from 'vue-router';

const Category = () => import('@/views/main/product/category/Category.vue');

const categoryRote: RouteRecordRaw = {
  name: 'category',
  path: '/main/product/category',
  component: Category,
};

export default categoryRote;

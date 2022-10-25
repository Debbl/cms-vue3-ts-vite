import type { RouteRecordRaw } from "vue-router";

const Goods = () => import("@/views/main/product/goods/Goods.vue");

const goodsRoute: RouteRecordRaw = {
  name: "goods",
  path: "/main/product/goods",
  component: Goods,
};

export default goodsRoute;

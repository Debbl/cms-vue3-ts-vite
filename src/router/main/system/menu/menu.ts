import type { RouteRecordRaw } from "vue-router";

const Menu = () => import("@/views/main/system/menu/Menu.vue");

const menuRoute: RouteRecordRaw = {
  name: "menu",
  path: "/main/system/menu",
  component: Menu,
};

export default menuRoute;

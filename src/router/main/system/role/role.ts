import type { RouteRecordRaw } from "vue-router";

const Role = () => import("@/views/main/system/role/Role.vue");

const roleRoute: RouteRecordRaw = {
  name: "role",
  path: "/main/system/role",
  component: Role,
};

export default roleRoute;

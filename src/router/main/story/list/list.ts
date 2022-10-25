import type { RouteRecordRaw } from "vue-router";

const List = () => import("@/views/main/story/list/List.vue");

const listRoute: RouteRecordRaw = {
  name: "list",
  path: "/main/story/list",
  component: List,
};

export default listRoute;

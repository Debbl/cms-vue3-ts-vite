import type { RouteRecordRaw } from "vue-router";

const Department = () =>
  import("~/views/main/system/department/Department.vue");

const departmentRoute: RouteRecordRaw = {
  name: "department",
  path: "/main/system/department",
  component: Department,
};

export default departmentRoute;

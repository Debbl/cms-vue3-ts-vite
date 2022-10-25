import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import localCache from "~/utils/localCache";

const Login = () => import("~/views/login/Login.vue");
const Main = () => import("~/views/main/Main.vue");
const NotFound = () => import("~/views/not-found/NotFound.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "main",
    path: "/main",
    component: Main,
    children: [],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const token = localCache.getCache("token");
  if (to.path === "/login" && token) {
    return "/main";
  }
  if (to.path !== "/login" && !token) {
    return "/login";
  }
});

export default router;

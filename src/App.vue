<script setup lang="ts">
import { useRouter } from "vue-router";
import { mapMenusToRoutes } from "./utils/mapMenus";
import useLoginStore from "~/stores/modules/login.store";

const router = useRouter();
const loginStore = useLoginStore();
// 初始化用户登陆数据
loginStore.setupLogin();
// 初始化动态路由
const routes = mapMenusToRoutes(loginStore.userMenus);
routes.forEach((route) => {
  router.addRoute("main", route);
});
</script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
.app {
  height: 100%;
}
</style>

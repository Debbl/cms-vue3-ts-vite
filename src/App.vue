<script setup lang="ts">
import useLoginStore from '@/stores/modules/login.store';

const loginStore = useLoginStore();
// 初始化用户登陆数据
loginStore.setupLogin();
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

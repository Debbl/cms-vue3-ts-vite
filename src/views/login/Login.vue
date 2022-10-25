<script lang="ts" setup>
import LoginPanel from "./cpns/LoginPanel.vue";
</script>

<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: url(@/assets/img/login-bg.svg);
}
</style>

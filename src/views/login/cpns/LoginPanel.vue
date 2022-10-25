<script lang="ts" setup>
import type { CheckboxValueType, TabPanelName } from "element-plus";
import { ref } from "vue";
import { ElButton, ElCheckbox, ElLink, ElTabPane, ElTabs } from "element-plus";
import { Iphone, UserFilled } from "@element-plus/icons-vue";
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";
import localCache from "@/utils/localCache";

const isKeepPassword = ref(localCache.getCache("isKeepPassword"));
const isShowAccountControl = ref(true);
const tabClick = (name: TabPanelName) => {
  switch (name) {
    case "0":
      isShowAccountControl.value = true;
      break;
    case "1":
      isShowAccountControl.value = false;
      break;
    default:
      break;
  }
};
// 标签切换
const currentSelectedTab = ref("account");

// 登录逻辑
const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
const loginClick = () => {
  switch (currentSelectedTab.value) {
    case "account":
      loginAccountRef.value?.loginAction(isKeepPassword.value);
      break;
    default:
  }
};
// 记住密码
const keepPasswordChange = (val: CheckboxValueType) => {
  localCache.setCache("isKeepPassword", val);
  console.log(val);
};
</script>

<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <ElTabs
      type="border-card"
      stretch
      @tab-change="tabClick"
      v-model="currentSelectedTab"
    >
      <ElTabPane name="account">
        <template #label>
          <span class="account">
            <UserFilled style="width: 1em; height: 1em; margin-right: 8px" />
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="loginAccountRef" />
      </ElTabPane>
      <ElTabPane name="phone">
        <template #label>
          <span class="phone">
            <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </ElTabPane>
    </ElTabs>
    <div v-if="isShowAccountControl" class="account-control">
      <ElCheckbox v-model="isKeepPassword" @change="keepPasswordChange"
        >记住密码</ElCheckbox
      >
      <ElLink>忘记密码</ElLink>
    </div>
    <div class="login">
      <ElButton type="primary" @click="loginClick">立即登录</ElButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  margin-top: -100px;
  width: 320px;
  .title {
    margin-bottom: 10px;
    text-align: center;
  }
  .el-tabs {
    .account {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .phone {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .account-control {
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .login {
    margin-top: 20px;
    button {
      width: 100%;
    }
  }
}
</style>

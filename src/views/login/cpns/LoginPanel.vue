<script lang="ts" setup>
import type { CheckboxValueType } from 'element-plus';
import type { TabPanelName } from 'element-plus';
import { ref } from 'vue';
import { ElTabs, ElTabPane, ElCheckbox, ElLink, ElButton } from 'element-plus';
import { UserFilled, Iphone } from '@element-plus/icons-vue';
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue';
import localCache from '@/utils/localCache';

const isKeepPassword = ref(localCache.getCache('isKeepPassword'));
const isShowAccountControl = ref(true);
const tabClick = (name: TabPanelName) => {
  switch (name) {
    case '0':
      isShowAccountControl.value = true;
      break;
    case '1':
      isShowAccountControl.value = false;
      break;
    default:
      break;
  }
};

// 登录逻辑
const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
const loginClick = () => {
  switch (currentSelectedTab.value) {
    case 'account':
      loginAccountRef.value?.loginAction(isKeepPassword.value);
      break;
    default:
      return;
  }
};
// 记住密码
const keepPasswordChange = (val: CheckboxValueType) => {
  localCache.setCache('isKeepPassword', val);
  console.log(val);
};
// 标签切换
const currentSelectedTab = ref('account');
</script>

<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs
      type="border-card"
      stretch
      @tab-change="tabClick"
      v-model="currentSelectedTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="account">
            <user-filled style="width: 1em; height: 1em; margin-right: 8px" />
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="phone">
            <iphone style="width: 1em; height: 1em; margin-right: 8px" />
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div v-if="isShowAccountControl" class="account-control">
      <el-checkbox v-model="isKeepPassword" @change="keepPasswordChange"
        >记住密码</el-checkbox
      >
      <el-link>忘记密码</el-link>
    </div>
    <div class="login">
      <el-button type="primary" @click="loginClick">立即登录</el-button>
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

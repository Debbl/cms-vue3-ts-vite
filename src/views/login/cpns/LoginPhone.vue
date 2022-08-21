<script lang="ts" setup>
import { reactive } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';
import { rules } from './config/phone.config';

// 手机号
const account = reactive({
  phoneNumber: '',
  verifyCode: '',
});
</script>

<template>
  <div>
    <ElForm :rules="rules" :model="account">
      <ElFormItem label="手机号" prop="phoneNumber">
        <ElInput v-model="account.phoneNumber" />
      </ElFormItem>
      <ElFormItem label="验证码" prop="verifyCode">
        <div class="verify-code">
          <ElInput v-model="account.verifyCode" type="password" />
          <ElButton type="primary">获取验证码</ElButton>
        </div>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style lang="less" scoped>
.verify-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    margin-left: 6px;
  }
}
</style>

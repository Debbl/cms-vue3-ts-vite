<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
import { rules } from './config/account.config';

// 用户名 密码
const account = reactive({
  username: '',
  password: '',
});

// 表单
const accountFormRef = ref<InstanceType<typeof ElForm>>();

// 登录逻辑
const loginAction = () => {
  accountFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      console.log('valid');
    }
  });
};
defineExpose({
  loginAction,
});
</script>

<template>
  <div>
    <ElForm
      :rules="rules"
      :model="account"
      ref="accountFormRef"
      label-width="60px"
    >
      <ElFormItem label="账号" prop="username">
        <ElInput v-model="account.username" />
      </ElFormItem>
      <ElFormItem label="密码" prop="password">
        <ElInput v-model="account.password" type="password" />
      </ElFormItem>
    </ElForm>
  </div>
</template>

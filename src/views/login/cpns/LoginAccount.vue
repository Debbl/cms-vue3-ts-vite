<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ElForm, ElFormItem, ElInput } from 'element-plus';
import { rules } from './config/account.config';
import localCache from '@/utils/localCache';
import useLoginStore from '@/stores/modules/login.store';

// 用户名 密码
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? '',
});

// 表单
const accountFormRef = ref<InstanceType<typeof ElForm>>();

// 登录逻辑
const loginStore = useLoginStore();
const loginAction = (isKeepPassword: boolean) => {
  accountFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      if (isKeepPassword) {
        localCache.setCache('name', account.name);
        localCache.setCache('password', account.password);
      } else {
        localCache.removeCache('name');
        localCache.removeCache('password');
      }
      loginStore.accountLoginAction(account);
    }
  });
};
defineExpose({
  loginAction,
});
</script>

<template>
  <div>
    <el-form
      :rules="rules"
      :model="account"
      ref="accountFormRef"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

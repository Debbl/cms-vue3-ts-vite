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
    <el-form :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phoneNumber">
        <ElInput v-model="account.phoneNumber" />
      </el-form-item>
      <el-from-item label="验证码" prop="verifyCode">
        <div class="verify-code">
          <el-input v-model="account.verifyCode" type="password" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-from-item>
    </el-form>
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

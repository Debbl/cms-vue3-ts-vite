<script lang="ts" setup>
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
} from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
import localCache from "~/utils/localCache";
import router from "~/router";

// 退出登录
const handelExitLogin = () => {
  localCache.removeCache("token");
  router.push("/login");
};
</script>

<template>
  <div>
    <ElDropdown>
      <span class="el-dropdown-link">
        用户信息
        <ElIcon class="el-icon--right">
          <ArrowDown />
        </ElIcon>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem @click="handelExitLogin">退出登录</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

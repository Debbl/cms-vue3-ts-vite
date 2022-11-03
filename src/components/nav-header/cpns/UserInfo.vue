<script lang="ts" setup>
import {
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
} from "element-plus";
import {
  ChatDotRound,
  CircleCloseFilled,
  InfoFilled,
  Lock,
  Message,
  Search,
} from "@element-plus/icons-vue";
import localCache from "~/utils/localCache";
import router from "~/router";
import useLoginStore from "~/stores/modules/login.store";

const loginStore = useLoginStore();
// 退出登录
const handleExitLogin = () => {
  localCache.removeCache("token");
  router.push("/login");
};
</script>

<template>
  <div class="user-info">
    <div class="icon-container">
      <ElIcon><Message /></ElIcon>
      <ElIcon class="chat"><ChatDotRound /></ElIcon>
      <ElIcon><Search /></ElIcon>
    </div>
    <ElDropdown>
      <span class="el-dropdown-link">
        <ElAvatar
          :size="20"
          src="https://avatars.githubusercontent.com/u/61053131"
        />
        <span>{{ loginStore.userInfo.name }} </span>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem @click="handleExitLogin">
            <ElIcon><CircleCloseFilled /></ElIcon>
            <span>退出登录</span>
          </ElDropdownItem>
          <ElDropdownItem divided>
            <ElIcon><InfoFilled /></ElIcon>
            <span>个人信息</span>
          </ElDropdownItem>
          <ElDropdownItem>
            <ElIcon><Lock /></ElIcon>
            <span>修改密码</span>
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<style lang="less">
.user-info {
  display: flex;
  align-items: center;

  .el-dropdown {
    cursor: pointer;
    .el-dropdown-link {
      display: flex;
      align-items: center;
      column-gap: 6px;
    }
  }
}

.icon-container {
  width: 80px;
  display: flex;
  justify-content: space-evenly;
  .chat {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: -3px;
      right: -3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>

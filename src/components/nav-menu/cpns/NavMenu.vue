<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { ElIcon, ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
import {
  ChatLineRound,
  Goods,
  Monitor,
  Setting,
} from "@element-plus/icons-vue";
import useLoginStore from "~/stores/modules/login.store";

const props = defineProps({
  isCollapse: Boolean,
});
const loginStore = useLoginStore();
const { userMenus } = storeToRefs(loginStore);

// 获取图标
const getIconCpn = (icon: string) => {
  const cpn = icon.slice(8);
  switch (cpn) {
    case "monitor":
      return Monitor;
    case "setting":
      return Setting;
    case "goods":
      return Goods;
    case "chat-line-round":
      return ChatLineRound;
  }
};
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~~/assets/img/logo.svg" alt="" />
      <span v-show="!props.isCollapse" class="title">Vue3+TS</span>
    </div>
    <ElMenu class="el-menu-vertical" :collapse="props.isCollapse" router>
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <ElSubMenu :index="`${item.id}`">
            <template #title>
              <ElIcon v-if="item.icon">
                <component :is="getIconCpn(item.icon)" />
              </ElIcon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <ElMenuItem :index="`${subitem.id}`" :route="subitem.url">
                <i v-if="subitem.icon" :class="subitem.icon" />
                <span>{{ subitem.name }}</span>
              </ElMenuItem>
            </template>
          </ElSubMenu>
        </template>
        <template v-else-if="item.type === 2">
          <ElMenuItem :index="`${item.id}`" :route="item.url">
            <i v-if="item.icon" :class="item.icon" />
            <span>{{ item.name }}</span>
          </ElMenuItem>
        </template>
      </template>
    </ElMenu>
  </div>
</template>

<style lang="less" scoped>
.nav-menu {
  background-color: #001529;
  overflow: hidden;
  width: 100%;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    align-items: center;
    justify-content: flex-start;
    img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    width: 100%;
    border: none;
    background-color: #001529;
    transition-duration: 0s;
    .el-sub-menu {
      :deep(.el-sub-menu__title) {
        color: #fff;
      }
      :deep(.el-sub-menu__title:hover) {
        background-color: #001530;
      }
      background-color: #001529;
    }
    .el-menu-item {
      background-color: #0c2135;
      color: #fff;
    }
    .el-menu-item.is-active {
      background-color: #2a5fb6;
    }
  }
}
</style>

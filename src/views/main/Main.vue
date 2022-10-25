<script lang="ts" setup>
import { ElAside, ElContainer, ElHeader, ElMain } from "element-plus";
import { ref } from "vue";
import { NavMenu } from "~/components/nav-menu";
import NavHeader from "~/components/nav-header/cpns/NavHeader.vue";

// 折叠菜单
const isCollapse = ref(false);
const handelFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold;
};
</script>

<template>
  <div class="main">
    <ElContainer class="main-container">
      <ElAside :width="isCollapse ? '64px' : '220px'"
        ><NavMenu :isCollapse="isCollapse"
      /></ElAside>
      <ElContainer class="main-right">
        <ElHeader>
          <NavHeader @foldChange="handelFoldChange" />
        </ElHeader>
        <ElMain>
          <router-view />
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-container {
    display: flex;
    height: 100%;
    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #001529;
      cursor: pointer;
      transition: width 0.3s linear;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .main-right {
      flex: 1;
      .el-header {
        height: 48px;
      }
      .el-main {
        color: #333;
        text-align: center;
        background-color: #f0f2f5;
      }
    }
  }
}
</style>

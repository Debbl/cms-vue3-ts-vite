<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus';
import { NavMenu } from '@/components/nav-menu';
import NavHeader from '@/components/nav-header/cpns/NavHeader.vue';
import { ref } from 'vue';

// 折叠菜单
const isCollapse = ref(false);
const handelFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold;
};
</script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '64px' : '220px'"
        ><nav-menu :isCollapse="isCollapse"
      /></el-aside>
      <el-container class="main-right">
        <el-header>
          <nav-header @foldChange="handelFoldChange" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
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

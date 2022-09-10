<script lang="ts" setup>
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus';
import { NavMenu } from '@/components/nav-menu';
</script>

<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px"><NavMenu /></el-aside>
      <el-container class="main-right">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
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

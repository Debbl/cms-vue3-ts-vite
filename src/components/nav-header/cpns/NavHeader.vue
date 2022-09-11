<script lang="ts" setup>
import { ref } from 'vue';
import { ElIcon } from 'element-plus';
import { Expand, Fold } from '@element-plus/icons-vue';

// 折叠菜单
const emit = defineEmits<{
  (event: 'foldChange', isFold: boolean): void;
}>();
const isFold = ref(false);
const handelFoldClick = () => {
  isFold.value = !isFold.value;
  emit('foldChange', isFold.value);
};
</script>

<template>
  <div class="nav-header">
    <el-icon class="fold-icon" @click="handelFoldClick">
      <component :is="isFold ? Expand : Fold"></component>
    </el-icon>
  </div>
</template>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .fold-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script lang="ts" setup>
import { ref } from "vue";
import { ElIcon } from "element-plus";
import { Expand, Fold } from "@element-plus/icons-vue";
import UserInfo from "./UserInfo.vue";

// 折叠菜单
const emit = defineEmits<{
  (event: "foldChange", isFold: boolean): void;
}>();
const isFold = ref(false);
const handelFoldClick = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value);
};
</script>

<template>
  <div class="nav-header">
    <ElIcon class="fold-icon" @click="handelFoldClick">
      <component :is="isFold ? Expand : Fold"></component>
    </ElIcon>
    <div class="content">
      <div>面包屑</div>
      <div><UserInfo /></div>
    </div>
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
  .content {
    flex: 1;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

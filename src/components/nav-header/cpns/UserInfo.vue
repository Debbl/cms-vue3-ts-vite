<script lang="ts" setup>
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
} from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <ElDropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <ElIcon class="el-icon--right">
          <ArrowDown />
        </ElIcon>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>Action 1</ElDropdownItem>
          <ElDropdownItem>Action 2</ElDropdownItem>
          <ElDropdownItem>Action 3</ElDropdownItem>
          <ElDropdownItem disabled>Action 4</ElDropdownItem>
          <ElDropdownItem divided>Action 5</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

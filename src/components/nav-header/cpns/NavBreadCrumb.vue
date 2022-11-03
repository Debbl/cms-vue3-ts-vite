<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
import { computed } from "vue";
import { useRoute } from "vue-router";
import useLoginStore from "~/stores/modules/login.store";
import { mapPathToBreadCrumb } from "~/utils/mapMenus";

const route = useRoute();
const loginStore = useLoginStore();
const breadCrumb = computed(() =>
  mapPathToBreadCrumb(route.path, loginStore.userMenus)
);
</script>

<template>
  <div class="nav-breadcrumb">
    <ElBreadcrumb :separator-icon="ArrowRight">
      <template v-for="crumb in breadCrumb" :key="crumb.id">
        <ElBreadcrumbItem :to="crumb.url">
          {{ crumb.name }}
        </ElBreadcrumbItem>
      </template>
    </ElBreadcrumb>
  </div>
</template>

<style lang="less"></style>

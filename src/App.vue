<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCounterStore from '@/stores/modules/counter';
import { ElButton, ElCheckbox } from 'element-plus';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>
  <div>
    <h2>App</h2>
    <h2>{{ count }}</h2>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <ElCheckbox></ElCheckbox>
    <ElButton type="primary">按钮</ElButton>
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterView />
  </div>
</template>

<style scoped></style>

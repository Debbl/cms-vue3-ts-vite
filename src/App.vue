<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCounterStore from '@/stores/modules/counter';
import { ElButton, ElCheckbox } from 'element-plus';
import { dRequest } from '@/services';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);

interface DataType {
  args: any;
  headers: any;
  origin: any;
  url: string;
}

dRequest.get<DataType>({ url: 'http://httpbin.org/get' }).then((res) => {
  console.log(res.url);
});
dRequest.get<DataType>({ url: 'http://httpbin.org/get' }).then((res) => {
  console.log(res.url);
});
setTimeout(() => {
  dRequest.get<DataType>({ url: 'http://httpbin.org/get' }).then((res) => {
    console.log(res.url);
  });
}, 3000);
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

<script setup lang="ts">
import { ref } from 'vue';
import CounterPage from '@/components/CounterPage.vue';

const count = ref(0);
const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const foo = (num: number) => {
  return num + 1;
};
</script>

<template>
  <div>
    <h2>App</h2>
    <CounterPage :counter="count" />
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <h2>{{ foo(count) }}</h2>
  </div>
</template>

<style scoped></style>

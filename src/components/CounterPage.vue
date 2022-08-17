<script setup lang="ts">
const props = defineProps({
  counter: {
    type: Number,
  },
});

console.log(props.counter);
</script>

<template>
  <div>
    <h2>App</h2>
    <h2>{{ counter }}</h2>
  </div>
</template>

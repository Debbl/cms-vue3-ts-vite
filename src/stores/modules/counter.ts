import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
});

export default useCounterStore;

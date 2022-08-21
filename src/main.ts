import { createApp } from 'vue';
import router from '@/router';
import pinia from '@/stores';
import 'normalize.css';
import '@/assets/css/index.less';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');

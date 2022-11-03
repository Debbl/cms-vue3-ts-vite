import { createPinia } from "pinia";
import type { App } from "vue";
import useLoginStore from "./modules/login.store";

const pinia = createPinia();

function store(app: App) {
  app.use(pinia);
  const loginStore = useLoginStore();
  loginStore.loadLocalUserData();
}

export default store;

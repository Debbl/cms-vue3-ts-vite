/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string; // api url
  readonly VITE_TIMEOUT: number; // request timeout
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

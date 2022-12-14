<p align="center">
  <img src="src/assets/img/logo.svg" width="100">
</p>

# 1. 项目搭建

## 1.1 使用`create-vite` 创建项目

- vue+ts

## 1.2 不同 IDE 同步代码风格 `.editorconfig`

```yaml
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file

# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

## 1.3 ESLint 和 Perttier

### ESLint

- `pnpm i eslint -D`
- `npx eslint --init`

### Prettier

- `pnpm i prettier -D`

```js
// .prettierrc.cjs
module.exports = {
  useTabs: false, // tab 还是 空格
  tabWidth: 2, // tab 的宽度
  printWidth: 80, // 每行的最大字符数
  singleQuote: true, // 单引号
  trailingComma: "es5", // 末尾是否有逗号
  semi: true, // 是否使用分号
};
```

### ESLint Prettier

- `pnpm i eslint-config-prettier -D`
- `pnpm i eslint-plugin-prettier -D`

```js
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
  },
};
```

### ESLint + Vite

- `pnpm i vite-plugin-eslint -D`

```ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
});
```

# 2. 技术栈集成

## 2.1 vue-router

> 路由管理

- 按组件分块（动态加载组件）

```js
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
```

## 2.1 pinia

> 状态管理

- 按不同的数据分类放入`modules`文件夹中

## 2.3 UI 组件库 element-plus

- 组件使用手动导入，可以清楚的看到使用了那些组件
- 样式按需导入使用 `unplugin-element-plus` vite 插件

## 2.4 axios 集成和封装

- 封装 `axios`在`services/request` ,代理全局的请求，可以方便的自定义请求配置，方便更换请求库
- 按请求的数据类型分类放在 `services/modules/*`下

- `.env.[mode]` 区分不同的环境

- 封装多级拦截器

- loading 动画的显示

# 3. 初始化

## 3.1 CSS 重置

- normalize.css
- @/assets/css/reset.less

# 4. 基本功能

## 4.1 登录

- 登录验证，获取 token

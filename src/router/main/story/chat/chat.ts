import type { RouteRecordRaw } from "vue-router";

const Chat = () => import("@/views/main/story/chat/Chat.vue");

const chatRoute: RouteRecordRaw = {
  name: "chat",
  path: "/main/story/chat",
  component: Chat,
};

export default chatRoute;

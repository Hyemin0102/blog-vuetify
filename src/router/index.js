//router 설정

import HomeView from "@/views/HomeView.vue";
import FollowView from "@/views/FollowView.vue";
import FollowerView from "@/views/FollowerView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/follow", component: FollowView },
  { path: "/follower", component: FollowerView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes /* routes배열이랑 축약 */,
});

export default router;

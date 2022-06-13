import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/FormLogin.vue"),
  },
  {
    path: "/DataUser",
    name: "DataUser",
    component: () => import("../views/DataUsers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

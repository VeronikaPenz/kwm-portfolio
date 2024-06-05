import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/:route",
    component: () => import("./App.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

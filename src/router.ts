import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/:param1?/:param2?/:param3?",
    component: () => import("./pages/Slug.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  },
  routes,
});

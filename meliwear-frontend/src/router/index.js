import { createRouter, createWebHistory } from "vue-router";
import ShopLayout from "../layouts/ShopLayout.vue";
import Home from "../views/shop/Home.vue";

const routes = [
  {
    path: "/",
    component: ShopLayout,
    children: [{ path: "", name: "Home", component: Home }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

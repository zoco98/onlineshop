import { createWebHistory, createRouter } from "vue-router";

import home from "../components/Home.vue";
import registration from "../components/Registration.vue";
import checkout from "../components/Checkout.vue";
import ordersuccess from "../components/OrderSuccess.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/registration",
    name: "registration",
    component: registration
  },
  {
    path: "/checkout",
    name: "checkout",
    component: checkout
  },
  {
    path: "/ordersuccess",
    name: "ordersuccess",
    component: ordersuccess
  }
];
const router = createRouter({
  //mode: history
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
  linkExactActiveClass: "active-link-exact",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

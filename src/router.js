import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("./views/Product.vue")
    },
    {
      path: "/product",
      name: "product",
      component: () => import("./views/Product.vue")
    }
  ]
});

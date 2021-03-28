import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "tailwindcss/tailwind.css"
import Buefy from "buefy";
import "buefy/dist/buefy.css";

// start of Prismic.io
import PrismicVue from "@prismicio/vue";
import linkResolver from "./link-resolver.js";

Vue.use(PrismicVue, {
  endpoint: "https://electrocon.cdn.prismic.io/api/v2",
  linkResolver
  // apiOptions: { accessToken }
});
// - end of Prismic

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

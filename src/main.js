import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "babel-polyfill";
// import fastclick from "fastclick";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
import "@/common/stylus/index.styl";

// fastclick.attach(document.body);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require("./common/image/error.jpg"),
  loading: require("./common/image/squerrel.png"),
  attempt: 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

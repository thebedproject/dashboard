import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import MapPage from './pages/Map.page'
require("./assets/main.scss");

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
    path: "/donation-map",
    component: MapPage
  }]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

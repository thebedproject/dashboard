import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import DashboardPage from './pages/Dashboard.page'
import DonationMapPage from './pages/DonationMap.page'
import TransactionsMapPage from './pages/Transactions.page'
require("./assets/main.scss");

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [{
      path: "/donation-map",
      component: DonationMapPage
    },
    {
      path: "/bed-map",
      component: TransactionsMapPage
    },
    {
      path: "/",
      component: DashboardPage
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

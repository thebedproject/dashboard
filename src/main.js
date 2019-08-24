import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import LogInPage from './pages/LogIn.page'
import DonationMapPage from './pages/DonationMap.page'
import TransactionsMapPage from './pages/Transactions.page'
import SignUpPage from './pages/SignUp.page'
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
      path: "/sign-up",
      component: SignUpPage
    },
    {
      path: '/log-in',
      component: LogInPage
    },
    {
      path: "/",
      component: App
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");

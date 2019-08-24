import Vue from 'vue'
import VueRouter from "vue-router"
import Vuex from 'vuex'
import App from './App.vue'
import LogInPage from './pages/LogIn.page'
import DonationMapPage from './pages/DonationMap.page'
import DonatePage from './pages/Donate.page'
import TransactionsMapPage from './pages/Transactions.page'
import SignUpPage from './pages/SignUp.page'
require("./assets/main.scss");

Vue.use(VueRouter);
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    }
  },
  actions: {
    login({
      commit
    }, user) {
      const token = user.token
      localStorage.setItem('token', token)
      commit('auth_success', token, {
        id: user.id
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }

})

const router = new VueRouter({
  routes: [{
      path: "/donation-map",
      component: DonationMapPage
    },
    {
      path: "/donate",
      component: DonatePage
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
      path: '/login',
      component: LogInPage
    },
    {
      path: "/",
      component: App
    },
    {
      path: '*',
      redirect: '/login'
    }

  ]
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");

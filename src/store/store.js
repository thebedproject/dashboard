import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

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
    },
    logout(state) {
      state.status = ''
      state.token = ''
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
    },
    logout({
      commit
    }) {
      commit('logout')
      localStorage.removeItem('token')
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userId: state => state.user
  }
})

export default store

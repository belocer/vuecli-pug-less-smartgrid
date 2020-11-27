import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todos from './modules/todos'

export const store = new Vuex.Store({
  modules: {
    todos
  },
  state: {
    nav: false,
    countCart: 0,
  },
  mutations: {
    showMenu(state) {
      state.nav = true
    },
    closeMenu(state) {
      state.nav = false
    }
  },
  getters: {

  },
  actions: {

  }
})

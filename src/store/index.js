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
    exercise: 1,
    dataTraining: []
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
    getDataTraining(state) {
      state.dataTraining = require("./../data/data-trainig.json")
      return state.dataTraining
    }
  },
  actions: {

  }
})

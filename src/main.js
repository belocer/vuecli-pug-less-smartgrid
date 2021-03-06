import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'


Vue.use(Vuetify, {
  iconfont: 'mdi'
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Сountry from '@/components/Сountry'
import error404 from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/country',
      name: 'Country',
      component: Сountry
    },
    {
      path: '*',
      name: '404',
      component: error404
    },
  ]
})

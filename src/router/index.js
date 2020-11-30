import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Сountry from '@/components/Сountry'
import Cart from '@/components/Cart'
import Training from '@/components/Training'
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
      component: Сountry,
      beforeEnter (to, from, next) {
        console.log('beforeEnter')
        //this.nav = false
        next()
      }
    },
    {
      path: '/cart/:qty',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/training/:exercise',
      name: 'Training',
      component: Training,
      beforeRouteLeave (to, fromR, next) { // При загрузке данной страницы
        console.log('beforeRouteEnter')
        next(true)
        console.log(this.codes);
        this.codes = this.dataT[1].codeForExercise
      },
    },
    {
      path: '*',
      name: '404',
      component: error404
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
process.env.NODE_ENV === "development" ? Vue.use(Router) : null;
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'
process.env.NODE_ENV === "development" ? Vue.use(Router) : null;
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component:Layout,
      noDropdown:true,
      children:[
        {
          path:'/',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/pages/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/pages/about.vue')
    }
  ]
})

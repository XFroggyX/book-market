import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Sale from '../views/Sale'
import AuthorCatalog from '../views/AuthorCatalog'
import ProductInfo from '../views/ProductInfo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'login-layout'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      layout: 'login-layout'
    }
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/author-catalog',
    name: 'AuthorCatalog',
    component: AuthorCatalog
  },
  {
    path: '/product-info',
    name: 'ProductInfo',
    component: ProductInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

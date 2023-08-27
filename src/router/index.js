import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:idx',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  },
  {
    path: '/choosen/:idx/:type',
    name: 'specific',
    component: () => import(/* webpackChunkName: "page" */ '../views/SpecificProductView.vue')
  },
  {
    path: '/searchresult/:search',
    name: 'results',
    component: () => import(/* webpackChunkName: "result" */ '../views/SearchResultView.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import(/* webpackChunkName: "shoppingcart" */ '../views/ShoppingCartView.vue')
  },
  {
    path: '/sellform',
    name: 'sellform',
    component: () => import(/* webpackChunkName: "shoppingcart" */ '../views/SellFormularyView.vue')

  },
  {
    path: '/account',
    name: 'account',
    component: () => import(/* webpackChunkName: "shoppingcart" */ '../views/UserAccount.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/:room',
    name: 'specifiedWithRoom',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

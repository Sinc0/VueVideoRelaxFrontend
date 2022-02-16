import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/relax'
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/relax',
    name: 'Home',
    component: Home
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/relax/:room',
    name: 'specifiedWithRoom',
    component: Home,
  },
  {
    path: '/:room',
    redirect: '/relax'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/relax'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

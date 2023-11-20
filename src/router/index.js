//imports
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


//set routes
const routes = [
  // {
  //   path: '/',
  //   redirect: '/general',
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  { 
    path: '/:room', 
    name: 'specifiedWithRoom', 
    component: Home 
  },
  { 
    path: '/:room', 
    redirect: '/'
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/'
  },
]


//set router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


//exports
export default router

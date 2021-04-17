import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Done',
    name: 'Done',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DoneTodo" */ '../views/DoneTodo.vue')
  },
 
  {
    path:'/deletados',
    name:'Deletados',
    component:() => import('../views/Deletados.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

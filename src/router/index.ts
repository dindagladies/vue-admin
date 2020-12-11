import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Register from '@/public/Register.vue'

const routes: Array<RouteRecordRaw> = [
  // ---- by component ----
  {
    path: '/register',
    component: Register
  },
  // ----by import----
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue' // Login পেজটা ইমপোর্ট করা হলো

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login // হোম লিংকে গেলে Login পেজ দেখাবে
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/Welcome.vue') // পিন দেওয়ার পর Welcome পেজ দেখাবে
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('../views/Journey.vue')
    },
    {
      path: '/smile',
      name: 'smile',
      component: () => import('../views/Smile.vue')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('../views/Diary.vue')
    },
    {
      path: '/open-when',
      name: 'openWhen',
      component: () => import('../views/OpenWhen.vue')
    },
  ]
})

export default router
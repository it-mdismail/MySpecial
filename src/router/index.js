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
    {
      path: '/whispers',
      name: 'whispers',
      component: () => import('../views/DailyWhispers.vue')
    },
    {
      path: '/polaroid',
      name: 'polaroid',
      component: () => import('../views/Polaroid.vue')
    },
    {
      path: '/thoughts',
      name: 'thoughts',
      component: () => import('../views/Thoughts.vue')
    },
    {
      path: '/future-chapters',
      name: 'futureChapters',
      component: () => import('../views/futureChapters.vue')
    },
    {
      path: '/mood',
      name: 'mood',
      component: () => import('../views/Mood.vue')
    },
    {
      path: '/jar',
      name: 'jar',
      component: () => import('../views/Jar.vue')
    },
    {
      path: '/vinyl',
      name: 'vinyl',
      component: () => import('../views/VinylPlayer.vue')
    },
    
  ]
})

export default router
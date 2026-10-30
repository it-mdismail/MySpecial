// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue' 

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login 
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('../views/Welcome.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/journey',
    name: 'journey',
    component: () => import('../views/Journey.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/smile',
    name: 'smile',
    component: () => import('../views/Smile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/diary',
    name: 'diary',
    component: () => import('../views/Diary.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/open-when',
    name: 'openWhen',
    component: () => import('../views/OpenWhen.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/whispers',
    name: 'whispers',
    component: () => import('../views/DailyWhispers.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/polaroid',
    name: 'polaroid',
    component: () => import('../views/Polaroid.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/thoughts',
    name: 'thoughts',
    component: () => import('../views/Thoughts.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/future-chapters',
    name: 'futureChapters',
    component: () => import('../views/futureChapters.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mood',
    name: 'mood',
    component: () => import('../views/Mood.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/jar',
    name: 'jar',
    component: () => import('../views/Jar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/vinyl',
    name: 'vinyl',
    component: () => import('../views/VinylPlayer.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// সিকিউরিটি গার্ড (Route Guard)
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
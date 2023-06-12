// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth';
import { onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    name:'Login',
    path: '/',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    name:'Register',
    path: '/register',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

;


export default router

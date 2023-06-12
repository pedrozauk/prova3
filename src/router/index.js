// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth';

const routes = [
  {
    name:'Login',
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    name:'Register',
    path: '/register',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
  path: '/',
  component: () => import('@/layouts/default/Default.vue'),
  children: [
    {
      name: 'Home',
      path: '/home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/cadastro_filmes',
      name: 'CadastroFilme',
      component: () => import('@/views/CadFilme.vue'),
    }
  ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

;


export default router

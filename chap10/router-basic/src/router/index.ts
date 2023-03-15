import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppTop from '@/views/AppTop.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop
  }
]

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

export default router

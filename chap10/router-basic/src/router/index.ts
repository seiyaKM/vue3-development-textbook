import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AppTop from '@/views/AppTop.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop
  },
  {
    path: '/member/member-list',
    name: 'MemberList',
    component: () => import('@/views/MemberList.vue')
  },
  {
    path: '/member/detail/:id',
    name: 'MemberDetail',
    component: () => import('@/views/MemberDetail.vue'),
    props: (routes) => {
      const id = Number(routes.params.id)
      return { id }
    }
  }
]

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes })

export default router

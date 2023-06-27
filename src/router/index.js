import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/projects',
    component: () => import('@/layouts/DefaultLayout.vue'),
    alias: '/',
    children: [
      {
        path: '',
        name: 'ProjectsPage',
        component: () => import('@/views/ProjectsPage.vue')
      }
    ]
  },
  {
    path: '/tasks',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'TasksPage',
        component: () => import('@/views/TasksPage.vue')
      }
    ]
  },
  {
    path: '/users',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'UsersPage',
        component: () => import('@/views/UsersPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'header__link_active',
  linkExactActiveClass: 'header__link_active'
})

export default router

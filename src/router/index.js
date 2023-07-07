import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/projects',
    component: () => import('@/layouts/DefaultLayout.vue'),
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
  },
  {
    path: '/profile',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'ProfilePage',
        component: () => import('@/views/ProfilePage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        name: 'LoginPage',
        component: () => import('@/views/LoginPage.vue')
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

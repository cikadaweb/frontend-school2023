import Vue from 'vue'
import VueRouter from 'vue-router'

const authGuard = function (to, from, next) {
  const isUserLoggedIn = localStorage.getItem('token')
  if (!isUserLoggedIn) next({ name: 'LoginPage' })
  else next()
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/projects',
    beforeEnter: authGuard,
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
    beforeEnter: authGuard,
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'TasksPage',
        component: () => import('@/views/TasksPage.vue')
      },
      {
        path: 'create',
        name: 'CreateTaskPage',
        component: () => import('@/views/CreateTaskPage.vue')
      }
    ]
  },
  {
    path: '/users',
    beforeEnter: authGuard,
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
    beforeEnter: authGuard,
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
  },
  {
    path: '*',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue')
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

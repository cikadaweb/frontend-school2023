import { AuthApi } from '@/api/AuthApi'
import { DefaultAPIInstance } from '@/api'
import router from '@/router'

export const mutation = {
  SET_TOKEN: 'SET_TOKEN'
}

export default {
  namespaced: true,
  state: {
    credentials: {
      token: localStorage.getItem('token') || null
    }
  },
  actions: {
    async loginUser ({ state, commit }, { login, password }) {
      try {
        const response = await AuthApi.login(login, password)
        const data = await response.data
        commit(mutation.SET_TOKEN, data.token)
        localStorage.setItem('token', data.token)
        DefaultAPIInstance.defaults.headers.Authorization = `Bearer ${state.credentials.token}`
        router.push('/')
      } catch (error) {
        router.push('/login/?message=login')
      }
    }
  },
  mutations: {
    [mutation.SET_TOKEN]: (state, token) => {
      state.credentials.token = token
    }
  },
  getters: {}
}

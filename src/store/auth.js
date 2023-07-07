import { AuthApi } from '@/api/AuthApi'
import { DefaultAPIInstance } from '@/api'

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
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
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

import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/user'
import project from '@/store/project'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { user, project }
})

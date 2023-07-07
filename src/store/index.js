import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/auth'
import user from '@/store/user'
import project from '@/store/project'
import task from '@/store/task'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth, user, project, task }
})

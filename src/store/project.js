import { ProjectsApi } from '@/api/ProjectApi';
// import { DefaultAPIInstance } from '@/api';

export const mutation = {
  SET_PROJECTS_LIST: 'SET_PROJECTS_LIST',
  SET_PROJECTS_CURRENT_PAGE: 'SET_PROJECTS_CURRENT_PAGE',
  SET_PROJECTS_TOTAL_PAGES: 'SET_PROJECTS_TOTAL_PAGES',
  SET_PROJECTS_CURRENT_PROJECT: 'SET_PROJECTS_CURRENT_PROJECT'
};

export default {
  namespaced: true,
  state: {
    projectList: [],
    currentPage: 1,
    totalPages: null,
    currentProject: {}
  },
  getters: {
    getProjectList: (state) => state.projectList,
    getTotalPages: (state) => state.totalPages,
    getCurrentPage: (state) => state.currentPage,
    getCurrentProject: (state) => state.currentProject
  },
  actions: {
    async getProjects({ state, commit }, objData = { page: 1 }) {
      try {
        const response = await ProjectsApi.getProjects(objData);
        const data = await response.data;
        commit(mutation.SET_PROJECTS_LIST, data.projects);
        commit(mutation.SET_PROJECTS_TOTAL_PAGES, data.total);
        commit(mutation.SET_PROJECTS_CURRENT_PAGE, data.page);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async createProject({ state, commit }, { name, code }) {
      try {
        // const response = await ProjectsApi.createProject(name, code);
        // const data = await response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async editProject({ state, commit }, { _id, name, code }) {
      try {
        // const response = await ProjectsApi.editProject(_id, name, code);
        // const data = await response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async deleteProject({ state, commit }, { _id }) {
      try {
        // const response = await ProjectsApi.deleteProject(_id);
        // const data = await response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    setCurrentPage(context, page) {
      context.commit(mutation.SET_PROJECTS_CURRENT_PAGE, page);
    },
    setCurrentProject(context, project) {
      context.commit(mutation.SET_PROJECTS_CURRENT_PROJECT, project);
    }
  },
  mutations: {
    [mutation.SET_PROJECTS_LIST]: (state, payload) => {
      state.projectList = payload;
    },
    [mutation.SET_PROJECTS_TOTAL_PAGES]: (state, payload) => {
      state.totalPages = payload;
    },
    [mutation.SET_PROJECTS_CURRENT_PAGE]: (state, payload) => {
      state.currentPage = payload;
    },
    [mutation.SET_PROJECTS_CURRENT_PROJECT]: (state, payload) => {
      state.currentProject = payload;
    }
  }
};

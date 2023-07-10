// import { ProjectsApi } from '@/api/ProjectsApi';
// import { DefaultAPIInstance } from '@/api';

// export const mutation = {
//   SET_PROJECTS: 'SET_PROJECTS',
// };

export default {
  namespaced: true,
  state: {
    projects: [
      {
        _id: 1,
        code: '#1',
        name: 'А.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.'
      },
      {
        _id: 2,
        code: '#1',
        name: 'Б.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка если Б.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка если',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.'
      },
      {
        _id: 3,
        code: '#1',
        name: 'В.Название',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.'
      },
      {
        _id: 4,
        code: '#123456s8901234567890123456sdd01234567890123ssa1231',
        name: 'Г.Название',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.'
      }
    ]
  },
  actions: {
    // async createProduct({ state, commit }, { name, code }) {
    //   try {
    //     const response = await ProjectsApi.getProjects(name, code);
    //     const data = await response.data;
    //     commit(mutation.SET_PROJECTS, data.token);
    //   } catch (error) {
    //     throw error;
    //   }
    // },
  },
  mutations: {
    // [mutation.SET_PROJECTS]: (state, projects) => {
    //   state.projects = projects;
    // },
  },
  getters: {}
}

export default {
  namespaced: true,
  state: {
    tasks: [
      {
        _id: 1,
        projectId: 1,
        number: 1,
        name: 'Название',
        description: '',
        status: 'DRAFT',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.',
        executor: '',
        time: ''
      },
      {
        _id: 2,
        projectId: 2,
        number: 2,
        name: 'Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка...Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка...Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка...',
        description: '',
        status: 'DRAFT',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.',
        executor: '',
        time: ''
      },
      {
        _id: 3,
        projectId: 3,
        number: 3,
        name: 'Название',
        description: '',
        status: 'COMPLETED',
        author: 'Иванов И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Баранов В.В.',
        executor: '',
        time: ''
      },
      {
        _id: 4,
        projectId: 4,
        number: 4,
        name: 'Название',
        description: '',
        status: 'DELETED',
        author: 'Петров И.И.',
        dateCreated: 'создал(а) 1 час назад',
        dateEdited: 'изменил(а) 1 минуту назад',
        authorEdited: 'Сазонова В.В.',
        executor: '',
        time: ''
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
}

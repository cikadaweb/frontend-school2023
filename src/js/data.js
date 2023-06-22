let projects = [
  {
    _id: 1,
    code: "#1",
    name: "А.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
  },
  {
    _id: 2,
    code: "#1",
    name: "Б.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка если",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
  },
  {
    _id: 3,
    code: "#1",
    name: "В.Название",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
  },
  {
    _id: 4,
    code: "#123456s8901234567890123456sdd01234567890123ssa1231",
    name: "Г.Название",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
  },
];

let tasks = [
  {
    _id: 1,
    projectId: 1,
    number: 1,
    name: "Название",
    description: "",
    status: "Черновик",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
    executor: "",
    time: "",
  },
  {
    _id: 2,
    projectId: 2,
    number: 2,
    name: "Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка...",
    description: "",
    status: "Черновик",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
    executor: "",
    time: "",
  },
  {
    _id: 3,
    projectId: 3,
    number: 3,
    name: "Название",
    description: "",
    status: "Черновик",
    author: "Иванов И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Баранов В.В.",
    executor: "",
    time: "",
  },
  {
    _id: 4,
    projectId: 4,
    number: 4,
    name: "Название",
    description: "",
    status: "Черновик",
    author: "Петров И.И.",
    dateCreated: "создал(а) 1 час назад",
    dateEdited: "изменил(а) 1 минуту назад",
    authorEdited: "Сазонова В.В.",
    executor: "",
    time: "",
  },
];

export default { projects, tasks };

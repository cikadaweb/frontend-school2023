import { createNavigation } from "../components/navigation/index";
import { createPlaceholder } from "../components/placeholder/index";
import { createProjectItem } from "../components/project-item/index";
import { createTaskItem } from "../components/task-item/index";

import "../scss/style.scss";

// let cards = [
//   {
//     name: "name 1",
//     info: {
//       description: "description 1",
//       date: "12.12.2022",
//     },
//   },
//   {
//     name: "name 2",
//     info: {
//       description: "description 2",
//       date: "10.12.2022",
//     },
//   },
// ];

function initApp() {
  let app = document.querySelector(".app");

  let navHtml = createNavigation();
  let placeholderHtml = createPlaceholder();
  let projectItemHtml = createProjectItem();
  let taskItemHtml = createTaskItem();

  app.insertAdjacentHTML("afterbegin", navHtml);
  app.insertAdjacentHTML("afterend", placeholderHtml);
  app.insertAdjacentHTML("afterend", projectItemHtml);
  app.insertAdjacentHTML("afterend", taskItemHtml);
}

initApp();

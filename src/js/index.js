import {
  createNavigation,
  addNavigationListener,
} from "../components/navigation/index";
import {
  createProjectItems,
  addProjectItemListener,
} from "../components/project-item/index";
import {
  createTaskItems,
  addTaskItemListener,
} from "../components/task-item/index";
import { createPlaceholder } from "../components/placeholder/index";
import { addKebabBtnListener } from "./kebab-btn";

import data from "../js/data";

import "../scss/style.scss";
import "../js/register";

function initApp() {
  let app = document.querySelector(".app");

  let navHtml = createNavigation();
  let projectItemHtml = createProjectItems(data.projects);
  let taskItemHtml = createTaskItems(data.tasks);
  let placeholderHtml = createPlaceholder();

  app.insertAdjacentHTML("afterbegin", navHtml);
  app.insertAdjacentHTML("afterend", placeholderHtml);
  app.insertAdjacentHTML("afterend", projectItemHtml);
  app.insertAdjacentHTML("afterend", taskItemHtml);

  addNavigationListener();
  addKebabBtnListener();
  addTaskItemListener();
  addProjectItemListener();
}

initApp();

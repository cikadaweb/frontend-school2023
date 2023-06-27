import {
  createNavigation,
  addNavigationListener,
} from "@/components/navigation/index";
import {
  createProjectsButtons,
  addProjectsButtonsListener,
  createTasksButtons,
  addTasksButtonsListener,
} from "@/components/hm3-http-promise/index";
// import {
//   createProjectItems,
//   addProjectItemListener,
// } from "@/components/project-item/index";
// import {
//   createTaskItems,
//   addTaskItemListener,
// } from "@/components/task-item/index";
// import { createPlaceholder } from "@/components/placeholder/index";
// import { addKebabBtnListener } from "./kebab-btn";

import data from "@/js/data";
import { getToken } from "@/components/hm3-http-promise/api.js";

import "@/scss/style.scss";
import "@/js/register";

function initApp() {
  getToken();

  let app = document.querySelector(".app");
  const activeLink = localStorage.getItem("active-link");

  let navHtml = createNavigation();
  let buttons;
  if (activeLink === "tasks") {
    buttons = createTasksButtons();
  } else {
    buttons = createProjectsButtons();
  }
  // let projectItemHtml = createProjectItems(data.projects);
  // let taskItemHtml = createTaskItems(data.tasks);
  // let placeholderHtml = createPlaceholder();

  app.insertAdjacentHTML("afterbegin", navHtml);
  app.insertAdjacentHTML("afterend", buttons);
  // app.insertAdjacentHTML("afterend", placeholderHtml);
  // app.insertAdjacentHTML("afterend", projectItemHtml);
  // app.insertAdjacentHTML("afterend", taskItemHtml);

  if (activeLink !== undefined && activeLink === "tasks") {
    addTasksButtonsListener();
  } else {
    addProjectsButtonsListener();
  }

  addNavigationListener();
  // addKebabBtnListener();
  // addTaskItemListener();
  // addProjectItemListener();

  setActiveLinkClass();
}
function setActiveLinkClass() {
  const currentActiveLink = localStorage.getItem("active-link");
  if (currentActiveLink === "tasks") {
    document
      .querySelector(".header__link[data-items=tasks]")
      .classList.add("header__link_active");
    return;
  }
  document
    .querySelector(".header__link[data-items=projects]")
    .classList.add("header__link_active");
}

initApp();

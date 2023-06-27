import {
  createNavigation,
  addNavigationListener,
} from "@/components/navigation/index";
import {
  createProjectItems,
  addProjectItemListener,
} from "@/components/project-item/index";
import {
  createTaskItems,
  addTaskItemListener,
} from "@/components/task-item/index";
import { createPlaceholder } from "@/components/placeholder/index";
import { addKebabBtnListener } from "@/js/kebab-btn.js";

import data from "@/js/data";

import "@/scss/style.scss";
import "@/js/register";

function initApp() {
  let app = document.querySelector(".app");
  const activeLink = localStorage.getItem("active-link");

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

  setActiveLinkClass();
}
function setActiveLinkClass() {
  const currentActiveLink = localStorage.getItem("active-link");
  if (currentActiveLink === "tasks") {
    document
      .querySelector(".header__link[data-items=tasks]")
      .classList.add("header__link_active");
    return;
  } else if (currentActiveLink === "users") {
    document
      .querySelector(".header__link[data-items=users]")
      .classList.add("header__link_active");
    return;
  }
  document
    .querySelector(".header__link[data-items=projects]")
    .classList.add("header__link_active");
}

initApp();

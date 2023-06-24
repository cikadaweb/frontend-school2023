function createProject({
  _id,
  code,
  name,
  author,
  dateCreated,
  dateEdited,
  authorEdited,
}) {
  return `<div class="project-item">
        <div class="project-item__container">
          <div class="project-item__header">
            <div>${name}</div>
          </div>

          <div class="project-item__body">
            <div>${code}</div>
            <div class="project-item__text">${author} ${dateCreated}</div>

            <div class="project-item__text">
              ${authorEdited} ${dateEdited}
            </div>
          </div>

          <div class="kebab-btn">
            <svg width="24" height="24">
              <use xlink:href="#dots" />
            </svg>
          </div>
          <div class="kebab-btn__dropdown-menu">
            <ul class="kebab-btn__dropdown-list">
              <li>
                <a href="#" class="kebab-btn__dropdown-link">Редактировать</a>
              </li>
              <li>
                <a href="#" class="kebab-btn__dropdown-link kebab-btn__dropdown-link_red">Удалить</a>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
}

function createProjectItems(projects) {
  let projectItemsTemplate = "";
  projects.forEach((project) => {
    projectItemsTemplate += createProject(project);
  });
  projectItemsTemplate = `<div class="container">${projectItemsTemplate}</div>`;

  return projectItemsTemplate;
}

function addProjectItemListener() {
  // обрабатываем hover эффект
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.classList.add("project-item_active");
    });
    project.addEventListener("mouseleave", () => {
      const kebabButtonActive = project.querySelector(
        ".kebab-btn__dropdown-menu_active"
      );
      // если меню открыто, то project-item_active актуально
      if (!kebabButtonActive) {
        project.classList.remove("project-item_active");
      }
    });
  });
}

export { createProjectItems, addProjectItemListener };

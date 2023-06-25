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
            <div class="project-item__title">${name}</div>
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
  projectItemsTemplate = `<div class="container container_project-items">${projectItemsTemplate}</div>`;

  return projectItemsTemplate;
}

function addProjectItemListener() {
  const container = document.querySelector(".container_project-items");

  container.addEventListener("mouseover", (event) => {
    const projectItem = event.target.closest(".project-item");
    if (projectItem) {
      projectItem.classList.add("project-item_active");
    }
  });

  container.addEventListener("mouseout", (event) => {
    const projectItem = event.target.closest(".project-item");
    if (projectItem) {
      const kebabButtonActive = projectItem.querySelector(
        ".kebab-btn__dropdown-menu_active"
      );
      if (!kebabButtonActive) {
        projectItem.classList.remove("project-item_active");
      }
    }
  });

  container.addEventListener("click", (event) => {
    const kebabButton = event.target.closest(".kebab-btn");
    if (kebabButton) {
      kebabButton.classList.toggle("kebab-btn_active");
      const kebabDropdownMenu = kebabButton.nextElementSibling;
      kebabDropdownMenu.classList.toggle("kebab-btn__dropdown-menu_active");
    }
  });
}

export { createProjectItems, addProjectItemListener };

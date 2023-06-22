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

export { createProjectItems };

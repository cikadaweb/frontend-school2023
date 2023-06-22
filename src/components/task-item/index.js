import imgPath from "../../assets/images/avatar.png";

function createTask({
  _id,
  projectId,
  number,
  name,
  description,
  status,
  author,
  dateCreated,
  dateEdited,
  authorEdited,
  executor,
  time,
}) {
  return ` <div class="task-item">
        <div class="task-item__container">
          <div class="task-item__header">
            <div>${name}</div>
            <img
              class="user-avatar"
              src="${imgPath}"
              alt="profile-img"
            />
          </div>

          <div class="task-item__body">
            <div>#1</div>
            <div class="task-item__text">${author} ${dateCreated}</div>

            <div class="task-badge">${status}</div>

            <div class="task-item__text">
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

function createTaskItems(tasks) {
  let taskItemsTemplate = "";
  tasks.forEach((task) => {
    taskItemsTemplate += createTask(task);
  });
  taskItemsTemplate = `<div class="container">${taskItemsTemplate}</div>`;

  return taskItemsTemplate;
}

export { createTaskItems };

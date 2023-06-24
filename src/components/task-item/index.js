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

function createTaskItems(tasks) {
  let taskItemsTemplate = "";
  tasks.forEach((task) => {
    taskItemsTemplate += createTask(task);
  });
  taskItemsTemplate = `<div class="container container_task-items">${taskItemsTemplate}</div>`;

  return taskItemsTemplate;
}

function addTaskItemListener() {
  // обрабатываем hover эффект
  const taskItems = document.querySelectorAll(".task-item");
  taskItems.forEach((task) => {
    task.addEventListener("mouseenter", () => {
      task.classList.add("task-item_active");
    });
    task.addEventListener("mouseleave", () => {
      const kebabButtonActive = task.querySelector(
        ".kebab-btn__dropdown-menu_active"
      );
      // если меню открыто, то task-item_active актуально
      if (!kebabButtonActive) {
        task.classList.remove("task-item_active");
      }
    });
  });
}

export { createTaskItems, addTaskItemListener };

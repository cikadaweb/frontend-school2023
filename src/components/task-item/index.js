import imgPath from "@/assets/images/avatar.png";

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
  return `<div class="task-item">
        <div class="task-item__container">
          <div class="task-item__header">
            <div class="task-item__title">${name}</div>
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
  const container = document.querySelector(".container_task-items");

  container.addEventListener("mouseover", (event) => {
    const taskItem = event.target.closest(".task-item");
    if (taskItem) {
      taskItem.classList.add("task-item_active");
    }
  });

  container.addEventListener("mouseout", (event) => {
    const taskItem = event.target.closest(".task-item");
    if (taskItem) {
      const kebabButtonActive = taskItem.querySelector(
        ".kebab-btn__dropdown-menu_active"
      );
      if (!kebabButtonActive) {
        taskItem.classList.remove("task-item_active");
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

export { createTaskItems, addTaskItemListener };

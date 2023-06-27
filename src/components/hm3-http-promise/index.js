import {
  sendRequestXML,
  sendRequestFetch,
  sendRequestAxios,
} from "@/components/hm3-http-promise/api.js";

function createProjectsButtons() {
  return `<section class="projects-buttons">
      <div class="container">
        <ul class="projects-buttons__list">
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=create-xml type="button">
              Создать проект с XMLHttpRequest
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=create-fetch type="button">
              Создать проект с Fetch
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=create-axios type="button">
              Создать проект с Axios
            </button>
          </li>
        </ul>
        <ul class="projects-buttons__list">
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=get-xml type="button">
              Получить проект с XMLHttpRequest
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=get-fetch type="button">
              Получить проект с Fetch
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=get-axios type="button">
              Получить проект с Axios
            </button>
          </li>
        </ul>
        <ul class="projects-buttons__list">
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=edit-xml type="button">
              Редактировать проект с XMLHttpRequest
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=edit-fetch type="button">
              Редактировать проект с Fetch
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=edit-axios type="button">
              Редактировать проект с Axios
            </button>
          </li>
        </ul>
        <ul class="projects-buttons__list">
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=delete-xml type="button">
              Удалить проект с XMLHttpRequest
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=delete-fetch type="button">
              Удалить проект с Fetch
            </button>
          </li>
          <li class="projects-buttons__item">
            <button class="button projects-buttons__btn" data-method=delete-axios type="button">
              Удалить проект с Axios
            </button>
          </li>
        </ul>
      </div>
    </section>`;
}
function createTasksButtons() {
  return `<section class="tasks-buttons">
      <div class="container">
        <ul class="tasks-buttons__list">
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=create-xml type="button">
              Создать задачу с XMLHttpRequest
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=create-fetch type="button">
              Создать задачу с Fetch
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=create-axios type="button">
              Создать задачу с Axios
            </button>
          </li>
        </ul>
        <ul class="tasks-buttons__list">
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=get-xml type="button">
              Получить задачу с XMLHttpRequest
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=get-fetch type="button">
              Получить задачу с Fetch
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=get-axios type="button">
              Получить задачу с Axios
            </button>
          </li>
        </ul>
        <ul class="tasks-buttons__list">
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=edit-xml type="button">
              Редактировать задачу с XMLHttpRequest
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=edit-fetch type="button">
              Редактировать задачу с Fetch
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=edit-axios type="button">
              Редактировать задачу с Axios
            </button>
          </li>
        </ul>
        <ul class="tasks-buttons__list">
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=delete-xml type="button">
              Удалить задачу с XMLHttpRequest
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=delete-fetch type="button">
              Удалить задачу с Fetch
            </button>
          </li>
          <li class="tasks-buttons__item">
            <button class="button tasks-buttons__btn" data-method=delete-axios type="button">
              Удалить задачу с Axios
            </button>
          </li>
        </ul>
      </div>
    </section>`;
}
function addProjectsButtonsListener() {
  const projectsButtons = document.querySelector(".projects-buttons");
  projectsButtons.addEventListener("click", (event) => {
    const currentElem = event.target;
    if (currentElem.classList.contains("projects-buttons__btn")) {
      if (currentElem.dataset.method.includes("xml")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestXML("POST", "/projects", {
            name: "Фурия",
            code: "thewikihow",
          }).then((data) => {
            localStorage.setItem("currentProjectId", data._id);
            console.log("Создание проекта с помощью XMLHttpRequest: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestXML(
            "GET",
            `/projects/${localStorage.getItem("currentProjectId")}`
          ).then((data) => {
            console.log(
              `Получение проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью XMLHttpRequest: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestXML("PUT", `/projects`, {
            _id: localStorage.getItem("currentProjectId"),
            name: "editName",
            code: "editCode",
          }).then((data) => {
            console.log(
              `Редактирование проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью XMLHttpRequest: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestXML(
            "DELETE",
            `/projects/${localStorage.getItem("currentProjectId")}`
          )
            .then((data) => {
              console.log(
                `Удаление проекта c id = ${localStorage.getItem(
                  "currentProjectId"
                )} с помощью XMLHttpRequest: `,
                data
              );
            })
            .catch((error) => {
              console.error(`Ошибка при удалении проекта:`, error);
            });
        }
      }
      if (currentElem.dataset.method.includes("fetch")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestFetch("/projects", {
            method: "POST",
            body: {
              name: "Жигулесла",
              code: "thewikihow",
            },
          }).then((data) => {
            localStorage.setItem("currentProjectId", data._id);
            console.log("Создание проекта с помощью API Fetch: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestFetch(
            `/projects/${localStorage.getItem("currentProjectId")}`,
            {
              method: "GET",
            }
          ).then((data) => {
            console.log(
              `Получение проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestFetch("/projects", {
            method: "PUT",
            body: {
              _id: localStorage.getItem("currentProjectId"),
              name: "editName",
              code: "editCode",
            },
          }).then((data) => {
            console.log(
              `Редактирование проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestFetch(
            `/projects/${localStorage.getItem("currentProjectId")}`,
            {
              method: "DELETE",
            }
          ).then((data) => {
            console.log(
              `Удаление проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
      }
      if (currentElem.dataset.method.includes("axios")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestAxios("/projects", "POST", {
            name: "Черныш",
            code: "thewikihow",
          }).then((data) => {
            localStorage.setItem("currentProjectId", data._id);
            console.log("Создание проекта с помощью Axios: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestAxios(
            `/projects/${localStorage.getItem("currentProjectId")}`,
            "GET"
          ).then((data) => {
            console.log(
              `Получение проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью Axios: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestAxios("/projects", "PUT", {
            _id: localStorage.getItem("currentProjectId"),
            name: "editName",
            code: "editCode",
          }).then((data) => {
            console.log(
              `Редактирование проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью Axios: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestAxios(
            `/projects/${localStorage.getItem("currentProjectId")}`,
            "DELETE"
          ).then((data) => {
            console.log(
              `Редактирование проекта c id = ${localStorage.getItem(
                "currentProjectId"
              )} с помощью Axios: `,
              data
            );
          });
        }
      }
    }
  });
}
function addTasksButtonsListener() {
  const projectsButtons = document.querySelector(".tasks-buttons");
  projectsButtons.addEventListener("click", (event) => {
    const currentElem = event.target;
    if (currentElem.classList.contains("tasks-buttons__btn")) {
      if (currentElem.dataset.method.includes("xml")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestXML("POST", "/tasks", {
            name: "Сундук",
            description: "Описание сундука",
            projectId: localStorage.getItem("currentProjectId"),
            executor: "id",
          }).then((data) => {
            localStorage.setItem("currentTaskId", data._id);
            console.log("Создание задачи с помощью XMLHttpRequest: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestXML(
            "GET",
            `/tasks/${localStorage.getItem("currentTaskId")}`
          ).then((data) => {
            console.log(
              `Получение задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью XMLHttpRequest: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestXML("PUT", `/tasks`, {
            _id: localStorage.getItem("currentTaskId"),
            name: "editName",
            description: "editDescription",
            projectId: localStorage.getItem("currentProjectId"),
            executor: "",
            status: "IN_PROCESS",
          }).then((data) => {
            console.log(
              `Редактирование задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью XMLHttpRequest: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestXML(
            "DELETE",
            `/tasks/${localStorage.getItem("currentTaskId")}`
          )
            .then((data) => {
              console.log(
                `Удаление задачи c id = ${localStorage.getItem(
                  "currentTaskId"
                )} с помощью XMLHttpRequest: `,
                data
              );
            })
            .catch((error) => {
              console.error(`Ошибка при удалении задачи:`, error);
            });
        }
      }
      if (currentElem.dataset.method.includes("fetch")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestFetch("/tasks", {
            method: "POST",
            body: {
              name: "Сундук",
              description: "Описание сундука",
              projectId: localStorage.getItem("currentProjectId"),
              executor: "id",
            },
          }).then((data) => {
            localStorage.setItem("currentTaskId", data._id);
            console.log("Создание задачи с помощью API Fetch: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestFetch(`/tasks/${localStorage.getItem("currentTaskId")}`, {
            method: "GET",
          }).then((data) => {
            console.log(
              `Получение задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestFetch("/tasks", {
            method: "PUT",
            body: {
              _id: localStorage.getItem("currentTaskId"),
              name: "editName",
              description: "editDescription",
              projectId: localStorage.getItem("currentProjectId"),
              executor: "",
              status: "IN_PROCESS",
            },
          }).then((data) => {
            console.log(
              `Редактирование задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestFetch(`/tasks/${localStorage.getItem("currentTaskId")}`, {
            method: "DELETE",
          }).then((data) => {
            console.log(
              `Удаление задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью API Fetch: `,
              data
            );
          });
        }
      }
      if (currentElem.dataset.method.includes("axios")) {
        if (currentElem.dataset.method.includes("create")) {
          sendRequestAxios("/tasks", "POST", {
            name: "Сундук",
            description: "Описание сундука",
            projectId: localStorage.getItem("currentProjectId"),
            executor: "id",
          }).then((data) => {
            localStorage.setItem("currentTaskId", data._id);
            console.log("Создание задачи с помощью Axios: ", data);
          });
        }
        if (currentElem.dataset.method.includes("get")) {
          sendRequestAxios(
            `/tasks/${localStorage.getItem("currentTaskId")}`,
            "GET"
          ).then((data) => {
            console.log(
              `Получение задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью Axios: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("edit")) {
          sendRequestAxios("/tasks", "PUT", {
            _id: localStorage.getItem("currentTaskId"),
            name: "editName",
            description: "editDescription",
            projectId: localStorage.getItem("currentProjectId"),
            executor: "",
            status: "IN_PROCESS",
          }).then((data) => {
            console.log(
              `Редактирование задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью Axios: `,
              data
            );
          });
        }
        if (currentElem.dataset.method.includes("delete")) {
          sendRequestAxios(
            `/tasks/${localStorage.getItem("currentTaskId")}`,
            "DELETE"
          ).then((data) => {
            console.log(
              `Редактирование задачи c id = ${localStorage.getItem(
                "currentTaskId"
              )} с помощью Axios: `,
              data
            );
          });
        }
      }
    }
  });
}

export {
  createProjectsButtons,
  addProjectsButtonsListener,
  createTasksButtons,
  addTasksButtonsListener,
};

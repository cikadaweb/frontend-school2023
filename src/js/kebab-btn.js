function addKebabBtnListener() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    const isKebabButton = target.closest(".kebab-btn");
    const isDropdownMenu = target.closest(".kebab-btn__dropdown-menu");

    if (!isKebabButton && !isDropdownMenu) {
      const activeDropdownMenus = document.querySelectorAll(
        ".kebab-btn__dropdown-menu_active"
      );
      const activeKebabButtons = document.querySelectorAll(".kebab-btn_active");

      activeDropdownMenus.forEach((menu) => {
        menu.classList.remove("kebab-btn__dropdown-menu_active");
      });

      activeKebabButtons.forEach((button) => {
        button.classList.remove("kebab-btn_active");
      });

      const activeTaskItems = document.querySelectorAll(".task-item_active");
      const activeProjectItems = document.querySelectorAll(
        ".project-item_active"
      );
      activeTaskItems.forEach((taskItem) => {
        taskItem.classList.remove("task-item_active");
      });
      activeProjectItems.forEach((taskItem) => {
        taskItem.classList.remove("project-item_active");
      });
    }
  });
}

export { addKebabBtnListener };

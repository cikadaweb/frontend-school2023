function addKebabBtnListener() {
  // обрабатываем нажатие на kebab-btn
  const kebabButtons = document.querySelectorAll(".kebab-btn");
  kebabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("kebab-btn_active");
      const kebabDropdownMenu = button.nextElementSibling;
      kebabDropdownMenu.classList.toggle("kebab-btn__dropdown-menu_active");
    });
  });

  // скрываем выпадающий список при щелчке в любом месте, кроме кнопки и списка // ToDo
  document.addEventListener("click", (event) => {
    const kebabButtons = document.querySelectorAll(".kebab-btn");
    const kebabDropdownMenus = document.querySelectorAll(
      ".kebab-btn__dropdown-menu"
    );
    const target = event.target;

    let isButtonClick = false;
    let isDropdownMenuClick = false;

    kebabButtons.forEach((button) => {
      if (button.contains(target)) {
        isButtonClick = true;
      }
    });

    kebabDropdownMenus.forEach((menu) => {
      if (menu.contains(target)) {
        isDropdownMenuClick = true;
      }
    });

    if (!isButtonClick && !isDropdownMenuClick) {
      kebabDropdownMenus.forEach((menu) => {
        menu.classList.remove("kebab-btn__dropdown-menu_active");
        const button = menu.previousElementSibling;
        button.classList.remove("kebab-btn_active");
      });
    }
  });
}

export { addKebabBtnListener };

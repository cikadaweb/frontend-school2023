import imgPath from "../../assets/images/avatar.png";

function createNavigation() {
  return `<header class="header">
      <div class="container">
        <nav class="header__nav">
          <ul class="header__list">
            <li>
              <a href="#" class="header__link">Проекты</a>
            </li>
            <li>
              <a href="#" class="header__link">Задачи</a>
            </li>
            <li>
              <a href="#" class="header__link">Пользователи</a>
            </li>
          </ul>
          <div class="header__profile">
            <img
              class="user-avatar"
              src="${imgPath}"
              alt="profile-img"
            />
            <div class="header__arrow-icon">
              <svg width="14" height="8">
                <use xlink:href="#arrow-down" />
              </svg>
            </div>

            <div class="header__dropdown-menu">
              <ul class="header__dropdown-list">
                <li>
                  <a href="#" class="header__dropdown-link">Профиль</a>
                </li>
                <li>
                  <a href="#" class="header__dropdown-link">Выход</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>`;
}

export { createNavigation };

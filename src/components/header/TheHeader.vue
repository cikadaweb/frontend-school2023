<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <ul class="header__list">
          <li v-for="link in navLinks" :key="link.id">
            <router-link class="header__link" :to="link.url">{{ link.name }}</router-link>
          </li>
        </ul>
        <div class="header__profile" @click="toggleProfileMenu">
          <img
            class="user-avatar"
            src="@/assets/img/avatar.png"
            alt="profile-img"
          />
          <div class="header__arrow-icon" :class="isShowDropdown ? 'header__arrow-icon_active' : ''">
            <v-svgicon id="#arrow-down" width="14" height="8" />
          </div>

          <DropdownButton :isShowDropdown="isShowDropdown" :items="dropdownList"/>

        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import DropdownButton from '@/components/dropdown-button/DropdownButton.vue'
import VSvgicon from '../ui-elements/svg-icon/v-svgicon.vue'

export default {
  name: 'TheHeader',
  components: {
    DropdownButton,
    VSvgicon
  },
  data () {
    return {
      navLinks: [
        {
          id: 1,
          name: 'Проекты',
          url: '/projects'
        },
        {
          id: 2,
          name: 'Задачи',
          url: '/tasks'
        },
        {
          id: 3,
          name: 'Пользователи',
          url: '/users'
        }
      ],
      dropdownList: [
        {
          id: 1,
          name: 'Профиль',
          url: '/profile'
        },
        {
          id: 2,
          name: 'Выход',
          url: '/'
        }
      ],
      isShowDropdown: false
    }
  },
  methods: {
    toggleProfileMenu () {
      this.isShowDropdown = !this.isShowDropdown
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 24px 0;
  @extend %bg-primary-default;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-end;
}

.header__list {
  display: flex;
  gap: 24px;
}

.header__link {
  @include font(14px, 400, 19px);
  color: $secondary;
  border: 1px solid $secondary;
  padding: 12px 16px;
  @extend %btn-border;
  transition: all 0.3s ease 0s;

  &:hover {
    color: $primary;
    background: $secondary;
  }
}

.header__link_active {
  color: $primary;
  background: $secondary;
}

.header__profile {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border: 1px solid transparent;
  @extend %btn-border;
  transition: all 0.3s ease 0s;
  &:hover {
    border: 1px solid $secondary;
  }
  &:active {
    @extend %bg-secondary-default;
    .header__arrow-icon {
      color: #DCDCDE;
    }
  }
}

.header__profile_active {
  @extend %bg-secondary-default;
  .header__arrow-icon {
    color: #DCDCDE;
  }
}

.header__profile-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.header__arrow-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: $secondary;
  transition: all 0.3s ease 0s;
}

.header__arrow-icon_active {
  transform: rotate(180deg);
}

.header__dropdown-menu {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  display: none;
  background: #FFFFFF;
  padding: 8px 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  top: 43px;
  right: 0;
  animation: menuFadeIn 0.3s ease 0.6s forwards;
}

.header__dropdown-menu_active {
  z-index: 5;
  display: flex;
  opacity: 1;
  visibility: visible;
  animation: menuFadeIn 0.3s ease forwards;
}

@keyframes menuFadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.header__dropdown-list {
  display: flex;
  flex-direction: column;
}

.header__dropdown-link {
  @include font(14px, 400, 19px);
  display: block;
  color: $primary;
  padding: 8px 16px;
}
</style>

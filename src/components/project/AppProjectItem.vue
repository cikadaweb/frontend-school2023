<template>
  <div
    class="project-item"
    :class="isShowKebabBtn ? 'project-item_active' : ''"
    @mouseover="showKebabBtn"
    @mouseleave="closeKebabBtn"
    ref="projectItem"
  >
    <div class="project-item__container">
      <div class="project-item__header">
        <div class="project-item__title">{{ item.name }}</div>
      </div>

      <div class="project-item__body">
        <div>{{ item.code }}</div>
        <div class="project-item__text">{{ item.author }} {{ item.dateCreated }}</div>

        <div class="project-item__text">
          {{ item.authorEdited }} {{ item.dateEdited }}
        </div>
      </div>

      <div
        class="kebab-btn"
        :class="isShowDropdownMenu ? 'kebab-btn_active' : ''"
      >
        <AppButton
          color="secondary"
          type="button"
          icon="dots"
          @click-on-button="clickOnButton"
        />
      </div>
      <div
        class="kebab-btn__dropdown-menu"
        :class="isShowDropdownMenu ? 'kebab-btn__dropdown-menu_active' : ''"
        ref="dropdownMenu"
      >
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
  </div>
</template>

<script>

export default {
  components: {},
  name: 'AppProjectItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  data () {
    return {
      isShowKebabBtn: false,
      isShowDropdownMenu: false
    }
  },
  methods: {
    showKebabBtn () {
      this.isShowKebabBtn = true
    },
    closeKebabBtn () {
      if (!this.isShowDropdownMenu) {
        this.isShowKebabBtn = false
      }
    },
    clickOnButton () {
      this.isShowDropdownMenu = !this.isShowDropdownMenu
    },
    handleOutsideClick (event) {
      const dropdownMenu = this.$refs.dropdownMenu
      const projectItem = this.$refs.projectItem

      if (
        dropdownMenu &&
        projectItem &&
        !dropdownMenu.contains(event.target) &&
        !projectItem.contains(event.target)
      ) {
        this.isShowDropdownMenu = false
        this.isShowKebabBtn = false
      }
    }
  }
}
</script>

<style lang="scss">

.project-item {
  color: $font-primary-default;
  border-bottom: 1px solid $border-active;
}

.project-item_active {
  .kebab-btn {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }

    .project-item__body div:last-of-type {
      margin-right: 58px;
    }

    .project-item__header div:first-of-type {
      margin-right: 58px;
    }
}

.project-item {
  padding-top: 10px;
}

.project-item__container {
  position: relative;
  padding: 0 16px;
}

.project-item__header {
  display: flex;
  justify-content: space-between;
}

.project-item__body {
  display: flex;
  gap: 16px;
  margin: 14px 0 8px;
}

.project-item__body div:last-of-type {
  flex-basis: 100%;
  text-align: end;
  transition: all 0.3s ease 0s;
}

.project-item__text {
  @include font(14px, 400, 19px);
  white-space: nowrap;
  color: $font-disabled;
}

.project-item__title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

.kebab-btn {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  position: absolute;
  top: 10px;
  right: 0;
  transition: all 0.3s ease 0s;
}

.kebab-btn_active {
  visibility: visible;
  opacity: 1;
  pointer-events: all;
}

.kebab-btn__dropdown-menu {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  position: absolute;
  background: #FFFFFF;
  padding: 8px 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  top: 54px;
  right: 16px;
}

.kebab-btn__dropdown-menu_active {
  visibility: visible;
  opacity: 1;
  pointer-events: all;

  z-index: 5;
  display: flex;
}

.kebab-btn__dropdown-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.kebab-btn__dropdown-link {
  @include font(14px, 400, 19px);
  display: block;
  color: $font-primary-default;
  padding: 8px 16px;
}

.kebab-btn__dropdown-link_red {
  color: $font-error;
}
</style>

<template>
  <div
    class="task-item"
    :class="isShowKebabBtn ? 'task-item_active' : ''"
    @mouseover="showKebabBtn"
    @mouseleave="closeKebabBtn"
    ref="taskItem"
  >
    <div class="task-item__container">
      <div class="task-item__header">
        <div class="task-item__title">{{ item.name }}</div>
        <img
          class="user-avatar"
          src="@/assets/img/avatar.png"
          alt="profile-img"
        />
      </div>

      <div class="task-item__body">
        <div>#1</div>
        <div class="task-item__text">{{ item.author }} {{ item.dateCreated }}</div>

        <div class="task-badge">{{ item.status }}</div>

        <div class="task-item__text">
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
  name: 'AppTaskItem',
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
      const taskItem = this.$refs.taskItem
      if (
        dropdownMenu &&
        taskItem &&
        !dropdownMenu.contains(event.target) &&
        !taskItem.contains(event.target)
      ) {
        this.isShowDropdownMenu = false
        this.isShowKebabBtn = false
      }
    }
  }
}
</script>

<style lang="scss">
.task-item {
  color: $font-primary-default;
  border-bottom: 1px solid $border-active;
}

.task-item_active {
  .kebab-btn {
      visibility: visible;
      opacity: 1;
      pointer-events: all;
    }

    .user-avatar,
    .task-item__body div:last-of-type {
      margin-right: 58px;
    }
}

.task-item {
  padding-top: 10px;
}

.task-item__container {
  position: relative;
  padding: 0 16px;
}

.task-item__header {
  display: flex;
  justify-content: space-between;
}

.task-item__body {
  display: flex;
  gap: 16px;
  margin: 14px 0 8px;
}

.task-item__body div:last-of-type {
  flex-basis: 100%;
  text-align: end;
  transition: all 0.3s ease 0s;
}

.task-badge {
  padding: 0 8px;
  background-color: $bg-bronze;
  color: $font-secondary;
  border-radius: $btn-radius;
}

.task-item__text {
  @include font(14px, 400, 19px);
  white-space: nowrap;
  color: $font-disabled;
}

.task-item__title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

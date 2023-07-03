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

        <AppBadge state="bronze">{{ item.status }}</AppBadge>

        <div class="task-item__text">
          {{ item.authorEdited }} {{ item.dateEdited }}
        </div>
      </div>

      <div
        class="kebab-btn"
        :class="isShowDropdown ? 'kebab-btn_active' : ''"
      >
        <AppButton
          color="secondary"
          type="button"
          icon="dots"
          @click-on-button="clickOnButton"
        />
      </div>

      <Dropdown
        class="task-item__dropdown"
        :isShowDropdown="isShowDropdown"
        :items="dropdownList"
        ref="dropdownMenu"
      />
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
      isShowDropdown: false,
      dropdownList: [
        {
          id: 1,
          name: 'Редактировать',
          url: '/'
        },
        {
          id: 2,
          name: 'Удалить',
          url: '/',
          color: 'dropdown-item__link_red'
        }
      ]
    }
  },
  methods: {
    showKebabBtn () {
      this.isShowKebabBtn = true
    },
    closeKebabBtn () {
      if (!this.isShowDropdown) {
        this.isShowKebabBtn = false
      }
    },
    clickOnButton () {
      this.isShowDropdown = !this.isShowDropdown
    },
    handleOutsideClick (event) {
      const dropdownMenu = this.$refs.dropdownMenu.$el
      const taskItem = this.$refs.taskItem
      if (
        dropdownMenu &&
        taskItem &&
        !dropdownMenu.contains(event.target) &&
        !taskItem.contains(event.target)
      ) {
        this.isShowDropdown = false
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

.task-item__dropdown {
  position: absolute;
  top: 54px;
  right: 0;
}
</style>

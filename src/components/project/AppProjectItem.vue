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

      <div class="kebab-btn">
        <AppButton
          color="secondary"
          type="button"
          icon="dots"
          :is-active="isShowDropdown"
          @click-on-button="clickOnButton"
        />
      </div>

      <AppDropdown
        class="project-item__dropdown"
        :isShowDropdown="isShowDropdown"
        :items="dropdownList"
        ref="projectDropdown"
      />

    </div>
  </div>
</template>

<script>

export default {
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
      isShowDropdown: false,
      dropdownList: [
        {
          id: 1,
          text: 'Редактировать'
        },
        {
          id: 2,
          text: 'Удалить'
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
      const projectDropdown = this.$refs.projectDropdown.$el
      const projectItem = this.$refs.projectItem

      if (
        projectDropdown &&
        projectItem &&
        !projectDropdown.contains(event.target) &&
        !projectItem.contains(event.target)
      ) {
        this.isShowDropdown = false
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
  // default
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  position: absolute;
  top: 10px;
  right: 0;
  transition: all 0.3s ease 0s;
}

.project-item__dropdown {
  position: absolute;
  top: 56px;
  right: 0;
}
</style>

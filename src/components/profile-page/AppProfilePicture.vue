<template>
  <picture
    class="profile-picture__avatar-container"
    @mouseover="showEditBtn"
    @mouseleave="closeEditBtn"
    ref="profilePicture"
  >
    <img class="profile-picture__avatar" src="@/assets/img/avatar.png" alt="avatar">
    <AppButton
      v-if="isShowEditBtn"
      class="profile-picture__avatar-btn"
      color="secondary"
      type="button"
      icon="dots"
      @click-on-button="clickOnButtonAvatar"
    />
    <Dropdown
      class="profile-picture__avatar-dropdown"
      :isShowDropdown="isShowDropdown"
      :items="dropdownList"
      ref="avatarDropdown"
    />
  </picture>
</template>

<script>
export default {
  name: 'AppProfilePicture',
  mounted () {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  data () {
    return {
      isShowDropdown: false,
      isShowEditBtn: false,
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
    clickOnButtonAvatar () {
      this.isShowDropdown = !this.isShowDropdown
    },
    showEditBtn () {
      this.isShowEditBtn = true
    },
    closeEditBtn () {
      if (!this.isShowDropdown) {
        this.isShowEditBtn = false
      }
    },
    handleOutsideClick (event) {
      const profilePicture = this.$refs.profilePicture
      const avatarDropdown = this.$refs.avatarDropdown.$el

      if (
        profilePicture &&
        avatarDropdown &&
        !profilePicture.contains(event.target) &&
        !avatarDropdown.contains(event.target)
      ) {
        this.isShowDropdown = false
        this.isShowEditBtn = false
      }
    }
  }
}
</script>

<style lang="scss">
.profile-picture__avatar-container {
  position: relative;
  display: block;
  padding-top: calc(300 / 300 * 100%);
}
.profile-picture__avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
}
.profile-picture__avatar-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.profile-picture__avatar-dropdown {
  position: absolute;
  bottom: -69px;
  right: 21px;
}
</style>

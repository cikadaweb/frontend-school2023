<template>
  <div
    class="dropdown-button"
    :class="isShowDropdown ? 'dropdown-button_active' : ''"
  >
    <ul class="dropdown-button__list">
      <AppDropdownItem v-for="item in items" :key="item.id" >
        {{ item.text }}
      </AppDropdownItem>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'AppDropdown',
  props: {
    isShowDropdown: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">

.dropdown-button {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  display: none;

  background: $bg-secondary;
  padding: 8px 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  animation: menuFadeIn 0.3s ease 0.6s forwards;
}

.dropdown-button_active {
  visibility: visible;
  opacity: 1;
  pointer-events: all;

  display: flex;
  z-index: 5;
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
.dropdown-button__list {
  display: flex;
  flex-direction: column;
}
</style>

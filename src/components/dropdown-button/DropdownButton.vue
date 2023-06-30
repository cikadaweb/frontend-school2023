<template>
  <div class="dropdown-button" :class="isShowDropdown ? 'dropdown-button_active' : ''">
    <ul class="dropdown-button__list">
      <DropdownItem v-for="link in items" :key="link.id" :link="link" />
    </ul>
  </div>
</template>

<script>
import DropdownItem from '@/components/dropdown-button/DropdownItem.vue'

export default {
  name: 'DropdownButton',
  props: {
    isShowDropdown: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    DropdownItem
  }
}
</script>

<style lang="scss">

.dropdown-button {
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

.dropdown-button_active {
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
.dropdown-button__list {
  display: flex;
  flex-direction: column;
}
</style>

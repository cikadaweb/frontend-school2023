<template>
  <li v-on="$listeners" class="dropdown-item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'AppDropdownItem'
}
</script>

<style lang="scss" scoped>
.dropdown-item {
  @include font(14px, 400, 19px);
  color: $font-primary-default;
  padding: 8px 16px;
  white-space: nowrap;
  &:hover {
    background-color: $bg-secondary-hover
  }
}
</style>

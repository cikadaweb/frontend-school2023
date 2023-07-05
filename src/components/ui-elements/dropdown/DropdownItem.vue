<template>
  <li class="dropdown-item">
    <router-link
      class="dropdown-item__link"
      :class="color"
      :to="link.url"
    >{{ link.name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss">

.dropdown-item__link {
  @include font(14px, 400, 19px);
  display: block;
  color: $font-primary-default;
  padding: 8px 16px;
  white-space: nowrap;
}

.dropdown-item__link_red {
  color: $font-error;
}
</style>

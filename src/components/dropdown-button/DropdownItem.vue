<template>
  <li class="dropdown-item">
    <router-link class="dropdown-item__link" :to="link.url">{{ link.name }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.dropdown-item__link {
  @include font(14px, 400, 19px);
  display: block;
  color: $primary;
  padding: 8px 16px;
}
</style>

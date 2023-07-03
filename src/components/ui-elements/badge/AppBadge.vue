<template>
  <span :class="[
    'badge',
    `badge_${state}`,
  ]">
    <slot />
  </span>
</template>

<script>

export default {
  name: 'AppBadge',
  props: {
    state: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.badge {
  padding: 0 8px;
  border-radius: $btn-radius;
  color: $font-secondary;
}
.badge_primary {
  background-color: $bg-primary-default;
}
.badge_bronze {
  background-color: $bg-bronze;
}
.badge_deleted {
  background-color: $font-error;
}
.badge_disabled {
  background-color: $font-disabled;
}
</style>

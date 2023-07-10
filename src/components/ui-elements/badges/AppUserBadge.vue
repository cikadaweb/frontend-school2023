<template>
  <span :class="[
    'badge',
    `badge_${badgeStatus}`,
  ]">
    {{ badgeName }}
  </span>
</template>

<script>

export default {
  name: 'AppUserBadge',
  props: {
    state: {
      type: String,
      required: true
    }
  },
  computed: {
    badgeStatus () {
      const state = this.state.toLowerCase()
      switch (state) {
        case 'active':
          return 'primary'
        case 'blocked':
          return 'disabled'
        case 'deleted':
          return 'deleted'
        default:
          return 'primary'
      }
    },
    badgeName () {
      const state = this.state.toLowerCase()
      switch (state) {
        case 'active':
          return 'Активен'
        case 'blocked':
          return 'Заблокирован'
        case 'deleted':
          return 'Удален'
        default:
          return 'primary'
      }
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

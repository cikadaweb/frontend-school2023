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
  name: 'AppTaskBadge',
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
        case 'draft':
          return 'bronze'
        case 'in_process':
          return 'bronze'
        case 'completed':
          return 'primary'
        case 'testing':
          return 'bronze'
        case 'testing_done':
          return 'primary'
        case 'closed':
          return 'primary'
        case 'deleted':
          return 'deleted'
        default:
          return 'primary'
      }
    },
    badgeName () {
      const state = this.state.toLowerCase()
      switch (state) {
        case 'draft':
          return 'Черновик'
        case 'in_process':
          return 'В работе'
        case 'completed':
          return 'Завершена'
        case 'testing':
          return 'Тестирование'
        case 'testing_done':
          return 'Выполнена'
        case 'closed':
          return 'Закрыта'
        case 'deleted':
          return 'Удалена'
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

<template>
  <button
    :class="[
      'btn',
      `btn_${color}`,
      isActive ? `btn_${color}_active` : '',
      `${icon ? 'btn_icon' : ''}`
    ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="!icon" class="btn__text">{{ label }}</span>
    <AppIcon v-else :id="`#${icon}`" width="24" height="24" />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      default: 'Button'
    },
    icon: {
      type: String,
      required: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click-on-button'],
  methods: {
    clickOnButton () {
      this.$emit('click-on-button')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @include button-reset;
}
.btn {
  @include font(14px, 400, 19px);
  border-radius: $btn-radius;
  padding: $btn-padding;
}

.btn_primary {
  background-color: $bg-primary-default;
  color: $font-secondary;
  &:hover {
    background-color: $bg-primary-hover;
    color: $font-secondary;
  }
  &:active {
    background-color: $bg-primary-active;
    color: $font-secondary;
  }
  &:disabled {
    background-color: $bg-disabled;
    color: $font-disabled;
  }
  &_active {
    background-color: $bg-primary-active;
    color: $font-secondary;
  }
}

.btn_secondary {
  background-color: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-default;
  &:hover {
    background-color: $bg-secondary-hover;
    color: $font-primary-default;
    border: 1px solid $border-hover;
  }
  &:active {
    background-color: $bg-secondary-active;
    color: $font-primary-default;
    border: 1px solid $border-active;
  }
  &:disabled {
    background-color: $bg-secondary;
    color: $font-disabled;
    border: 1px solid $border-disabled;
  }
  &_active {
    background-color: $bg-secondary-active;
    color: $font-primary-default;
    border: 1px solid $border-active;
  }
}

.btn_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $btn-padding-icon;
}
</style>

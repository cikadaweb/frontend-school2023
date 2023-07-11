<template>
  <div
    :class="[
      'label',
      `${vertical ? 'label_vertical' : ''}`,
    ]"
  >
    <slot />
    <span v-if="required" class="label__require-icon">*</span>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  @include font(14px, 400, normal);
  color: $font-disabled;
  min-width: 120px;
}

.label_vertical {
  margin-bottom: 8px;
}

.label__require-icon {
  color: $font-error;
  margin-left: 4px;
}
</style>

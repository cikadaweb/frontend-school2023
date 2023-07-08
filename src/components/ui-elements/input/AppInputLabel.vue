<template>
  <div class="label">
    <slot />
    <span v-if="required" class="label__require">*</span>
  </div>
</template>

<script>
export default {
  props: {
    required: {
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

.label__require {
  color: $font-error;
  margin-left: 4px;
}
</style>

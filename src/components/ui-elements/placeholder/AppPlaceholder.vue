<template>
  <div class="placeholder">
    <div class="container placeholder__container">
      <div class="placeholder__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.placeholder {
  padding: 24px 0;
  height: 100vh;
}

.placeholder__container {
  height: 100%;
}

.placeholder__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @extend %btn-border;
}

.placeholder__button {
  @include font(14px, 400, 19px);
  @extend %bg-primary-default;
  @extend %btn-border;
  @extend %btn-padding;
  margin-top: 10px;
}
</style>

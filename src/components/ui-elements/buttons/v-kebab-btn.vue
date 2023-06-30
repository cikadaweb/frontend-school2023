<template>
  <div class="kebab-btn" @click="toggleProjectItemMenu">
    <v-svgicon id="#dots" width="24" height="24" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toggleProjectItemMenu () {
      this.$emit('toggle-project-item')
    }
  }
}
</script>

<style lang="scss">
.kebab-btn {
  visibility: hidden;
  opacity: 0;
  pointer-events: none;

  position: absolute;
  top: 10px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  @extend %bg-secondary-default;
  border: 1px solid $border-default;
  @extend %btn-border;
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
   @extend %bg-secondary-hover;
    border: 1px solid $border-hover;
  }

  &:active {
    @extend %bg-secondary-active;
    border: 1px solid $border-active;
  }
}

.kebab-btn_active {
  visibility: visible;
  opacity: 1;
  pointer-events: all;
  @extend %bg-secondary-active;
  border: 1px solid $border-active;
}
</style>

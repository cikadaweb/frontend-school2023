<template>
  <div class="kebab-btn" @click="toggleProjectItemMenu">
    <AppSVGIcon id="#dots" width="24" height="24" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleProjectItemMenu () {
      this.$emit('toggle-project-item')
    }
  }
}
</script>

<style lang="scss" scoped>
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
  background-color: #FFFFFF;
  color: #1C1C1C;
  border: 1px solid $border-default;
  border-radius: $btn-radius;
  margin-right: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #ECECEF;
    color: #1C1C1C;
    border: 1px solid $border-hover;
  }

  &:active {
    background-color: #DCDCDE;
    color: #1C1C1C;
    border: 1px solid $border-active;
  }
}

.kebab-btn_active {
  visibility: visible;
  opacity: 1;
  pointer-events: all;
  background-color: #DCDCDE;
  color: #1C1C1C;
  border: 1px solid $border-active;
}
</style>

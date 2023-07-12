<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__header">
        <slot name="header"></slot>
      </div>

      <AppDivider />

      <div class="modal__body">
        <slot name="body"></slot>
      </div>

      <AppDivider />

      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal'
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  inset: 0;
  cursor: pointer;
  padding: 30px;
  overflow-y: auto;

  display: none;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-o
}

.modal_active {
  display: flex;
  visibility: visible;
  opacity: 1;
}

.modal__container {
  position: relative;
  max-width: 640px;
  background: $bg-secondary;
  border-radius: $btn-radius;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);

  margin: auto;
  cursor: default ;
}

.modal__header {
  @include font-h2;
  padding: 16px;
}

.modal__body {
  padding: 24px;
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 24px;
}

</style>

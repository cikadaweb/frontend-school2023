<template>
  <div class="textarea" :style="{ width: width }">
    <label :for="name" class="textarea__label">
      <textarea :class="[
        'textarea__text',
        `textarea_${state}`,
      ]" :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" :disabled="disabled"
        @input="updateValue($event)">
      </textarea>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '300px'
    },
    state: {
      type: String,
      default: 'default'
    },
    label: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input'],
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.textarea__label {
  width: 100%;
  position: relative;
  display: inline-block;
}

.textarea__text {
  @include input-reset;
  outline: none;
  transition: all 0.3s ease 0s;
}

.textarea__text {
  width: 100%;
  resize: vertical;
  min-height: 120px;
  padding: 10px 45px 10px 12px;
  border-radius: $btn-radius;
}

.textarea_default {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-default;

  &:hover {
    border: 1px solid $border-hover;
  }

  &:focus {
    border: 1px solid $border-hover;
  }

  &:active {
    border: 1px solid $border-active;
  }

  &:disabled {
    background: $bg-disabled;
    color: $font-disabled;
    border: 1px solid $border-disabled;
  }

  &::placeholder {
    color: $font-placeholder;
  }
}

.textarea_error {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-error;
}
</style>

<template>
  <div class="input" :style="{ width: width }">
    <label :for="name" class="input__label">
      <input
        :class="[
          'input__text',
          `input_${state}`,
        ]"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        @input="updateValue($event)"
      >
      <AppIcon
          v-if="icon"
          class="input__icon"
          :id="`#${icon}`"
          width="24"
          height="24"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
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
      required: true
    },
    width: {
      type: String,
      default: '300px'
    },
    state: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      required: false
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
.input__label {
  position: relative;
  display: inline-block;
}
.input__text {
  @include input-reset;
  outline: none;
  transition: all 0.3s ease 0s;
}
.input__text {
  padding: 10px 45px 10px 12px;
  border-radius: $btn-radius;
}
.input__icon {
  position: absolute;
  top: 9px;
  right: 9px;
}

.input_default {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-default;

  &:active {
    background: $bg-secondary;
    color: $font-primary-default;
    border: 1px solid $border-active;
  }
  &:disabled {
    background: $bg-disabled;
    color: $font-disabled;
    border: 1px solid $border-disabled;
  }
}

.input_empty {
  background: $bg-secondary;
  color: $font-placeholder;
  border: 1px solid $border-default;
  &:hover {
    background: $bg-secondary;
    color: $font-placeholder;
    border: 1px solid $border-hover;
  }
}

.input_error {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-error;
}
</style>

<template>
  <div class="input" :style="{ width: width }" @click="clickOnIcon($event)">
    <label :for="name" class="input__label">
      <input :class="[
        'input__text',
        `input_${state}`,
      ]" :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" :disabled="disabled"
        @input="updateValue($event)">
      <AppIcon v-if="icon" class="input__icon" :id="`#${icon}`" width="24" height="24" />
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
    icon: {
      type: String,
      required: false
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
    },
    clickOnIcon (event) {
      this.$emit('click-on-icon', event)
    }
  }
}
</script>

<style lang="scss">
.input__label {
  width: 100%;
  position: relative;
  display: inline-block;
}

.input__text {
  @include input-reset;
}

.input__text {
  width: 100%;
  padding: 10px 12px;
  border-radius: $btn-radius;
  outline: none;
  transition: all 0.3s ease 0s;
}

.input__icon {
  position: absolute;
  top: 9px;
  right: 9px;
  cursor: pointer;
}

.input_default {
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

.input_error {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-error;
}
</style>

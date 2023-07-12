<template>
  <div class="select" :style="{ width: width }" ref="select">
    <div
      class="select__field"
      :class="[disabled ? 'select__field_disabled' : '', isShowOptions ? 'select__field_active' : '']"
      @click="toggleOptionsVisible"
    >{{ selected }}
      <AppIcon
        v-if="clearIcon && isOptionChosen"
        class="select__icon select__icon_clear"
        id="#clear"
        width="16"
        height="16"
        @click-on-icon="clearSelect"
        ref="clearSelectBtn"
      />
      <AppIcon
        class="select__icon select__icon_down"
        :class="isShowOptions ? 'select__icon_active' : ''"
        id="#drop_down_1"
        width="24"
        height="24"
      />
    </div>
    <ul
      v-if="isShowOptions"
      class="select__list"
      :style="{ width: width }"
    >
      <li
        class="select__item"
        :class="option.name === selected ? 'select__item_active' : 'asdas'"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        >{{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '300px'
    },
    disabled: {
      type: Boolean,
      required: false
    },
    clearIcon: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select-option'],
  mounted () {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  data () {
    return {
      isShowOptions: false
    }
  },
  methods: {
    toggleOptionsVisible (event) {
      if (!this.disabled && !event.target.classList.contains('select__icon_clear')) {
        this.isShowOptions = !this.isShowOptions
      }
    },
    selectOption (option) {
      this.isShowOptions = false
      this.$emit('select-option', option)
    },
    clearSelect () {
      this.$emit('clear-select')
    },
    handleOutsideClick (event) {
      const select = this.$refs.select
      if (
        select &&
        !select.contains(event.target)
      ) {
        this.isShowOptions = false
      }
    }
  },
  computed: {
    isOptionChosen () {
      if (!this.options.some(option => option.name === this.selected)) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
}
.select__field {
  background: $bg-secondary;
  color: $font-primary-default;
  border: 1px solid $border-default;
  padding: 10px 45px 10px 12px;
  border-radius: $btn-radius;

  &_active {
    border: 1px solid $border-active;
  }

  &_disabled {
    background: $bg-disabled;
    color: $font-disabled;
    border: 1px solid $border-disabled;
  }
}
.select__icon {
  position: absolute;
  color: $font-disabled;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.select__icon_clear {
  top: 9px;
  right: 41px;
}
.select__icon_down {
  top: 9px;
  right: 8px;
}
.select__icon_active {
  transform: rotate(180deg);
}
.select__list {
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  background-color: $bg-secondary;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 0;
}
.select__item {
  @include font(14px, 400, 19px);
  color: $font-primary-default;
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &_active {
    background-color: $font-secondary-active;
  }

  &:hover {
    background-color: $font-secondary-active;
  }
}

</style>

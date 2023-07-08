<template>
  <div class="select" :style="{ width: width }" ref="select">
    <div class="select__field" @click="toggleOptionsVisible">{{ selected }}
      <AppIcon
        class="select__icon"
        id="#drop-down"
        width="24"
        height="24"
      />
    </div>
    <div v-if="isShowOptions" class="select__field-list" :style="{ width: width }">
      <span class="select__option" v-for="option in options" :key="option.value" @click="selectOption(option)">{{ option.name }}</span>
    </div>
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
    toggleOptionsVisible () {
      this.isShowOptions = !this.isShowOptions
    },
    selectOption (option) {
      this.isShowOptions = false
      this.$emit('select-option', option)
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
}
.select__icon {
  position: absolute;
  top: 9px;
  right: 8px;
}
.select__icon_active {
  transform: rotate(180deg);
}
.select__field-list {
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;
  flex-direction: column;
  background-color: $bg-secondary;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 0;
}
.select__option {
  @include font(14px, 400, 19px);
  color: $font-primary-default;
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: $font-secondary-active;
  }
}

</style>

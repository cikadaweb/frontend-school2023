<template>
  <svg :width="width" :height="height" @click="clickOnIcon">
    <use :xlink:href="id"/>
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',
  emits: ['click-on-icon'],
  props: {
    id: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    }
  },
  methods: {
    clickOnIcon () {
      this.$emit('click-on-icon')
    }
  }
}
</script>

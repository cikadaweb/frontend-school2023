<template>
  <svg :width="width" :height="height">
    <use :xlink:href="id"/>
  </svg>
</template>

<script>
export default {
  name: 'AppIcon',
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
  }
}
</script>

<template>
  <form class="filter-panel" @submit.prevent="submitHandler">
    <AppInput
      name="searchValue"
      type="search"
      placeholder="Текст..."
      width="100%"
      v-model="formData.searchField"
      icon="search"
      :state="searchFieldClass"
    />
  </form>
</template>

<script>
export default {
  name: 'AppFilterPanel',
  data () {
    return {
      formData: {
        searchField: ''
      }
    }
  },
  computed: {
    searchFieldClass () {
      if (this.formData.searchField.length === 0) {
        return 'empty'
      }
      if (this.formData.searchField.length > 0 && this.formData.searchField.length < 5) {
        return 'error'
      }
      return 'default'
    }
  }
}
</script>

<template>
  <form class="filter-panel" @submit.prevent="">
    <div class="filter-panel__row">
      <div class="filter-panel__column filter-panel__column_search-field">
        <AppInput
          name="searchValue"
          type="search"
          placeholder="Текст..."
          width="100%"
          v-model="searchField"
          clearIcon
          icon="search"
          @clear-input="clearInput"
          @search-results="searchResults"
        />
      </div>
      <div class="filter-panel__column">
        <AppSelect
          :selected="selectedSortOption"
          :options="sortOptions"
          @select-option="selectSortType"
          @clear-select="clearSelectedSortType"
        />
      </div>
      <div class="filter-panel__column">
        <AppButton
          color="secondary"
          type="button"
          label="Добавить"
          @click-on-button="openModal"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppFilterPanel',
  emits: ['click-add-button'],
  data () {
    return {
      searchField: '',
      sortOptions: [
        { name: 'По названию', value: 'name' },
        { name: 'По автору', value: 'author' },
        { name: 'По дате создания', value: 'dateCreated' },
        { name: 'По дате обновления', value: 'dateEdited' }
      ],
      selectedSortOption: 'По названию'
    }
  },
  methods: {
    clearInput () {
      this.searchField = ''
    },
    searchResults () {
      console.log('searchResults')
    },
    selectSortType (type) {
      this.selectedSortOption = type.name
    },
    clearSelectedSortType () {
      this.selectedProject = 'По названию'
    },
    submitHandler () {
      console.log('submitHandler')
    },
    openModal () {
      this.$emit('open-modal', 'create')
    }
  },
  computed: {
    searchFieldClass () {
      if (this.searchField.length === 0) {
        return 'empty'
      }
      if (this.searchField.length > 0 && this.searchField.length < 5) {
        return 'error'
      }
      return 'default'
    }
  },
  watch: {
    searchField (value) {
      this.submitHandler()
    },
    selectedSortOption (value) {
      this.submitHandler()
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-panel {
}
.filter-panel__row {
  display: flex;
  gap: 24px;
}
.filter-panel__column {
}

.filter-panel__column_search-field {
  flex: 1 0 auto;
}
</style>

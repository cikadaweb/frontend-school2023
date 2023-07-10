<template>
  <form class="filter-panel" @submit.prevent="submitHandler">
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
          @click-on-button="submitHandler"
        />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppFilterPanel',
  data () {
    return {
      searchField: '',
      sortOptions: [
        { name: 'По названию', value: 1 },
        { name: 'По автору', value: 2 },
        { name: 'По дате создания', value: 3 },
        { name: 'По дате обновления', value: 4 }
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

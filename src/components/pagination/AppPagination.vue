<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item">
        <AppButton
          color="secondary"
          type="button"
          icon="drop_down_4"
          :disabled="isInFirstPage"
          @click-on-button="clickOnPrev"
        />
      </li>
      <li
        v-for="(page, index) in buttonsList" :key="index"
        class="pagination__item"
      >
        <AppButton
          :color="isPageActive(page) ? 'primary' : 'secondary'"
          type="button"
          :label="page.toString()"
          @click-on-button="clickOnPage(page)"
        />
      </li>
      <li class="pagination__item">
        <AppButton
          color="secondary"
          type="button"
          icon="drop_down_2"
          :disabled="isInLastPage"
          @click-on-button="clickOnNext"
        />
      </li>
    </ul>
    <div class="pagination__form">
      <div class="pagination__form-input">
        <div class="pagination__form-text">Перейти к странице</div>
        <AppInput
          name="goToPage"
          type="number"
          width="70px"
          required
          v-model="goToPage"
        />
      </div>
      <div class="pagination__form-text">{{ getCurrentPage }}-{{ getCurrentPage * 10 }} из {{ getProjectList.length }}</div>
    </div>
  </div>
</template>

<script>
import { PaginationRange } from '@/utils/pagination-range'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppPagination',
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      goToPage: null
    }
  },
  methods: {
    ...mapActions('project', ['setCurrentPage']),
    clickOnPrev () {
      this.$emit('change-page', this.currentPage - 1)
    },
    clickOnPage (page) {
      this.$emit('change-page', page)
    },
    clickOnNext () {
      this.$emit('change-page', this.currentPage + 1)
    },
    isPageActive (page) {
      return this.currentPage === page
    }
  },
  computed: {
    ...mapGetters('project', ['getCurrentPage', 'getProjectList']),
    buttonsList () {
      return PaginationRange(this.currentPage, this.totalPages)
    },
    isInFirstPage () { return this.currentPage === 1 },
    isInLastPage () { return this.currentPage === this.totalPages }
  },
  watch: {
    goToPage (oldValue, newValue) {
      if (newValue > 1 && newValue <= this.totalPages) {
        console.log('newValue: ', newValue)
        // this.setCurrentPage(newValue)
      } else {
        // this.goToPage = oldValue
        console.log('oldValue: ', oldValue)
      }
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  padding: 20px;
}
.pagination__list {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pagination__item {
}
.pagination__form {
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-left: 32px;
}
.pagination__form-input {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pagination__form-text {
  @include font(14px, 400, normal);
  color: $font-disabled;
}
</style>

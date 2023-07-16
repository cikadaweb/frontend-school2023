<template>
  <div class="projects-page">
    <div class="container">
      <div class="projects-page__row">
        <div class="projects-page__column">
          <AppFilterPanel
            @open-modal="openModal"
          />
        </div>
        <div class="projects-page__column">
          <div v-if="checkProjects">
            <AppProjectItem
              v-for="(project, idx) in getProjectList"
              :key="idx"
              :item="project"
              @open-modal="openModal"
            />

            <AppPagination
              :total-pages="getTotalPages"
              :current-page="getCurrentPage"
              @change-page="onPageChange"
            />

          </div>

          <AppPlaceholder v-else >
            <div>Не создан ни один проект</div>
            <AppButton
              class="projects-page__placeholder"
              color="secondary"
              type="button"
              @click-on-button="clickOnButton"
              label="1"
              icon="dots"
            />
          </AppPlaceholder>
        </div>
      </div>
    </div>

    <component
      :is="currentModal"
      :class="isShowModal ? 'modal_active' : ''"
      @close-modal="closeModal"
      ref="modal"
    ></component>

  </div>
</template>

<script>
import AppProjectItem from '@/components/project/AppProjectItem.vue'
import AppFilterPanel from '@/components/filter-panel/AppFilterPanel.vue'
import AppCreateProject from '@/components/project/AppCreateProject.vue'
import AppEditProject from '@/components/project/AppEditProject.vue'
import AppDeleteProject from '@/components/project/AppDeleteProject.vue'
import AppPagination from '@/components/pagination/AppPagination.vue'

import scrollController from '@/utils/modal-scroll'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProjectsPage',
  components: {
    AppProjectItem, AppFilterPanel, AppCreateProject, AppEditProject, AppDeleteProject, AppPagination
  },
  data () {
    return {
      isShowModal: false,
      currentModal: 'AppCreateProject'
    }
  },
  mounted () {
    this.getProjects()
    document.addEventListener('click', this.handleOutsideModalClick)
    window.addEventListener('keydown', this.handleOutsideModalClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleOutsideModalClick)
    window.removeEventListener('keydown', this.handleOutsideModalClick)
  },
  methods: {
    ...mapActions('project', ['getProjects', 'setCurrentPage']),
    clickOnButton () {
      console.log('clickOnButton')
    },
    openModal (type) {
      if (type) {
        if (type === 'create') {
          this.currentModal = 'AppCreateProject'
        } else if (type === 'edit') {
          this.currentModal = 'AppEditProject'
        } else if (type === 'delete') {
          this.currentModal = 'AppDeleteProject'
        }
        this.isShowModal = true
      }
    },
    handleOutsideModalClick (event) {
      const modal = this.$refs.modal.$el

      if (event.target === modal || event.code === 'Escape') {
        this.closeModal()
      }
    },
    closeModal () {
      this.isShowModal = false
    },
    onPageChange (page) {
      this.setCurrentPage(page)
      this.getProjects({
        page: page
      });
    }
  },
  computed: {
    ...mapGetters('project', ['getProjectList', 'getTotalPages', 'getCurrentPage']),
    checkProjects () {
      if (this.getProjectList.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    isShowModal (value) {
      if (value) {
        scrollController.disabledScroll()
      } else {
        scrollController.enabledScroll()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.projects-page__row {
  display: flex;
  flex-direction: column;
}

.projects-page__column {
  margin-top: 24px;
}
.projects-page__placeholder {
  margin-top: 10px;
}
</style>

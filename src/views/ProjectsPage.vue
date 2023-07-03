<template>
  <div class="projects-page">
    <div class="container">
      <div class="projects-page__row">
        <div class="projects-page__column">
          <AppFilterPanel />
        </div>
        <div class="projects-page__column">
          <div v-if="projects.length !== 0">
            <AppProjectItem v-for="(project, idx) in projects" :key="idx" :item="project"/>
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
  </div>
</template>

<script>
import AppProjectItem from '@/components/project/AppProjectItem.vue'
import AppFilterPanel from '@/components/filter-panel/AppFilterPanel.vue'

export default {
  name: 'ProjectsPage',
  components: {
    AppProjectItem, AppFilterPanel
  },
  data () {
    return {
    }
  },
  methods: {
    clickOnButton () {
      console.log('clickOnButton')
    }
  },
  computed: {
    projects () {
      return this.$store.state.project.projects
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

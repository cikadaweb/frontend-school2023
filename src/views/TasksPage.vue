<template>
  <div class="task-page">
    <div class="container">
      <div class="task-page__row">
        <div class="task-page__column">
          <AppFilterPanel />
        </div>
        <div class="task-page__column">
          <div v-if="tasks">
            <AppTaskItem v-for="(task, idx) in tasks" :key="idx" :item="task" />
          </div>

          <AppPlaceholder v-else>
            <div>Не создана ни одна задача</div>
          </AppPlaceholder>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTaskItem from '@/components/task/AppTaskItem.vue'
import AppFilterPanel from '@/components/filter-panel/AppFilterPanel.vue'

export default {
  name: 'TasksPage',
  components: {
    AppTaskItem, AppFilterPanel
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
    tasks () {
      return this.$store.state.task.tasks
    }
  }
}
</script>

<style lang="scss" scoped>
.task-page__row {
  display: flex;
  flex-direction: column;
}

.task-page__column {
  margin-top: 24px;
}

.task-page__placeholder {
  margin-top: 10px;
}
</style>

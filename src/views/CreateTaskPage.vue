<template>
  <div class="createtask-page">
    <div class="container">
      <form class="createtask-page__form" @submit.prevent="submitHandler">

        <div class="createtask-page__header">
          Создание задачи
        </div>

        <AppDivider />

        <div class="createtask-page__body">
          <div class="createtask-page__row">
            <div class="createtask-page__column">
              <AppInputLabel required>Название</AppInputLabel>
              <AppInput
                name="taskName"
                type="text"
                placeholder="Введите текст..."
                label="Название"
                width="544px"
                required
                v-model="taskName"
              />
            </div>
            <div class="createtask-page__column">
              <AppInputLabel required>Описание</AppInputLabel>
              <AppTextarea
                name="taskDescription"
                type="text"
                placeholder="Введите текст..."
                label="Описание"
                width="544px"
                required
                v-model="taskDescription"
              />
            </div>
            <div class="createtask-page__column">
              <AppInputLabel required>Проект</AppInputLabel>
              <AppSelect
                :selected="selectedProject"
                :options="options"
                width="544px"
                @select-option="selectProject"
                @clear-select="clearSelectedProject"
              />
            </div>
            <div class="createtask-page__column">
              <AppInputLabel>Исполнитель</AppInputLabel>
              <AppSelect
                :selected="selectedExecutor"
                :options="options"
                width="544px"
                clearIcon
                @select-option="selectExecutor"
                @clear-select="clearSelectedExecutor"
              />
            </div>
          </div>
        </div>

        <AppDivider />

        <div class="createtask-page__footer">
          <div class="createtask-page__buttons">
            <AppButton
              color="secondary"
              type="button"
              label="Отмена"
              @click-on-button="cancelClick"
            />
            <AppButton
              color="primary"
              type="button"
              label="Создать задачу"
              @click-on-button="createTask"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateTaskPage',
  data () {
    return {
      taskName: '',
      taskDescription: '',
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
        { name: 'Option 4', value: 4 },
        { name: 'Option 5', value: 5 }
      ],
      selectedProject: 'Выбрать',
      selectedExecutor: 'Не назначен'
    }
  },
  methods: {
    selectProject (project) {
      this.selectedProject = project.name
    },
    selectExecutor (executor) {
      this.selectedExecutor = executor.name
    },
    clearSelectedProject () {
      this.selectedProject = 'Выбрать'
    },
    clearSelectedExecutor () {
      this.selectedExecutor = 'Не назначен'
    },
    createTask () {
      console.log('Create task')
    },
    cancelClick () {
      console.log('Cancel click')
    }
  }
}
</script>

<style lang="scss">
.createtask-page {
}
.createtask-page__form {
  padding: 24px;
  margin: 24px;
  border-radius: 4px;
  border: 1px solid var(--border-default, rgba(0, 0, 0, 0.15));
}
.createtask-page__header {
  @include font-h1;
  margin-bottom: 34px;
}

.createtask-page__body {
  min-height: 715px;
  margin: 24px 0;
}

.createtask-page__row {
  display: flex;
  flex-direction: column;
}
.createtask-page__column {
  display: flex;
  margin-top: 24px;
}
.createtask-page__footer {
  margin-top: 24px;
}
.createtask-page__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 24px;
}
</style>

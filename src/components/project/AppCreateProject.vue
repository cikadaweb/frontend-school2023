<template>
  <AppModal>
    <template v-slot:header>Создание проекта</template>

    <template v-slot:body>
      <AppInputLabel required vertical>Код</AppInputLabel>
      <AppInput
        name="projectCode"
        type="text"
        placeholder="Введите текст..."
        label="Название"
        width="544px"
        required
        v-model="projectCode"
      />
      <AppInputLabel required vertical>Название</AppInputLabel>
      <AppInput
        name="projectName"
        type="text"
        placeholder="Введите текст..."
        label="Название"
        width="544px"
        required
        v-model="projectName"
      />
    </template>

    <template v-slot:footer>
      <AppButton
        color="secondary"
        type="button"
        label="Отмена"
        @click-on-button="closeModal"
      />
      <AppButton
        color="primary"
        type="button"
        label="Создать проект"
        @click-on-button="submitHandler"
      />
    </template>

  </AppModal>
</template>

<script>
import AppModal from '@/components/modal/AppModal.vue'
import { mapActions } from 'vuex'

export default {
  name: 'AppCreateProject',
  components: {
    AppModal
  },
  data () {
    return {
      projectCode: '',
      projectName: ''
    }
  },
  methods: {
    ...mapActions('project', ['createProject']),
    submitHandler () {
      this.createProject({
        name: this.projectCode,
        code: this.projectName
      }).then(() => {
        this.projectCode = ''
        this.projectName = ''
        this.closeModal()
      })
    },
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

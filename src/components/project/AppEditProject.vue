<template>
  <AppModal>
    <template v-slot:header>Редактирование проекта</template>

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
        label="Сохранить проект"
        @click-on-button="submitHandler"
      />
    </template>

  </AppModal>
</template>

<script>
import AppModal from '@/components/modal/AppModal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppCreateProject',
  components: {
    AppModal
  },
  mounted () {
    this.updateLocalData()
  },
  data () {
    return {
      projectCode: '',
      projectName: ''
    }
  },
  methods: {
    ...mapActions('project', ['editProject', 'getProjects']),
    submitHandler () {
      this.editProject({
        _id: this.getCurrentProject._id,
        code: this.projectCode,
        name: this.projectName
      }).then(() => {
        this.getProjects({
          page: this.getCurrentPage
        })
        this.closeModal()
      })
    },
    closeModal () {
      this.$emit('close-modal')
    },
    updateLocalData () {
      this.projectCode = this.getCurrentProject.code
      this.projectName = this.getCurrentProject.name
    }
  },
  computed: {
    ...mapGetters('project', ['getCurrentProject', 'getCurrentPage'])
  },
  watch: {
    getCurrentProject (value) {
      this.updateLocalData()
    }
  }
}
</script>

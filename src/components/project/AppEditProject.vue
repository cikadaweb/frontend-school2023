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
    this.projectCode = this.currentProject.code
    this.projectName = this.currentProject.name
  },
  data () {
    return {
      projectCode: '',
      projectName: ''
    }
  },
  methods: {
    ...mapActions('project', ['editProject']),
    submitHandler () {
      this.editProject({
        // _id: this.currentProject._id,
        _id: '64aeec73ddea647826bb236f', // ToDO
        code: this.projectCode,
        name: this.projectName
      }).then(() => {
        this.closeModal()
      })
    },
    closeModal () {
      this.$emit('close-modal')
    }
  },
  computed: {
    ...mapGetters('project', ['currentProject'])
  }
}
</script>

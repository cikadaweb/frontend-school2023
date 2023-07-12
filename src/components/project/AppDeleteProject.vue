<template>
  <AppModal>
    <template v-slot:header>Удаление</template>

    <template v-slot:body>
      <div>Вы уверены что хотите удалить проект «Название»?</div>
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
        label="Да"
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
  methods: {
    ...mapActions('project', ['deleteProject']),
    submitHandler () {
      this.deleteProject({
        // _id: this.currentProject._id,
        _id: '64aeec73ddea647826bb236f' // ToDO
      }).then(() => {
        this.closeModal()
      })
    },
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

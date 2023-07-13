<template>
  <AppModal>
    <template v-slot:header>Удаление</template>

    <template v-slot:body>
      <div>Вы уверены что хотите <span class="delete-marker">удалить</span> проект «{{ getCurrentProject.name }}»?</div>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppCreateProject',
  components: {
    AppModal
  },
  methods: {
    ...mapActions('project', ['deleteProject', 'getProjects']),
    submitHandler () {
      this.deleteProject({
        _id: this.getCurrentProject._id
      }).then(() => {
        this.getProjects({
          page: this.getCurrentPage
        })
        this.closeModal()
      })
    },
    closeModal () {
      this.$emit('close-modal')
    }
  },
  computed: {
    ...mapGetters('project', ['getCurrentProject', 'getCurrentPage'])
  }
}
</script>

<style lang="scss" scoped>
.delete-marker {
  color: $font-error;
}
</style>

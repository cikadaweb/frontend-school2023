<template>
  <div>
    <TheHeader />
    <main class="main">
       <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader
  }
}
</script>

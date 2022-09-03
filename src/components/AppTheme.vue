<template>
  <div class="q-pa-md flex flex-center toggle-item">
    <q-toggle
        v-model="darkMode"
        checked-icon="check"
        color="dark"
        label="Dark Mode"
        unchecked-icon="clear"
      />
  </div>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  setup () {
    const darkMode = ref(false)
    const $q = useQuasar()

    watch(darkMode, (darkMode) => {
      $q.dark.set(darkMode)
      console.log('darkMode', darkMode)
      $q.localStorage.set('darkMode', darkMode)
    })

    onMounted(() => {
      const darkModeIsActive = $q.localStorage.getItem('darkMode')
      if (darkModeIsActive) {
        darkMode.value = true
      }
    })
    return {
      darkMode
    }
  }
})
</script>

<style lang="sass" scoped>
.toggle-item
  max-width: 100%
</style>

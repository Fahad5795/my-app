<template>
  <q-input
    class="q-pa-md flex flex-center"
    v-model="searchItem"
    debounce="1000"
    filled
    placeholder="Search"
    style="width: 300px;margin: auto"
  >
  <template v-slot:append>
    <q-icon name="search" />
  </template>
  </q-input>

  <q-space />

  <div class="q-pa-md flex flex-center row items-start q-gutter-md">
    <q-card class="my-card" flat bordered v-for="(item, index) in searchResult" :key="item">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">{{ item.name }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
        <div class="text-caption text-grey">
          {{ item.desc }} </div>
      </q-card-section>

      <q-card-actions>
        <q-space />

        <q-btn
          flat
          dense
          @click="deleted(index)"
        >Delete</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchItem = ref('')

const items = ref([
  { name: 'Card1', title: 'Title1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { name: 'Card2', title: 'Title2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { name: 'Card3', title: 'Title3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { name: 'Card4', title: 'Title4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
  { name: 'Card5', title: 'Title5', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' }
])

function deleted (index) {
  this.items.splice(index, 1)
}

const searchResult = computed(() => {
  return items.value
    .filter(
      ({ name, title, desc }) => [name, title, desc]
        .some(val => val.toLowerCase().includes(searchItem.value))
    )
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

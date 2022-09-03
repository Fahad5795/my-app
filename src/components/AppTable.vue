<template>
   <div class="q-pa-md flex flex-center">
    <q-table
      class="my-sticky-header-column-table"
      title="Table"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :pagination="initialPagination"
      :loading="loading"
    >
    <template v-slot:loading>
      <q-inner-loading showing color="primary" />
    </template>
    </q-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const rows = ref([])

const loading = ref(true)

onMounted(() => getData())

const getData = () =>
  axios
    .get('https://api.publicapis.org/entries', {
      criteria: {}
    })
    .then(({ data }) => {
      rows.value = data.entries
      loading.value = false
    })
    .catch((e) => console.log('err', e))

const columns = [
  { name: 'API', align: 'center', label: 'API', field: 'API', sortable: false },
  { name: 'Description', align: 'center', label: 'Description', field: 'Description', sortable: false },
  { name: 'Auth', align: 'center', label: 'Auth', field: 'Auth' },
  { name: 'HTTPS', align: 'center', label: 'HTTPS', field: 'HTTPS' },
  { name: 'Cors', align: 'center', label: 'Cors', field: 'Cors' },
  { name: 'Link', align: 'center', label: 'Link', field: 'Link', sortable: false, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'Category', align: 'center', label: 'Category', field: 'Category', sortable: false, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const initialPagination = {
  sortBy: 'desc',
  descending: false,
  page: 2,
  rowsPerPage: 10
  // rowsNumber: xx if getting data from a server
}
</script>

<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 600px

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 80%

  td:first-child
    /* bg color is important for td; just specify one */
    background-color: #3f8cd9 !important
    font-weight: 500

  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #3f8cd9

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>

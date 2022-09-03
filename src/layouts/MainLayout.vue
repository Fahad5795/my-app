<template>
  <div class="q-md">
    <q-layout view="lHh lpr lFf" style="height: 600px">
      <q-header class="glossy" elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>My App</q-toolbar-title>

          <q-space />

        <q-tabs v-model="tab">
          <router-link to="table"><q-tab name="Table" label="Table" /></router-link>
          <router-link to="cards"><q-tab name="Cards" label="Cards" /></router-link>
          <router-link to="theme"><q-tab name="Theme" label="Theme" /></router-link>
        </q-tabs>

        <q-space />

        <q-input
          v-model="search"
          debounce="1000"
          filled
          placeholder="Search"
          dark
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        </q-toolbar>

      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view></router-view>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('Table')
    }
  }
}
</script>

<style lang="sass" scoped>
a
  margin: 20px
  padding: 0
  color: #ffffff
  text-decoration: none
  transition: 0.7s all ease-in-out
</style>

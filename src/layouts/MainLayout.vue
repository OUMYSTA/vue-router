<script setup lang="ts">
import SidebarComponent from '@/components/SidebarComponent.vue'
import { authStore } from '@/stores/auth'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavbarLayout from './NavbarLayout.vue'

const { authState, getAuth } = authStore()

const menus = ref<{ to: string; label: string }[]>([
  {
    label: 'Dashboard',
    to: 'dashboard'
  },
  {
    label: 'List Product',
    to: 'product'
  },
  {
    label: 'Logout',
    to: 'login'
  }
])

await getAuth()
</script>

<template>
  <div>
    <NavbarLayout />
    <div class="flex">
      <SidebarComponent :menus="menus" />
      <div class="p-6 flex justify-center items-center w-full"><RouterView /></div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'

defineProps<{ menus: { to: string; label: string }[] }>()

const router = useRouter()
</script>

<template>
  <div class="h-screen flex items-center">
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow  bg-base-200 w-56 rounded-box h-screen flex justify-center">
      <li v-for="(menu, idx) of menus" :key="idx">
        <router-link :to="{ name: menu.to }" active-class="active">{{ menu.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

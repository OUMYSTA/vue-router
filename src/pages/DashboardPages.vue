<script setup lang="ts">
import { authStore } from '@/stores/auth'

const { authState } = authStore()
</script>
<template>
  <div class="card shadow-xl">
    <div class="card-body items-center text-center" v-if="!authState.isLoading">
      <h2 class="card-title">Hello {{ authState.data.username }}</h2>
      <p>Welcome to my app</p>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { authStore } from '@/stores/auth'
const { authState } = authStore()
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Product Khoi</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link :to="{ name: 'profile' }" active-class="active">{{
            authState.data.username
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

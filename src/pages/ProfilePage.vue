<script setup lang="ts">
import { authStore } from '@/stores/auth'
import { ref } from 'vue'

const { authState } = authStore()
interface DataInformation{
    name:string
    data?:string |boolean
}
const dataInfos = ref<DataInformation[]>([
  {
    name:'ID', data: authState.data.id
  },
  {
    name:'Username', data:authState.data.username
  },
  {
    name:'Email', data:authState.data.email
  },
  {
    name:'Role', data:authState.data.role?.isAdmin
  }
])
</script>
<template>
  <div class="shadow-xl p-4 m-4 w-full">
    <div class="px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7">Profile Information</h3>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" v-for="(data, idx) of dataInfos" :key="idx">
          <dt class="text-sm font-medium leading-6">{{ data.name }}</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ data.data }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

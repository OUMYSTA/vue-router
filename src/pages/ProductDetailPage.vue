<script setup lang="ts">
import { products, type product } from '@/data/product';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const state = reactive<{data?: product}>({})

onMounted(() => {
  state.data = products.find((product) => product.id === route.params.id)
})
</script>

<template>
  <div class="card shadow-xl">
    <div class="card-body items-center text-center">
      <div v-if="state.data">
        <div><span class="font-bold">ID:</span>{{ state.data.id }}</div>
        <div><span class="font-bold">Product Name:</span>{{ state.data.name }}</div>
        <div><span class="font-bold">Product Price:</span>{{ state.data.price.toLocaleString() }} Kip</div>
        <div><span class="font-bold">Quantity:</span>{{ state.data.qty }}</div>
      </div>
      <button class="btn btn-secondary" @click="router.back()">Back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type product, products, getProduct } from '../data/product'
import { useRoute, useRouter } from 'vue-router'

const datas = ref<product[]>(products)
const router = useRouter()
const route = useRoute()

const user = ref<any>()

function onViewDetail(id: string) {
  router.push({ name: 'product.detail', params: { id: id } })
}
const search = ref<string>('')
function onSearch() {
  router.push({ name: 'product', query: { search: search.value } })
  datas.value = getProduct(search.value)
}

function onDelete(search: string) {
  if(search=== ''){
    router.push({ name: 'product'})
    datas.value = getProduct(search)
  }
}

onMounted(() =>{
  const qSearch: string = route.query.search as string

  search.value = qSearch
  datas.value = getProduct(qSearch)
  user.value = JSON.parse(localStorage.getItem('user') as string)
})
</script>
<template>
  <div class="card shadow-xl flex items-center justify-center">
    <input
      class="input input-bordered input-sm w-full"
      type="text"
      v-model="search"
      placeholder="Search..."
      @keyup.enter="onSearch()"
      @input="onDelete(search)"
    />
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) of datas" :key="index">
          <td>{{ data.id }}</td>
          <td>{{ data.name }}</td>
          <td>{{ data.price.toLocaleString() }} Kip</td>
          <td>{{ data.qty }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="onViewDetail(data.id)" :disabled="user&& !user.isAdmin">
              view detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

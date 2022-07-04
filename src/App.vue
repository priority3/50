<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router)
</script>

<template>
  <div
    flex="~ justify-center items-center"
  >
    <div
      hover="bg-dark-50"
      h-max w-max bg-gray-100 border-2 border-gray-200 rounded-lg cursor-pointer
      @click="$router.push('/fitst-test')"
    >
      first project
    </div>
  </div>
</template>

<style>

</style>

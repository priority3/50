<route>
{meta:{title:'首页',navHidden:true}}
</route>

<script setup lang='ts'>
import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import pageRoutes from '~pages'
const routes = computed<RouteRecordRaw[]>(() => {
  return pageRoutes.filter((item) => {
    return item.path !== '/home'
  }).sort((a, b) => {
    return ((a.meta.id ?? 0) as number) - ((b.meta.id ?? 0) as number)
  })
})
</script>

<template>
  <div>
    <base-header />
    <div
      class="w-4/5" mx-auto my-5 p-5 flex flex-wrap gap-10
      border="~ rounded-5 light-800" shadow
    >
      <div
        v-for="route in routes" :key="route.path"
        border="~ 2 light-600" p-3 rounded-5 shadow
        cursor-pointer animate-bounce duration-700 select-none
        @click="$router.push(route.path)"
      >
        {{ route.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>

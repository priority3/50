<script setup lang='ts'>
import { $computed, $ref } from 'vue/macros'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
const router = $computed(() => {
  return useRouter().options.routes.filter((route: RouteRecordRaw) => {
    return !route.meta?.navHidden
  }).map((route: RouteRecordRaw) => {
    return {
      name: route.meta?.title || route.name,
      path: route.path,
    }
  })
})

const fuse = new Fuse(router, {
  keys: ['name'],
})
const input = $ref('')
const searchRes = $computed(() => {
  return fuse.search(input)
})
</script>

<template>
  <div relative>
    <input
      v-model="input" type="text" placeholder="search project..."
      bg-transparent outline-0 p2 border-0 w="full" text-xl
    >
    <div
      absolute top-12 bg-base shadow w-full border-base border-rounded
    >
      <div
        v-if="!searchRes.length && input"
        flex justify-center text-xl
      >
        好像并没有🤔
      </div>
      <template v-for="{ item, refIndex } in searchRes" :key="refIndex">
        <div
          flex items-center justify-between hover="bg-gray/10"
          cursor-pointer text-xl px-5
        >
          <div flex items-center gap-2>
            <div i-carbon-checkmark text-green-700 text-2xl />
            <span>
              {{ refIndex }}
            </span>
          </div>
          <div
            @click="$router.push(item.path)"
          >
            {{ item.name }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>

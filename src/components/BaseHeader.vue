<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { $computed } from 'vue/macros'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const router = useRouter()
const isShowSearch = $computed(() => {
  return router.currentRoute.value.path === '/home'
})
</script>

<template>
  <div>
    <div
      class="w-full flex justify-around items-center"
      border="b base rounded" shadow py-3 h-10
    >
      <div
        font-serif text-xl cursor-pointer
        @click="$router.back()"
      >
        priority
      </div>
      <base-search v-if="isShowSearch" />

      <div
        flex gap-10px
      >
        <div
          i-carbon-logo-github title="github" text-3xl
          hover:text-gray-500 cursor-pointer
        />
        <button
          i-carbon-sun dark:i-carbon-moon text-3xl title="切换"
          cursor-pointer @click="toggleDark()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>

<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    class="w-full flex justify-around items-center"
  >
    <div>
      author:priority
    </div>
    <div
      flex gap-10px
    >
      <div
        i-carbon-logo-github title="github" text-2xl
        hover:text-gray-500 cursor-pointer
      />
      <div
        i-carbon-sun dark:i-carbon-moon text-2xl title="切换"
        cursor-pointer @click="toggleDark()"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>

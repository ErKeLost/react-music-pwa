<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div
    dark:border-gray-600
    overflow-hidden
    m-2
    border
    bg-gray-50
    dark:bg-black
    rounded-2xl
  >
    <h1 p-3 text-xl font-extrabold border-b dark:border-gray-600>
      {{ title }}
    </h1>
    <slot></slot>
    <div tran p-3 text-sm text-blue-400 hover:bg-gray-100>show more</div>
  </div>
</template>

<style scoped></style>

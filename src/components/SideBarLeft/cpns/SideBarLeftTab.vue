<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active?: boolean
  }>(),
  {
    active: false
  }
)
const avtiveClass = computed(() => {
  return props.active ? 'font-semibold' : 'font-normal'
})
</script>

<template>
  <RouterLink
    to="#"
    flex
    items-center
    p-3
    tran
    w-min
    rounded-full
    hover:bg-gray-200
  >
    <div text-5 text-dark>
      <slot name="icon"> </slot>
    </div>
    <div ml-4 text-5 hidden xl:block tran :class="avtiveClass">
      <slot name="name"></slot>
    </div>
  </RouterLink>
</template>

<style scoped></style>

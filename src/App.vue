<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
import { request } from '~/services'

function signup(data: any) {
  return request.post({
    url: 'auth/signup',
    data
  })
}
// signup({
//   username: '123',
//   password: '132',
//   email: 'iuo@qq.com',
//   name: '234',
//   profileImage: 'http://'
// })
// const res = computed(() => toggleDark())
// const res = ref(darkTheme)

// function useTheme() {
//   console.log(res.value)

//   if (res.value === darkTheme) {
//     console.log(666)

//     res.value = lightTheme
//   } else {
//     console.log(6999)

//     res.value = darkTheme
//   }
// }
// watch(res, () => {
//   toggleDark()
// })
// watch(res, () => {
//   console.log(666)
// })
const theme = ref(false)
function changeTheme() {
  theme.value = toggleDark()
  console.log(theme)
}
</script>

<template>
  <button
    class="icon-btn mx-2 absolute z-10 right-10 top-5 text-2xl !outline-none"
    title="toggle-dark-mode"
    @click="changeTheme()"
  >
    <div i="carbon-sun dark:carbon-moon" />
  </button>
  <n-config-provider :theme="theme ? darkTheme : lightTheme">
    <RouterView />
  </n-config-provider>
</template>

<style lang="scss"></style>

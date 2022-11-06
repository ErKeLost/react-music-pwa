<script setup lang="ts">
import { useAuthStore } from '@/store'
import LoginForm from './cpns/loginForm.vue'
import RegisterForm from './cpns/registerForm.vue'

const { isLoginType } = storeToRefs(useAuthStore())
</script>

<template>
  <div flex h-screen justify-center>
    <!-- <div relative flex-1 hidden w-0 lg:block>
      <img
        absolute
        inset-0
        object-cover
        w-full
        h-full
        src="https://w.wallhaven.cc/full/rr/wallhaven-rr3y61.jpg"
        alt=""
      />
    </div> -->
    <div
      flex
      flex-col
      justify-center
      items-center
      flex-1
      px-4
      py-12
      sm:px-6
      lg:flex-none
      lg:px-20
      xl:px-24
      relative
    >
      <div flex items-center w-full h-full max-w-128 mx-auto lg:w-128>
        <transition name="bounceInDown" mode="out-in" appear>
          <component
            :is="isLoginType === true ? LoginForm : RegisterForm"
          ></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounceInDown-enter-active {
  animation: bounceInDown 0.5s ease-in;
}
.bounceInDown-leave-active {
  animation: bounceInDown 0.5s ease-in reverse;
}
</style>

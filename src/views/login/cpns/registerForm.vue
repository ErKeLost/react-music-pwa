<script setup lang="ts">
import { useAuthStore } from '~/store'

const { isLoginType, registerFrom } = storeToRefs(useAuthStore())
const { useRegister } = useAuthStore()
async function handleLogin() {
  console.log(registerFrom)

  await useRegister()
}
</script>

<template>
  <div w-full relative>
    <div flex justify-center>
      <div class="box">
        <div class="paopao"></div>
        <div class="shadow"></div>
      </div>
    </div>
    <div flex justify-center>
      <!-- <Twitter w-15 h-15 /> -->
    </div>
    <div pt-5>
      <span block my-3>Username</span>
      <n-input
        v-model:value="registerFrom.username"
        type="text"
        size="large"
        placeholder="@username"
      />
      <span block my-3>Email</span>
      <n-input
        v-model:value="registerFrom.email"
        type="text"
        size="large"
        placeholder="email"
      />
      <span block my-3>Password</span>
      <n-input
        v-model:value="registerFrom.password"
        type="password"
        size="large"
        placeholder="*******"
      />
      <div flex justify-between my-8 items-center>
        <n-button
          bg-blue
          type="info"
          my-8
          size="large"
          w-35
          @click="handleLogin"
          >注册</n-button
        >
        <a
          border-b
          dark:border-gray-600
          border-dark
          border-b-dashed
          href="#"
          @click="isLoginType = true"
          >已经注册， 去登录</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
}
.paopao {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 30%,
    #75a1f1 10%,
    #97def0 60%,
    #244453 100%
  );
  border-radius: 50%;
  box-shadow: inset 0 0 20px #fff, inset 10px 0 50px #eaf5fc,
    inset 80px 0 60px #56afd8, inset -20px -60px 100px #f9f6de,
    inset 0 50px 150px #f9f6de, 0 0 90px #fff;
  animation: move 3s ease-in-out infinite;
}
.shadow {
  position: absolute;
  left: 70px;
  bottom: -80px;
  width: 150px;
  height: 50px;
  border-radius: 50%;
  background-color: #7e7e7e;
  filter: blur(5px);
  animation: move1 3s ease-in-out infinite;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-90px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes move1 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

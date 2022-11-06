<script setup lang="ts">
import { useAuthStore } from '@/store'
const { useUserInfo } = useAuthStore()
const { userInfo } = storeToRefs(useAuthStore())
useUserInfo()
</script>

<template>
  <div>
    <div class="dark:bg-dim-900">
      <!-- <LoadingPage v-if="isAuthLoading" /> -->

      <!-- App -->
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SideBarLeft :user="userInfo" />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 md:col-span-9 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right Sidebar -->
          <div class="hidden col-span-12 xl:col-span-4 xl:block md:col-span-3">
            <div class="sticky top-0">
              <SideBarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

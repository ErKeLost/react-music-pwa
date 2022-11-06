<template>
  <div flex flex-col>
    <!-- Search bar -->
    <div class="relative m-2 my-5">
      <div
        class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer"
      >
        <div class="w-6 h-6">
          <!-- <SearchIcon @click="handleSearch" /> -->
        </div>
      </div>
      <input
        class="flex items-center w-full pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 dark:border-gray-600 h-9"
        placeholder="Search tweet"
        type="text"
      />
    </div>
    <PreviewCard title="what's happening">
      <PreviewCardItem v-for="item in items" :key="item.title">
        <div>
          <h2 font-bold text-gray-800 dark:color-white text-md>
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400 dark:color-white">{{ item.count }}</p>
        </div>
      </PreviewCardItem>
    </PreviewCard>
    <PreviewCard title="who to follow">
      <PreviewCardItem v-for="item in follow" :key="item.title">
        <div flex flex-row items-center justify-between p-2>
          <div flex flex-row>
            <img object-cover w-10 h-10 rounded-full :src="item.image" alt="" />
            <div flex flex-col ml-2>
              <h2 font-bold text-gray-800 dark:color-white text-sm>
                {{ item.name }}
              </h2>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div flex h-full>
            <button
              px-4
              py-2
              text-white
              bg-black
              dark:text-black
              dark:bg-white
              font-bold
              text-xs
              rounded-full
            >
              Follow
            </button>
          </div>
        </div>
      </PreviewCardItem>
    </PreviewCard>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: 'SpaceX',
    count: '18.8k Tweets'
  },
  {
    title: '#CodingIsFun',
    count: '32.8k Tweets'
  },
  {
    title: '#zhangyishan',
    count: '65.8k Tweets'
  }
])
const follow = ref([
  {
    name: 'Erkelost',
    handle: '@Erkelost',
    image: 'https://w.wallhaven.cc/full/72/wallhaven-72drx3.jpg'
  },
  {
    name: 'Adny',
    handle: '@Adny',
    image: 'https://w.wallhaven.cc/full/8o/wallhaven-8o2ro2.jpg'
  },
  {
    name: 'Senmi',
    handle: '@Senmi',
    image: 'https://w.wallhaven.cc/full/yx/wallhaven-yx7jog.png'
  }
])
</script>

<style scoped></style>

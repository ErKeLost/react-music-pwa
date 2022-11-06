<template>
  <div>
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No tweets 😢</p>
    </div>
    <div
      v-for="tweet in tweets"
      v-else
      :key="tweet.id"
      class="pb-4 border-b tran dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-9"
      @click.native="redirect(tweet)"
    >
      <ChatItem :tweet="tweet" compact />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true
  }
})

const isEmptyArray = computed(() => props.tweets.length === 0)

function redirect() {
  // navigateTo(`/status/${tweet.id}`)
}
</script>

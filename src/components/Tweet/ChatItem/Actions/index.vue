<template>
  <div class="flex items-center justify-around w-full">
    <ActionIcon color="blue" @on-click="emits('onCommentClick')" :size="size">
      <template v-slot:icon="{ classes }">
        <IconPhChatTeardropTextFill text-2xl :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </ActionIcon>

    <ActionIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <IconIcTwotoneRefresh text-2xl :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionIcon>

    <ActionIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <IconBiHeart text-2xl :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionIcon>

    <ActionIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <IconIcBaselineUpload text-2xl :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionIcon>
  </div>
</template>
<script setup>
const emits = defineEmits(['onCommentClick'])

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const showStats = computed(() => props.compact)
const size = computed(() => (props.compact ? 5 : 8))

function generateRandomNumber() {
  return Math.floor(Math.random() * 100)
}
</script>

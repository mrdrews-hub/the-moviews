<script setup>
import { onMounted, ref } from 'vue';
import { saveData, removeData, getItem } from '../utils/storage'

const emit = defineEmits(['onRemoveFavorite', 'onAddFavorite'])

const props = defineProps({
  id: Number,
  favorited: Boolean
})

// const favorited = ref([])

// onMounted(() => {
//   favorited.value = getItem(props.id)
// })
</script>
<template>
  <button class="btn btn-md w-max text-white rounded-lg" @click="emit('onRemoveFavorite')" v-if="props.favorited">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-heart mr-1">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
      unFavorite
  </button>
  <button class="btn btn-md w-max text-white rounded-lg" @click="emit('onAddFavorite')" v-else>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-heart mr-1">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
      Favorite
  </button>
</template>
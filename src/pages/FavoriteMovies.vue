<script setup>
import { getAllData } from '../utils/storage'
import MovieCard from '@/components/MovieCard.vue'
import { onBeforeMount,ref } from 'vue';

const movieList = ref([])
onBeforeMount(() => {
  movieList.value = getAllData()
})
</script>

<template>
<div class="min-h-screen relative mt-20 mx-auto ">
  <h2 class="text-2xl text-center mb-4">Your <span class="text-secondary font-bold">Favorite</span> Movie</h2>
  <div class="movie-list flex justify-center flex-wrap gap-2" v-if="movieList">
      <MovieCard
          v-for="movie in movieList"
          :id="movie.id"
          :title="movie.title"
          :desc="movie.overview"
          :poster="movie.poster_path"
          :rating="movie.vote_average"
          :overview="movie.overview"
          :genre_ids="movie.genre_ids"
          class="m-2 w-full md:w-64"
      />
  </div>
  <div class="text-2xl font-bold text-center text-gray-200 opacity-50" v-else>No Favorites Movie Found</div>
</div>
</template>
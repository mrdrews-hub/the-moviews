<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import Badge from './Badge.vue';
import axios from 'axios'

import { generateGenreFromID } from '../utils/GetMovieGenre'

const props = defineProps({
    id: Number,
    title: String,
    poster: String,
    backdrop: String,
    desc: String,
    release: String,
    genres: Array
})

const genres = ref([])
const fetchMovieGenre = async () => {
    try {
        const result = (await axios.get(`https://api.themoviedb.org/3/genre/movie/list`)).data.genres
        genres.value = generateGenreFromID(result, props.genres)
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
  fetchMovieGenre()
})

// console.log(props.genres);

const router = useRouter()

const navigate = () => {
    router.push({ name: 'detail', params: { id: props.id }})
}

</script>

<template>
<div class="card card-side relative bg-base-100 shadow-xl box-border group">
  <div @click="navigate" class="cursor-pointer basis-auto mr-3">
    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-300 ease-in" ></div>
    <img :src="`https://image.tmdb.org/t/p/w200/${props.poster}`" :alt="props.title" class="w-36 rounded-tr-lg rounded-br-lg">
  </div>
  <div class="pt-3 pb-3 pr-3 flex flex-col gap-2 basis-4/5">
    <h2 class="title text-lg md:text-xl font-bold">{{props.title}}</h2>
    <small>{{ props.release }}</small>
    <div class="genre flex flex-wrap gap-1">
      <Badge v-for="genre in props.genres" :genre-id="genre"/>
    </div>
  </div>
</div>
</template>

<style scoped>
.title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  hyphens: auto;
}
</style>
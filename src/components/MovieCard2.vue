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
  <div @click="navigate" class="cursor-pointer basis-1/3 mr-3">
    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-all duration-300 ease-in" ></div>
      <!-- <div class="movie__background"
        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${props.poster})` }">
      </div> -->
    <img :src="`https://image.tmdb.org/t/p/w200/${props.poster}`" :alt="props.title" class="w-full min-w-max md:h-52 rounded-tr-lg rounded-br-lg">
  </div>
  <div class="pt-3 pb-3 pr-3 flex flex-col gap-2 basis-auto">
    <h2 class="text-xl font-bold">{{props.title}}</h2>
    <small>{{ props.release }}</small>
    <div class="genre flex justify-center flex-wrap gap-2">
      <Badge v-for="genre in props.genres" :genre-id="genre"/>
    </div>
    <!-- <div class="card-actions absolute bottom-0 right-0 m-4">
      <button class="btn btn-primary">Watch</button>
    </div> -->
  </div>
</div>
<!-- <div class="card card-side bg-base-100 shadow-xl">
  <figure><img :src="`https://image.tmdb.org/t/p/w200/${props.poster}`" :alt="props.title" class="w-48"></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div> -->
<!-- <div class="card w-80 bg-base-100 shadow-xl">
  <figure class="">
    <img :src="`https://image.tmdb.org/t/p/w200/${props.poster}`" :alt="props.title" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{{ props.title }}</h2>
    <div class="genre flex flex-wrap justify-center gap-1">
      <Badge v-for="n in 4" text="Action"/>
    </div>
    <div class="card-actions mt-3">
      <button class="btn btn-primary btn-sm rounded-md">Watch Now</button>
    </div>
  </div>
</div> -->
</template>
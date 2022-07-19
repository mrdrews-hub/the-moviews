<script setup>
import axios from 'axios';
import { onMounted, ref, watchEffect, defineAsyncComponent } from 'vue';

const MovieCard =  defineAsyncComponent(() => import('../components/MovieCard.vue'))
import LoadingCircle from '../components/Loading/LoadingCircle.vue'

const page = ref(1)
const fetching = ref(false)
const movieList = ref([])
const infiniteScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight - 450) {
        page.value += 1
    }
}

const fetchData = async () => {
    try {
        fetching.value = true
        const fetchData = (await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${page.value}&include_adult=true`)).data.results;
        movieList.value.push(...fetchData)
    } catch (error) {
        console.log(error.toString());
    } finally {
        fetching.value = false
    }
}

watchEffect(fetchData);

onMounted(() => {
    window.scrollTo({ top: 0 })
    document.addEventListener('scroll', infiniteScroll)
})
</script>

<template>
<div class="min-h-screen relative mt-20 mx-auto ">
    <h2 class="text-center">Movies Discover</h2>
    <div class="movie-list flex justify-center flex-wrap gap-2">
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
    <div class="loading flex flex-col justify-center items-center m-28" v-if="fetching">
        <LoadingCircle />
        <p class="text-center mt-8 text-xl">Loading Movie...</p>
    </div>
</div>
</template>
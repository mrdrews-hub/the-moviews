<script setup>
import axios from 'axios';
import { onMounted, ref, watchEffect, defineAsyncComponent, reactive } from 'vue';

import LoadingCircle from '../components/Loading/LoadingCircle.vue'
import FilterOptions from '../components/FilterOptions.vue'
import Tagbar from '../components/Tagbar.vue';
const MovieCard =  defineAsyncComponent(() => import('../components/MovieCard.vue'))

const options = reactive({
    page: 1,
    adult: false,
})
const tes = ref('')
const fetching = ref(false)
const movieList = ref([])
const showbtn = ref(false)
const infiniteScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight - 250) {
        showbtn.value = true
        // options.page += 1
    }
}

const fetchData = async () => {
    try {
        fetching.value = true
        const fetchData = (await axios.get(`discover/movie?page=${options.page}&include_adult=${options.adult}`)).data.results;
        movieList.value.push(...fetchData)
    } catch (error) {
        console.log(error.toString());
    } finally {
        fetching.value = false
    }
}
const handleToggle = () => {
    movieList.value = []
    options.adult = !options.adult
}
const handleTagClick = async (id, name) => {
    console.log('click ' + id);
    tes.value = name
    try {
        fetching.value = true
        const fetchData = (await axios.get(`discover/movie?with_genres=${id}`)).data.results;
        movieList.value = []
        movieList.value = fetchData
    } catch (error) {
        console.log(error.toString());
    } finally {
        fetching.value = false
    }
}

watchEffect(fetchData,{ flush: 'post' });

onMounted(() => {
    window.scrollTo({ top: 0 })
    document.addEventListener('scroll', infiniteScroll)
    console.log(tes.value);
})
</script>

<template>
<div class="min-h-screen relative mt-20 mx-auto ">
    <!-- <FilterOptions class=""/> -->
    <div class="loading flex flex-col justify-center items-center" v-if="fetching">
        <LoadingCircle />
        <p class="text-center mt-8 text-xl">Loading Movie...</p>
    </div>
    <Tagbar @onTagClicked="handleTagClick" class="my-4 sticky top-16 z-40"/>
    <div class="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            <MovieCard
            v-for="movie in movieList"
              :id="movie.id"
              :title="movie.title"
              :desc="movie.overview"
              :poster="movie.poster_path"
              :rating="movie.vote_average"
              :overview="movie.overview"
              :genre_ids="movie.genre_ids"
              :fetching="fetching"
              class="mb-2 lg:mb-4"
            />
    </div>
    <div class="loading flex flex-col justify-center items-center mt-10 -mb-8" v-if="showbtn">
        <button class="btn btn-lg btn-outline" @click="options.page += 1" :class="{ loading: fetching, 'btn-disabled': fetching }">Load More</button>
    </div>
</div>
</template>
<script setup>
import axios from 'axios';
import { onBeforeMount, ref, watchEffect } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SkeletonCard from './SkeletonCard.vue';
import MovieCard2 from './MovieCard2.vue'
import MovieCard from './MovieCard.vue';

const props = defineProps({
    movieId: Number
})

const modules = [Pagination, FreeMode]
const movies = ref([]) //Maks 10 Movie
const movieGenre = ref([])
const loading = ref(false)
const genres = ref([])

const fetchSimiliarMovie = async () => {
    try {
        const result = (await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}/similar`)).data.results
        const selectedMovie = result.slice(0,10)
        movies.value = selectedMovie
        movieGenre.value = selectedMovie.map(genre => genre.genre_ids )
    } catch (error) {
        console.log(error);
    }
}


onBeforeMount(() => {
    fetchSimiliarMovie()
})

// watchEffect(fetchSimiliarMovie)
</script>

<template>
<section class="similiar-movies relative">
    <div class="text-xl lg:text-2xl font-bold basis-1 mb-3">
        <h2>Similiar Movies</h2>
    </div>
    <div class="movie-list flex flex-col justify-around flex-wrap basis-1 gap-4">
        <MovieCard2 v-for="movie in movies" :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :desc="movie.overview"
            :poster="movie.poster_path"
            :release="movie.release_date"
            :genres="movie.genre_ids"
            :backdrop="movie.backdrop_path"
        />
        <!-- <Swiper
            :slidesPerView="7"
            :spaceBetween="20"
            :freeMode="true"
            :effect="'coverflow'"
            :pagination="{
                clickable: true
            }"
            :modules="modules"
            class="pb-6"
            >
                <template v-if="fetching">
                    <swiper-slide v-for="n in 8"><SkeletonCard /></swiper-slide>
                </template>
                <template v-else>
                    <swiper-slide v-for="movie in movies" :key="movie.id">
                        <MovieCard
                            :id="movie.id"
                            :title="movie.title"
                            :desc="movie.overview"
                            :poster="movie.poster_path"
                            :isFetching="fetching"
                        />
                    </swiper-slide>
                </template>
        </Swiper> -->
    </div>
</section>
</template>
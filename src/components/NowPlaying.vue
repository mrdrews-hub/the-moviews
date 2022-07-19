<script setup>
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, FreeMode, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import MovieCard from "./MovieCard.vue";
import MovieCard2 from "./MovieCard2.vue";
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SkeletonCard from './SkeletonCard.vue';

const modules = [Pagination, FreeMode, Lazy]
const movies = ref([])
const fetching = ref(false)

const fetchPopularMovie = async () => {
  try {
    fetching.value = true
    const fetchData = (await axios.get('movie/now_playing?region=id')).data.results
    movies.value = fetchData
    fetching.value = false
  } catch (error) {
    console.log(error.toString());
  }
}

onMounted(() => {
  fetchPopularMovie()
})
</script>
<template>
<div class="container mx-auto rounded-xl h-max">
    <div class="text-3xl font-bold basis-1 text-center">
        <h1 data-aos="fade-in">ON CINEMA</h1>
    </div>
    <hr class="my-2 border border-white/20 w-[90%] mx-auto">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :freeMode="true"
        :modules="modules"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
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
              :rating="movie.vote_average"
              :overview="movie.overview"
              :genre_ids="movie.genre_ids"
              class="mx-auto"
            />
          </swiper-slide>
        </template>
      </Swiper>
</div>
</template>
<style scoped>

</style>
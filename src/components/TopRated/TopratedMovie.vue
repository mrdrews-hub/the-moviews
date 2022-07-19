<script setup>
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import MovieCard from "../MovieCard.vue";
import { ref, onMounted } from 'vue';
import SkeletonCard from '../SkeletonCard.vue';

const modules = [Pagination, FreeMode, Navigation]
const movies = ref([])
const fetching = ref(false)


const fetchPopularMovie = async () => {
  try {
    fetching.value = true
    const fetchData = (await axios.get('movie/top_rated')).data.results
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
<div class="container mx-auto">
    <div class="text-3xl font-bold basis-1">
        <h1 class="text-center" data-aos="fade-in">Top Rated 
          <span data-aos="zoom-out" data-aos-delay="300">⭐</span>
          <span data-aos="zoom-out" data-aos-delay="400">⭐</span>
          <span data-aos="zoom-out" data-aos-delay="500">⭐</span>
        </h1>
    </div>
    <hr class="my-2 border border-white/20 w-[90%] mx-auto">
      <Swiper
        :slidesPerView="1"
        :spaceBetween="1"
        :pagination="{
          type: 'progressbar',
        }"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 14,
          },
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
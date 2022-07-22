<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue';
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Badge from './Badge.vue';

const genres = ref([])
const SwiperModules = [FreeMode ,Navigation]
const fetchAllGenres = async() => {
  try {
    const response = (await axios.get('genre/movie/list')).data.genres
    genres.value = response
  } catch (error) {
    console.log(error);
  }
}
onBeforeMount(() => {
  fetchAllGenres()
})
</script>
<template>
<div class="tag__bar px-3 py-4 bg-base-100">
<Swiper
  :slides-per-view="'auto'"
  :space-between="8"
  :modules="SwiperModules"
>
  <swiper-slide class="basis-1" v-for="genre in genres" :key="genre.id">
    <Badge :text="genre.name" @click="$emit('onTagClicked', genre.id, genre.name)" class="p-3 cursor-pointer hover:bg-slate-700 active:bg-slate-600"/>
  </swiper-slide>
</Swiper>
</div>
</template>
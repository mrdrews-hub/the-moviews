<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {FreeMode,Navigation,Thumbs} from 'swiper';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
const props = defineProps({
    movieId: Number
})
const route = useRoute()
const images = ref([])
const fetchTeasers = async () => {
    try {
        const result = (await axios.get(`movie/${props.movieId}/images`)).data
        images.value = [...result.backdrops]
        console.log(images.value);
    } catch (error) {
        console.log(error);
    }
}
let thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper;
}

const modules = [FreeMode,Navigation,Thumbs]

watchEffect(fetchTeasers)
</script>
<template>
<section id="picture">
  <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
  >
    <swiper-slide v-for="image in images">
      <img :src="`https://image.tmdb.org/t/p/original/${image.file_path}`" alt="" class="w-full lg:w-80">
    </swiper-slide>
  </Swiper>
  <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mt-4"
  >
    <swiper-slide v-for="image in images">
      <img :src="`https://image.tmdb.org/t/p/original/${image.file_path}`" alt="" class="w-72">
    </swiper-slide>
  </Swiper>
</section>
</template>
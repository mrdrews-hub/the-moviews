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
<section id="picture" class="relative">
  <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :freeMode="true"
      :slidesPerView="1"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="py-3 lg:w-[1000px]"
  >
    <swiper-slide v-for="image in images" class="max-w-md">
      <img :src="`https://image.tmdb.org/t/p/original/${image.file_path}`" alt="" class="">
    </swiper-slide>
  </Swiper>
  <Swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="7"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mt-4 lg:w-[600px]"
  >
    <swiper-slide v-for="image in images">
      <img :src="`https://image.tmdb.org/t/p/original/${image.file_path}`" alt="" class="">
    </swiper-slide>
  </Swiper>
</section>
</template>

<style scoped>
swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
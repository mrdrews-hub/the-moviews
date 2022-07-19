<script setup>
import { defineAsyncComponent } from 'vue';
// import HeroApp from '../components/HeroApp.vue'
// import StatsContent from '@/components/StatsContent.vue';
// import PopularMovie from '@/components/PopularMovie.vue';
// import NowPlaying from '../components/NowPlaying.vue';
// import TopratedMovie from '../components/TopRated/TopratedMovie.vue';

const HeroApp = defineAsyncComponent(() => import('../components/HeroApp.vue'))
const StatsContent = defineAsyncComponent(() => import('../components/StatsContent.vue'))
const PopularMovie = defineAsyncComponent(() => import('../components/PopularMovie.vue'))
const NowPlaying = defineAsyncComponent(() => import('../components/NowPlaying.vue'))
const TopratedMovie = defineAsyncComponent(() => import('../components/TopRated/TopratedMovie.vue'))
</script>

<template>
  <HeroApp />
  <StatsContent />
  <NowPlaying class="py-4 px-4"/>
  <PopularMovie class="mt-14 py-4 px-4"/>
  <TopratedMovie class="mt-14"/>
  <!-- <MovieCard class="mx-auto"/> -->
</template>
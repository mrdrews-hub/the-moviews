<script setup>
import HeroApp from '@/components/HeroApp.vue'
import StatsContent from '@/components/StatsContent.vue';
import PopularMovie from '@/components/PopularMovie.vue';
import NowPlaying from '../components/NowPlaying.vue';
import TopratedMovie from '../components/TopRated/TopratedMovie.vue';

</script>

<template>
  <HeroApp />
  <StatsContent />
  <NowPlaying class="py-4 px-4"/>
  <PopularMovie class="mt-14 py-4 px-4"/>
  <TopratedMovie class="mt-14"/>
  <!-- <MovieCard class="mx-auto"/> -->
</template>
<script setup>
import { ref } from 'vue';
import StatsCard from '../StatsCard/StatsCard.vue';
import Badge from '../Badge.vue';
import RadialRating from '../RadialRating.vue';
const props = defineProps({
    poster: String,
    title: String,
    release: String,
    overview: String,
    genres: Array,
    adult: Boolean,
    budget: Number,
    popularity: Number,
    vote_average: Number,
    vote_count: Number,
    isRelease: String,
})


const createStatus = ref([
    {
        title: 'Budget',
        value: props.budget,
    },
    {
        title: 'Popularity',
        value: props.popularity,
    },
    {
        title: 'Vote Average',
        value: props.vote_average,
        description: `Of ${props.vote_count}`
    }
])
</script>
<template>
<div class="card rounded-lg">
  <figure><img :src="`https://image.tmdb.org/t/p/w300/${props.poster}`" alt="poster" class="opacity-80"></figure>
  <div class="card-body flex flex-col md:flex-row justify-between">
      <div class="information flex flex-col flex-grow-0 gap-y-0">
        <h2 class="card-title text-3xl text-white text-center mb-3">{{ props.title }}</h2>
        <p class="leading-8 mb-3">
            Adult: {{ props.adult }} <br>
            Status: {{ props.isRelease }} <br>
            Release Date: {{ props.release }} <br>
        <span class="flex flex-wrap gap-2 mt-2"> <Badge v-for="genre in props.genres" :key="genre.id" :genre-id="genre.id" :text="genre.name"/></span>
        </p>
        <p class="mt-2">Overview: <br> {{ props.overview }} </p>
    </div>
    <div class="rating place-content-center mt-8 md:mt-0 md:absolute md:right-14">
        <RadialRating :rating="props.vote_average" :size="10" :vote_count="props.vote_count"/>
    </div>
    <!-- <StatsCard :stats="createStatus"/> -->
  </div>
</div>

</template>
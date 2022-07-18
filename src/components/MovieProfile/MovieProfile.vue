<script setup>
import Badge from '../Badge.vue';
import RadialRating from '../RadialRating.vue';
import FavoriteButton from '../FavoriteButton.vue';

import { saveData, removeData, getItem } from '../../utils/storage'
import { onMounted,onUpdated,ref } from 'vue';

const props = defineProps({
    id: Number,
    poster: String,
    title: String,
    release: String,
    overview: String,
    genres: Array,
    adult: Boolean,
    popularity: Number,
    vote_average: Number,
    vote_count: Number,
    isRelease: String,
})
const isFavorited = ref(false)

const onFavorite = () => {
    saveData({
            id: props.id,
            title: props.title,
            overview: props.overview,
            genre_ids: props.genres.map(genre => genre.id ),
            vote_average: props.vote_average,
            poster_path: props.poster
        })
        isFavorited.value = true
}

const onRemoveFavorite = () => {
    removeData(props.id)
    isFavorited.value = false
}

onMounted(() => {
    if(getItem(props.id)){
        isFavorited.value = true
    }
})

onUpdated(() => {
    console.log('update');
})

</script>
<template>
<div class="relative rounded-lg flex flex-col items-center md:flex-row md:mb-20">
    <figure class="basis-1/5 ">
        <img :src="`https://image.tmdb.org/t/p/w300/${props.poster}`" alt="poster" class="md:w-[400px]">
    </figure>
  <div class="card-body basis-4/5 flex flex-col md:flex-row justify-between">
      <div class="information flex flex-col flex-grow-0 gap-y-0">
        <h2 class="card-title text-3xl text-white text-center mb-3 md:w-4/5">{{ props.title }}</h2>
        <p class="leading-8 mb-3">
            Adult: {{ props.adult }} <br>
            Status: {{ props.isRelease }} <br>
            Release Date: {{ props.release }} <br>
        <span class="flex flex-wrap gap-2 mt-2 md:w-1/2"> <Badge v-for="genre in props.genres" :key="genre.id" :genre-id="genre.id" :text="genre.name"/></span>
        </p>
        <p class="mt-2">Overview: <br> {{ props.overview }} </p>
        <FavoriteButton class="mt-4 mx-auto md:mx-0" @onRemoveFavorite="onRemoveFavorite" @onAddFavorite="onFavorite" :favorited="isFavorited"/>
    </div>
    <div class="rating place-content-center mt-8 md:mt-0 md:absolute md:right-14">
        <RadialRating :rating="props.vote_average" :size="10" :vote_count="props.vote_count"/>
    </div>
    <!-- <StatsCard :stats="createStatus"/> -->
  </div>
</div>

</template>
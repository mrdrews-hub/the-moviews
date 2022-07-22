<script setup>
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router'
import { generateGenreFromID } from '../utils/GetMovieGenre'
import Badge from './Badge.vue';

const router = useRouter()
const props = defineProps({
    id: Number,
    title: String,
    poster: String,
    desc: String,
    overview: String,
    rating: Number,
    genre_ids: Array,
    isAdult: Boolean,
    fetching: Boolean
})

const genres = ref([])
const fetchMovieGenre = async () => {
    try {
        const result = (await axios.get(`https://api.themoviedb.org/3/genre/movie/list`)).data.genres
        genres.value = generateGenreFromID(result, props.genre_ids)
    } catch (error) {
        console.log(error);
    }
}

onBeforeMount(() => {
    fetchMovieGenre()
})

const navigate = () => {
    router.push({ path:`detail/${props.id}`})
}
</script>

<template>
<div class="main-card w-[170px] md:w-[300px] h-64 md:h-[440px] md:max-h-[450px] relative overflow-hidden group shadow-md cursor-pointer" @click="navigate" data-aos="zoom-in">
    <div class="animate-pulse bg-slate-600 w-40 md:w-[300px] h-64 md:h-[440px] max-h-[450px]" v-if="fetching"></div>
    <div class="poster relative overflow-hidden rounded-lg" v-else>
        <img :data-src="`https://image.tmdb.org/t/p/w200/${props.poster}`" :alt="props.title" class="w-full h-[270px] md:h-[440px] lazyload" v-if="props.poster !== null">
        <img src="/src/assets/image/broken-image.png" :alt="props.title" class="w-full h-full object-cover" v-else>
    </div>
    <div class="details absolute px-2 pt-9 md:p-5 w-full h-full -bottom-[146px] md:-bottom-[310px] left-0 box-border transition-all duration-500 delay-300 z-10 md:group-hover:-bottom-52 overflow-hidden">
        <h2 class="title text-lg md:text-2xl text-white font-semibold font-sans-narrow truncate cursor-pointer hover:text-blue-100" @click="navigate">{{ props.title }}</h2>
        <div class="rating mt-2 mb-3 flex align-middle">
            <input type="radio" name="rating-2" class="mask mask-star-2 bg-yellow-500 mr-2" checked />
            <span class="font-semibold">{{ Math.round(props.rating) }} / 10</span>
        </div>
        <div class="tags hidden md:flex gap-x-2 mb-3 w-96">
            <Badge v-for="genre in genres" :text="genre.name" />
        </div>
        <div class="description">
            {{ props.overview }}
        </div>
    </div>
</div>
</template>

<style scoped>
.title {
    letter-spacing: 1px;
}
.poster::before {
    content: "";
    position: absolute;
    bottom: -160px; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: linear-gradient(0deg, #000 55%, transparent); 
    transition: 0.5s;
    transition-delay: .3s;
    z-index: 1;
}

.main-card:hover .poster::before {
    bottom: 0;
}

.description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    hyphens: auto;
}
@media only screen and (max-width: 640px) {
.poster::before {
    content: "";
    position: absolute;
    bottom: -90px; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: linear-gradient(0deg, #000 55%, transparent); 
    transition: 0.5s;
    transition-delay: .3s;
    z-index: 1;
}
.description {
    display: none;
}
}
</style>
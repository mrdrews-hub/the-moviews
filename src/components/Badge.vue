<script setup>
import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import { computed } from '@vue/reactivity';

const props = defineProps({
    genreId: Number,
    text: String
})

const allGenres = ref([])
const genre = ref()
const fetching = ref(false)
const fetchMovieGenre = async () => {
    try {
        fetching.value = true
        const result = (await axios.get(`https://api.themoviedb.org/3/genre/movie/list`)).data.genres
        // allGenres.value = result
        genre.value = result.filter(g => g.id === props.genreId).map(g2 => g2.name)[0]
    } catch (error) {
        console.log(error);
    } finally {
        fetching.value = false
    }
}


onMounted(() => {
  fetchMovieGenre()
})
</script>

<template>
    <div class="badge badge-accent badge-outline truncate w-max">{{ genre }}</div>
</template>
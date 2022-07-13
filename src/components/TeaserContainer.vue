<script setup>
import axios from 'axios';
import TeaserVideo from './TeaserVideo.vue'
import { ref, watchEffect } from 'vue';

const props = defineProps({
    movieId: Number
})

const teasers = ref([])

const fetchTeasers = async () => {
    try {
        const result = (await axios.get(`movie/${props.movieId}/videos`)).data.results
        teasers.value = [result[0],result[1],result[2]]
    } catch (error) {
        console.log(error);
    }
}

watchEffect(fetchTeasers)
</script>

<template>
<section id="videoTeaser">
    <h2 class="text-2xl font-bold text-white">Teaser And Trailers</h2>
    <div class="container flex flex-col gap-4 justify-center items-center">
        <template v-if="teasers.length > 0">
            <teaser-video v-for="teaser in teasers" :key="teaser.id" :video-key="teaser.key"></teaser-video>
        </template>
        <template v-else>
            <h2 class="text-2xl font-bold mt-4">Oops! Videos Not Found 😥</h2>
        </template>
    </div>
</section>
</template>
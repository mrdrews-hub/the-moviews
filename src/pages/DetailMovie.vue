<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios'
import { onMounted, ref, watchEffect } from 'vue';
import TrinitySpinner from '../components/Loading/TrinitySpinner.vue';
import MovieProfile from '../components/MovieProfile/MovieProfile.vue';
import ReviewSection from '../components/ReviewSection.vue';
import SimiliarMovies from '../components/SimiliarMovies.vue';
import TeaserContainer from '../components/TeaserContainer.vue';
import NavigationCard from '../components/NavigationCard/NavigationCard.vue';

const route = useRoute()
const details = ref()
const backdropImages = ref([])
const loading = ref(false)

const fetchDetails = async () => {
    try {
        loading.value = true
        const detailsMovie = (await axios.get(`movie/${route.params.id}`)).data
        details.value = detailsMovie
    } catch (error) {
        console.log(error.toString());
    } finally {
        loading.value = false
    }
}

const fetchImages = async () => {
    try {
        const images = (await axios.get(`movie/${route.params.id}/images`)).data.backdrops
        const index = Math.floor(Math.random() * images.length)
        backdropImages.value = images[index].file_path
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    window.scrollTo({ top: 0 })
})

watchEffect(fetchDetails)
watchEffect(fetchImages)

</script>
<template>
<div class="min-h-screen">
    <div class="fixed top-0 movie__background w-full h-3/4 bg-left-top bg-cover -z-10" v-if="!loading"
        :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdropImages})` }">
        <div class="movie__background-gradient"></div>
    </div>
    <TrinitySpinner v-if="loading"/>
    <div class="container mx-auto mt-24 md:px-16 lg:px-24" v-else>
        <MovieProfile
            :poster="details.poster_path"
            :title="details.title"
            :budget="details.budget"
            :popularity="details.popularity"
            :vote_average="details.vote_average"
            :vote_count="details.vote_count"
            :adult="details.adult"
            :genres="details.genres"
            :overview="details.overview"
            :release="details.release_date"
            :isRelease="details.status"
        />
        <div class="flex flex-col md:flex-row">
            <!-- <TeaserContainer :movieId="details.id" class="basis-4/5"/> -->
            <!-- <ReviewSection :id="details.id" class="basis-4/5"/> -->
            <!-- <component :is="TeaserContainer" class="basis-4/5" :movieId="details.id"></component> -->
            <NavigationCard class="basis-4/5" :movieId="details.id"/>
            <SimiliarMovies :movieId="details.id" class="mt-4 px-3 md:mt-0 md:px-0"/>
        </div>
    </div>
</div>
</template>

<style>
.movie__background-gradient {
    background: linear-gradient(90deg, #2a303c 0%, rgba(35, 46, 46, 0.1) 16.15%, rgba(35, 46, 46, 0.1) 80.21%, #2a303c 100%), linear-gradient(180deg, rgb(39, 43, 48) 0%, rgba(0, 0, 0, 0.58) 33.85%, #2a303c 100%);
    height: 101%;
}
</style>
<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, ref, watchEffect, defineAsyncComponent } from 'vue';
import TrinitySpinner from '../components/Loading/TrinitySpinner.vue';

const MovieProfile = defineAsyncComponent(() =>import('../components/MovieProfile/MovieProfile.vue'))
const ReviewSection = defineAsyncComponent(() => import('../components/ReviewSection.vue'))
const SimiliarMovies = defineAsyncComponent(() => import('../components/SimiliarMovies.vue'))
const TeaserContainer = defineAsyncComponent(() => import('../components/TeaserContainer.vue'))
const TabItem = defineAsyncComponent(() => import('../components/Tabs/TabItem.vue'))
const Tabs = defineAsyncComponent(() => import('../components/Tabs/Tabs.vue'))
const PictureContainer = defineAsyncComponent(() => import('../components/PictureContainer.vue'))

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
    console.log('mounted');
    window.scrollTo({ top: 0 })
})
onUnmounted(() => {
    console.log('unMount');
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
            :popularity="details.popularity"
            :vote_average="details.vote_average"
            :vote_count="details.vote_count"
            :adult="details.adult"
            :genres="details.genres"
            :overview="details.overview"
            :release="details.release_date"
            :isRelease="details.status"
            :id="details.id"
        />
        <div class="flex flex-col md:flex-row">
        <Tabs class="basis-4/5">
            <TabItem name="Reviews" selected>
                <ReviewSection :movieId="details.id"/>
            </TabItem>
            <TabItem name="Videos">
                <TeaserContainer :movieId="details.id" />
            </TabItem>
            <TabItem name="Pictures">
                <PictureContainer :movieId="details.id" />
            </TabItem>
        </Tabs>
            <SimiliarMovies :movieId="details.id" class="mt-4 px-3 md:mt-0 md:px-0 basis-1/5"/>
        </div>
    </div>
</div>
</template>

<style>
.movie__background-gradient {
    background: linear-gradient(90deg, #2a303c 0%, rgba(35, 46, 46, 0.1) 16.15%, rgba(35, 46, 46, 0.1) 80.21%, #2a303c 100%), linear-gradient(180deg, rgb(39, 43, 48) 0%, rgba(0, 0, 0, 0.58) 33.85%, #2a303c 100%);
    height: 101%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
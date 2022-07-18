<script setup>
import axios from 'axios'
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import ReviewsCard from './Reviews/ReviewsCard.vue'

const props = defineProps({
    movieId: Number
})
const route = useRoute()
const reviews = ref([])

const fetchReviews = async () => {
    try {
        const listReviews = (await axios.get(`movie/${props.movieId}/reviews`)).data.results
        reviews.value = listReviews
    } catch (error) {
        console.log(error);
    }
}

watchEffect(fetchReviews)

</script>

<template>
<div class="user-review px-4" v-if="reviews">
    <div class="list-review flex flex-col gap-y-8" v-if="reviews.length > 0">
        <ReviewsCard v-for="review in reviews" :key="review.id"
            :username="review.author_details.username"
            :avatar="review.author_details.avatar_path"
            :createdAt="review.created_at"
            :content="review.content"
            :rating="review.author_details.rating"
            class="shadow-md shadow-slate-700 max-w-5xl"
        />
    </div>
    <div class="text-2xl text-center" v-else>
        <h2>No Reviews...</h2>
    </div>
</div>
</template>
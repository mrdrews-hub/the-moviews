<script setup>
import { computed } from '@vue/reactivity';
import UserRating from './UserRating.vue';

const props = defineProps({
    avatar: String,
    username: String,
    createdAt: String,
    rating: Number
})

const parsedAvatar = computed(() => {
    // Jika tidak punya foto profile
    if (props.avatar === null || undefined) return '/src/assets/image/avatarDefault.png'
    // Jika punya namun tidak ada url path nya
    if (props.avatar.substring(1,6) !== 'https') return `https://image.tmdb.org/t/p/w200/${props.avatar}`
    // Jika url pathnya lengkap
    return props.avatar.substring(1)
})
const calculateRating = computed(() => {
    return props.rating / 2
})


</script>

<template>
    <div class="flex items-center align-middle px-1 py-2 border-b border-slate-500">
        <div class="avatar w-12 h-12">
            <img :src="parsedAvatar" class="w-full rounded-full border-2 border-white"/>
        </div>
        <div class="flex flex-col ml-4">
            <h2>{{ props.username }}</h2>
            <UserRating :rating="calculateRating"/>
            <p class="text-sm mt-2">{{ new Date(props.createdAt).toLocaleDateString() }}</p>
        </div>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    rating: Number,
    size: {
        type: Number,
        default: 4
    },
    vote_count: Number,
})
const rating = computed(() => props.rating * 100 / 10)
const ratingColor = computed(() => {
    if (rating.value >= 80) return 'text-success'
    if (rating.value >= 50) return 'text-warning'
    return 'text-error'
})
const textSize = computed(() => {
    if (props.size > 8) return 'text-2xl'
    if (props.size > 5) return 'text-lg'
    return 'text-base'
})
</script>

<template>
<div class="radial-progress bg-slate-800 text-center"
    :class="[ratingColor]"
    :style="{
        '--value': rating,
        '--size': props.size + 'rem',
        '--thickness': 1 + 'rem'
        }"
>
<p :class="textSize">{{ Math.round(rating) }}%</p>
<p>of {{ props.vote_count }}</p>
<p>User Rating</p>
</div>
</template>
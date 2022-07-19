<script setup>
const props = defineProps({
    genreId: Number,
    text: String
})
</script>

<template>
    <div class="badge badge-accent badge-outline truncate w-max">{{ props.text }}</div>
</template>
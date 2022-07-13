<script setup>
const props = defineProps({
    rating: Number
})

console.log(props.rating);
</script>

<template>
<div class="rating rating-sm rating-half">
        <input type="radio" name="rating-10" class="rating-hidden" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-1" checked/>
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" class="bg-yellow-300 mask mask-star-2 mask-half-2" />
</div>
</template>
<script setup>
const props = defineProps({
    image: String,
})
</script>

<template>
<div class="hero h-96 bg-center relative" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.image})` }">
    <div class="hero-overlay bg-opacity-70"></div>
    <div class="hero-content">
        <div class="card card-side bg-base-300/40 backdrop-blur-md shadow-xl w-4/6 absolute bottom-0">
            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"></figure>
            <div class="card-body">
                <h2 class="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
/* Fade Effect */
.hero::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,.2) 60%, rgba(42,48,60,1) 100%);
}
</style>
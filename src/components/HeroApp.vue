<script setup>
import HeroImg from '@/assets/image/hero-banner-min.jpg'
import HeroImgMobile from '@/assets/image/hero-banner-mobile.jpg'
</script>

<template>
<div class="hero min-h-screen bg-cover bg-top bg-fixed" :style="{ backgroundImage: `url(${HeroImgMobile})` }">
  <div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold" data-aos="fade-in" data-aos-delay="450">Hello there</h1>
      <p class="mb-5" data-aos="fade-in" data-aos-delay="550">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary" data-aos="fade-in" data-aos-delay="650">Get Started</button>
    </div>
  </div>
</div>
</template>
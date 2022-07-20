<script setup>
import StatsCard from './StatsCard/StatsCard.vue';
</script>
<template>
<div class="container flex flex-col md:flex-row justify-evenly items-center my-16 md:my-24 mx-auto">
    <div class="text-center md:text-left mb-5 md:mb-0">
        <h1 class="font-bold font-inter text-2xl" data-aos="fade-up">Most <span class="text-secondary">Popular</span> Web Flatform <br> For Movie <span class="text-secondary">Streaming</span></h1>
    </div>
    <div class="divider divider-horizontal"></div>
        <div class="stats shadow flex flex-col md:flex-row overflow-hidden">
  
            <div class="stat basis-1 w-full" data-aos="fade-right">
                <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div class="stat-title">Page Views</div>
                <div class="stat-value text-secondary">2.6M</div>
                <div class="stat-desc">21% more than last month</div>
            </div>

              <div class="stat basis-1" data-aos="fade-left">
                <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div class="stat-title">New Users</div>
                <div class="stat-value">4,200</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>
  
        </div>
</div>
</template>
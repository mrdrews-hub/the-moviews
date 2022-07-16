<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()

</script>
<template>
  <div class="tabs mb-4">
      <RouterLink :to="`/detail/${route.params.id}`" class="tab tab-bordered tab-active">Reviews</RouterLink> 
      <RouterLink :to="`/detail/${route.params.id}/video`" class="tab tab-bordered">Video</RouterLink> 
      <a class="tab tab-bordered">Images</a>
  </div>
      <router-view v-slot="{ Component }">
          <transition name="fade">
          <component :is="Component" />
          </transition>
      </router-view>
</template>
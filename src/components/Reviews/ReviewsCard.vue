<script setup>
import ReviewHeader from './ReviewHeader.vue';
import ReviewBody from './ReviewBody.vue';

const props = defineProps({
  username: String,
  avatar: String,
  content: String,
  createdAt: String,
  rating: Number,
})
</script>

<template>
<div class="bg-base-100 shadow-xl px-6 rounded-lg">
  <ReviewHeader :avatar="props.avatar" :username="props.username" :createdAt="props.createdAt" :rating="props.rating"/>
  <ReviewBody :content="props.content"/>
</div>
</template>
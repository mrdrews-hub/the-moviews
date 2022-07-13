<script setup>
import StatsItem from './StatsItem.vue';
const props = defineProps ({
  stats: {
    type: Array,
    default: []
  }
})
</script>

<template>
<div class="stats shadow flex flex-wrap flex-col md:flex-row">
  <StatsItem v-for="(stat, index) in props.stats" :key="index"
    :title="stat.title"
    :value="stat.value"
    :description="stat.description"
  />  
</div>
</template>
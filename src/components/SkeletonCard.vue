<script setup>
  const props = defineProps({
    width: {
      type: Number,
      default: 320
    },
    height: {
      type: Number,
      default: 245
    },
  })
</script>

<template>
<div class="shadow w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="bg-slate-600 rounded-lg"
    :style="{ width: props.width + 'px', height: props.height + 'px' }"></div>
  </div>
</div>
</template>
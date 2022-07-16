<script setup>
import { onBeforeMount, watch, ref, inject } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
})
const index = ref(0)
const isActive = ref(false)
const tabs = inject('tabsProvider')

watch(
  () => tabs.selectedIndex,
  () => {
    isActive.value = index.value === tabs.selectedIndex;
  }
);

onBeforeMount(() => {
  index.value = tabs.count;
  tabs.count++;
  isActive.value = index.value === tabs.selectedIndex;
})
</script>

<template>
  <div class="item" v-if="isActive">
    <slot></slot>
  </div>
</template>
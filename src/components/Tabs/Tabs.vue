<script setup>
  import { onBeforeMount, onMounted, ref, useSlots, provide, reactive } from 'vue';


  const slots = useSlots()
  const state = reactive({
    selectedIndex: 0,
    tabs: [],
    count: 0,
  })
  provide('tabsProvider', state)

  const selectedTab = (i) => {
    state.selectedIndex = i
  }

  onBeforeMount(() => {
    if(slots.default) {
      state.tabs = slots.default().filter((child) => child.type.__name === "TabItem")
    }
  })

  onMounted(() => {
    selectedTab(0)
  })
  
</script>
<template>
<section>
  <nav class="tabs mb-4">
    <a class="tab tab-bordered text-lg" v-for="(link, i) in state.tabs"
      :key="i"
      @click="selectedTab(i)"
      :class="{'tab-active': i === state.selectedIndex}"
      >{{ link.props.name }}</a> 
  </nav>
  <article class="tab-content">
    <slot></slot>
  </article>
</section>
</template>
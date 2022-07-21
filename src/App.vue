<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavbarApp from './components/Navbar/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';
import BacktoTop from './components/BacktoTop.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import { onMounted, ref, watch } from 'vue';

const isOnline = ref(window.navigator.onLine)
watch(isOnline, () => {
  console.log(isOnline.value);
})
</script>

<!-- Refactor this using layouts system -->
<template>
  <NavbarApp />
  <div class="absolute bottom-0 left-0 bg-secondary/50 rounded-lg p-2" v-if="!isOnline"><h2 class="text-2xl">Offline Mode</h2> </div>
  <RouterView/>
    <BacktoTop />
  <FooterApp />
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

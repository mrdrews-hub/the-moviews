<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavbarApp from './components/Navbar/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';
import BacktoTop from './components/BacktoTop.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import { onMounted } from 'vue';


</script>

<!-- Refactor this using layouts system -->
<template>
<!-- <GuestLayout>
</GuestLayout> -->
  <NavbarApp />
    <router-view v-slot="{ Component }">
      <transition name="bounce" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

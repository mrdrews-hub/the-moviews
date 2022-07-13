<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavbarApp from './components/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';
import BacktoTop from './components/BacktoTop.vue';
import GuestLayout from './layouts/GuestLayout.vue';
import { onMounted } from 'vue';

const route = useRoute()

onMounted(() => {
    console.log(route.name);
})
</script>

<!-- Refactor this using layouts system -->
<template>
<!-- <GuestLayout>
</GuestLayout> -->
    <template v-if="route.name !== 'NotFound'">
        <NavbarApp />
        <BacktoTop />
          <router-view v-slot="{ Component }">
            <transition name="bounce">
              <component :is="Component" />
            </transition>
          </router-view>
        <FooterApp />
    </template>
    <template v-else>
        <RouterView />
    </template>
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

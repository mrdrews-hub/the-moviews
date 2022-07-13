<script setup>
import { RouterView } from 'vue-router';
import { ref, onMounted, onBeforeMount } from 'vue';

const navbarBackground = ref('bg-transparent')
const scrollEventHandler = (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
        navbarBackground.value = 'bg-base-300'
    } else {
        navbarBackground.value = 'bg-transparent'
    }
}
onBeforeMount(() => {
    window.addEventListener('scroll', scrollEventHandler)
})
</script>

<template>
<div class="-full overflow-hidden grid">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full navbar fixed top-0 z-50 transition-all ease-in-out duration-300" :class="navbarBackground">
      <div class="flex flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 text-secondary font-bold text-lg px-2 mx-2 justify-end items-center lg:justify-center">daisyUI</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal mr-4">
            <!-- Navbar menu content here -->
            <li><a class="btn btn-outline btn-secondary rounded-md">Login</a></li>
            <li><a>Register</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    <RouterView></RouterView>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-72 bg-blue-800/20 backdrop-blur-lg">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li><a>Sidebar Item 2</a></li>
        <li class="absolute bottom-5 w-1/2">
            <a class="btn btn-outline btn-secondary rounded-md">Login</a>
        </li>
      
    </ul>
  </div>
</div>
</template>
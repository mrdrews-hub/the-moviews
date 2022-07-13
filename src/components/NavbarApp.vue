<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, onBeforeMount, ref } from 'vue'

const navbarBackground = ref('bg-transparent')
const scrollEventHandler = (event) => {
    if (window.scrollY > 200) {
        navbarBackground.value = 'bg-base-300'
    } else {
        navbarBackground.value = 'bg-transparent'
    }
}
onMounted(() => {
    window.addEventListener('scroll', scrollEventHandler)
})
</script>

<template>
<header class="relative">
  <nav class="navbar lg:px-4 transition-all fixed top-0 z-50 ease-in-out duration-300" :class="navbarBackground">
    <div class="navbar-start">
      <!-- Responsive version -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost swap swap-rotate lg:hidden">
          <input type="checkbox" />
          <!-- Hamburger Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 swap-off fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          <!-- Close Icon -->
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
          <li><a>Home</a></li>
          <li><a>Favorit</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
      <!-- END -->
      <RouterLink to="/" class="btn btn-ghost normal-case text-xl text-secondary">daisyUI</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li class="text-secondary"><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/discover">Discover</RouterLink></li>
        <li><RouterLink to="/favorite">Favorite</RouterLink></li>
        <li><RouterLink to="/">About</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end ml-8">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input input-bordered input-md w-2/4" />
          <button class="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const showButton = ref(false)

const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'auto' })
}

const scrollEventHandler = (event) => {
    if (window.scrollY > 200) {
        showButton.value = true
    } else {
        showButton.value = false
    }
}
onMounted(() => {
    window.addEventListener('scroll', scrollEventHandler)
})
</script>

<template>
<Teleport to="body">
    <button
        v-if="showButton"
        @click="scrollToTop"
        class="bg-secondary rounded-full w-12 h-12 flex justify-center items-center p-2 z-50 opacity-75 fixed bottom-4 right-5 animate-bounce">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#ddd"
            class="-rotate-90"
            viewBox="0 0 24 24">
            <title>Back to Top</title>
            <path d="M22 12l-20 12 7.289-12-7.289-12z"/>
        </svg>
    </button>
</Teleport>
</template>
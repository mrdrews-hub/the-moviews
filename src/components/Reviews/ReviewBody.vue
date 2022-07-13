<script setup>
import { computed } from '@vue/reactivity';
import { prop } from 'dom7';
import { onMounted, ref } from 'vue';

const props = defineProps({
    content: String
})


// FIXME
// Handle ketika content review sedikit hilangkan tombol Read More

const overlay = ref(null)
const contentHeight = ref('h-40') // = 160px
const readMore = ref(false)
// const showReadmoreButton = ref(false)

const readMoreEventHandler = (event) => {
    readMore.value = !readMore.value
    if (readMore.value){
        overlay.value.classList.remove('bg-gradient-to-t')
        contentHeight.value = 'h-auto'
        event.target.textContent = 'Read Less' 
    }  else {
        overlay.value.classList.add('bg-gradient-to-t')
        contentHeight.value = 'h-40'
        event.target.textContent = 'Read More'
    }
}

const showReadmoreButton = computed(() => props.content.split(' ').length > 110 ? true : false)

</script>
<template>
<div class="review-body w-full">
    <div class="content relative overflow-hidden transition-all ease-in-out" :class="[contentHeight, { active: readMore }]">
        <p class="pt-2 pb-4">
            Reviewed: <br>
            {{ props.content }}
        </p>
        <div class="overlay absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#2a303c] to-transparent" ref="overlay"></div>
    </div>
    <a class="read-more my-2 text-sky-500 hover:text-sky-400 text-sm relative inline-block float-right cursor-pointer"
    v-if="showReadmoreButton"
        @click="readMoreEventHandler">Read More</a>
</div>
</template>

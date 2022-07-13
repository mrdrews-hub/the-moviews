<script setup>
import { computed, ref } from '@vue/reactivity';
import TeaserContainer from '../TeaserContainer.vue';
import ReviewSection from '../ReviewSection.vue';

const props = defineProps({
    movieId: Number
})

const component = ref([
    {
        name: 'Reviews',
        isActive: false,
        component: ReviewSection
    },
    {
        name: 'Videos',
        isActive: false,
        component: TeaserContainer
    }
])
const navLink = ref(null)
const navActive = ref('reviews')

const handleNavigation = (event) => {
    event.preventDefault()
    navActive.value = event.target.textContent.toLowerCase()
    console.log(navActive);
}

const resolveComponent = computed(() => {
    return navActive.value.toLowerCase() === 'reviews' ? ReviewSection : TeaserContainer
})
</script>
<template>
<div class="navigation-card">
    <div class="card-header">
        <nav>
            <ul class="flex gap-2">
                <li class="text-white p-2 border border-b-0 rounded-md cursor-pointer"
                    ref="navLink"
                    v-for="nav in component"
                    @click="handleNavigation">
                        {{ nav.name }}
                </li>
            </ul>
        </nav>
    </div>
    <div class="card-content border-t-2">
        <component :is="resolveComponent" class="mt-3" :movieId="props.movieId"></component>
    </div>
</div>
</template>
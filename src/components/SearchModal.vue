<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import axios from 'axios'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import { useRouter } from 'vue-router';

const router = useRouter()
const emit = defineEmits(['showDialog'])

const modal = ref(null)
const input = ref(null)
const keyword = ref('')
const searchResult = ref([])

watch(keyword, async (newValue, oldValue) => {
    if(newValue.length > 0) {
        try {
            const result = (await axios.get(`search/movie?query=${keyword.value}`)).data.results
            searchResult.value = result.slice(0,10)
            console.log(searchResult.value);
        } catch (error) {
            console.log(error.toString());   
        }
    }
}, { flush: 'post' })
const navigate = (id) => {
    emit('showDialog', false)
    router.push({ name: 'detail', params: { id: id }})
}
onMounted(() => {
    console.log('modal Mounted!');
    input.value.focus()
    document.body.classList.add('overflow-hidden')
})

onUnmounted(() => {
    console.log('modal unMounted!');
    document.body.classList.remove('overflow-hidden')
})
</script>
<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-[999] bg-gray-600/40 backdrop-blur-sm flex justify-center items-center overflow-hidden" ref="modal">
            <div class="myModal w-full md:w-[700px] h-[320px] md:h-[600px] bg-slate-800 p-2 rounded-lg">
                <div class="search mb-3 flex items-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Type here" class="input input-bordered pl-10 w-full" ref="input" v-model.lazy="keyword"/>
                </div>
                <div class="search-result h-4/6 md:h-5/6 border-t border-b overflow-x-hidden pb-3">
                    {{ keyword }}
                    <template v-if="searchResult.length > 0">
                        <div class="flex bg-gray-700 shadow-xl my-4" v-for="movie in searchResult" @click="navigate(movie.id)">
                            <figure class="basis-auto">
                                <img :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`" :alt="movie.title" class="w-24" v-if="movie.poster_path !== null" />
                                <img data-src="/src/assets/image/broken-image.png" :alt="movie.title" class="w-24 h-full object-cover lazyload" v-else />
                            </figure>
                            <div class="body overflow-hidden basis-5/6 p-3">
                                <h2 class="card-title truncate">{{ movie.title }}</h2>
                                <p class="description">{{ movie.overview }}</p>
                            </div>
                        </div>
                        <a href="#" class="text-center mb-4 text-sky-500">See more</a>
                    </template>
                    <h2 class="text-center mt-12" v-else>No result ...</h2>
                </div>
                <div class="modal-footer py-3 text-right mr-3">
                    <button class="btn btn-error btn-sm rounded-lg" @click="$emit('showDialog', false)"> Close</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    hyphens: auto;
}
</style>
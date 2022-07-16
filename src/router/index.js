import { createRouter, createWebHistory, } from 'vue-router'
import ReviewSection from '../components/ReviewSection.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/HomePage.vue')
        },
        {
            path: '/detail/:id',
            component: () => import('../pages/DetailMovie.vue'),
            // children: [
            //     {
            //         path: '',
            //         component: '../pages/MediaMovie.vue'
            //     },
            //     {
            //         path: 'video',
            //         component: () => import('../components/TeaserContainer.vue')
            //     }
            // ]
        },
        {
            path: '/discover',
            name: 'discover',
            component: () => import('../pages/MoviesPages.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../pages/NotFound.vue')
        }
    ]
})
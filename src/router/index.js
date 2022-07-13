import { createRouter, createWebHistory, } from 'vue-router'

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
            name: 'detail',
            component: () => import('../pages/DetailMovie.vue')
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
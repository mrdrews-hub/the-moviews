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
            component: () => import('../pages/DetailMovie.vue'),
        },
        {
            path: '/discover',
            name: 'discover',
            component: () => import('../pages/MoviesPages.vue')
        },
        {
            path: '/favorite',
            component: () => import('../pages/FavoriteMovies.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../pages/NotFound.vue')
        }
    ]
})
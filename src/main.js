import { createApp } from 'vue'
import Axios from 'axios'

import App from './App.vue'
import { api } from './config/api'
import './assets/index.css'

import { router } from './router'

Axios.defaults.baseURL = api.url;
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + api.api_key;

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import Axios from 'axios'
import AOS from 'aos'

import App from './App.vue'
import { api } from './config/api'
import './assets/index.css'
import 'feather-icons/dist/feather.min.js'
import { router } from './router'
import 'aos/dist/aos.css'

Axios.defaults.baseURL = api.url;
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + api.api_key;
AOS.init({
  debounceDelay: 100,
  delay: 100,
  duration:500,
  once: true
})

createApp(App).use(router).mount('#app')

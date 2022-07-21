import { fileURLToPath, URL } from 'url'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    VitePWA({
      injectRegister: 'auto',
      strategies: 'generateSW',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        globIgnores: [
          "**/node_modules/**/*",
        ],
        runtimeCaching:[
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              expiration: { maxEntries: 20 },
              cacheName: 'image-assets',
            },
            method: 'GET'
          }
        ],
        sourcemap: true,
        clientsClaim: true,
        skipWaiting: true
      }
    })
  ],
  ssr: true,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

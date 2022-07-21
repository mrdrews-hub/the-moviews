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
      manifest: {
        "name": "the-moviews-movie-catalog",
        "short_name": "the-moviews",
        "theme_color": "#2a2d30",
        "background_color": "#2a2d30",
        "display": "standalone",
        "orientation": "portrait",
        "scope": "/",
        "description": "Free Movie Catalog for you",
        "start_url": "/",
        icons: [
          {
            "src": "images/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
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

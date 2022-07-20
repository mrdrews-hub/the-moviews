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
    Inspect(),
    splitVendorChunkPlugin(),
    VitePWA({
      injectRegister: 'auto',
      strategies: 'generateSW',
      devOptions: {
        enabled: true
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

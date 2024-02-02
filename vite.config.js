import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/speed-n-power/' : '/',//THIS IS EXPERIMENTAL!!!
  base: "/",
    plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir : 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: '/src/main.js'
    }
  }
})
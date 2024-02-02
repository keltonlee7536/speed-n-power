import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/*module.exports = {
  root: './',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: './src/main.js'
    }
  }
}*/


// https://vitejs.dev/config/
export default defineConfig({
  // publicPath: process.env.NODE_ENV === 'production' ? '/speed-n-power/dist/' : '/',//THIS IS EXPERIMENTAL!!!
  base: "/speed-n-power/dist/",
    plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir : 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: 'src/main.js'
    }
  }
})
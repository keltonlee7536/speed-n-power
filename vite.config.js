import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/speed-n-power/", //could also trt ""
    plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

//maybe just make "dist" the root then i wouldnt have to worry about moving files?


// base is by default "/" could change it to empty?
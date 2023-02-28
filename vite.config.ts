// code below has been added so that a proxy works and allows for the baseUrl etc can be used in the browser

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // with options
      '/api': {
        target: 'http://127.0.0.1:4000',
        changeOrigin: true
      },
    }
  }
})
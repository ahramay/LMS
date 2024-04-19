import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 server:{
  proxy:{
    '/api':'https://dev.hsma.org/',
  },
 },
  build: {
    outDir: '../backend/frontend/home',
  },
})

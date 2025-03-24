import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  server: {
   proxy: {
    '/api': {
      // target: 'http://localhost:4000',
      target: "https://aditya-rise-institute-git-main-arcis-projects-2e5ddd3b.vercel.app/",
      changeOrigin: true 
      },
   }
  },
  
  plugins: [react()],
})

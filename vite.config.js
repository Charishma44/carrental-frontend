import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <your-github-username> and <repo-name>
export default defineConfig({
  plugins: [react()],
  base: '/carrental-frontend/', // 👈 required for GitHub Pages
})

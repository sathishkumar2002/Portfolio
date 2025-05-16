import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // 👈 Change this to match your GitHub repo name
  plugins: [react()]
})

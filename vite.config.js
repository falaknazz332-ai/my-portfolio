import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves from the domain root, so base stays '/'.
export default defineConfig({ plugins: [react()], base: '/' })

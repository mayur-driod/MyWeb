import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Allow .JPG files as assets
  build: {
    assetsInlineLimit: 0, // Ensures assets are not inlined
  },
})


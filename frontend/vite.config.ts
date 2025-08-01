import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    }
  },
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
  build: {
    assetsInlineLimit: 4096 // 4kb
  }
})
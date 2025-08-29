import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@links': path.resolve(__dirname, './src/components/links'),
      '@footer': path.resolve(__dirname, './src/components/footer'),
      '@header': path.resolve(__dirname, './src/components/header'),
      '@body': path.resolve(__dirname, './src/components/body')
    }
  }
})

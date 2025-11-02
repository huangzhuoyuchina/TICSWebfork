import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 80,
    open: true,
    watch: {
      usePolling: false
    }
  },
  build: {
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true,
          },
      },
  },
})
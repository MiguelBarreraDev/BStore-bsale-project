import { defineConfig } from 'vite'
import path from 'path'

const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'dist')

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(root, 'index.html'),
        category: path.resolve(root, 'pages', 'category', 'category.html'),
        results: path.resolve(root, 'pages', 'results', 'results.html')
      }
    }
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})

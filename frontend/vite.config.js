import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: { outDir: '../dist' },
  envDir: '../',
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})

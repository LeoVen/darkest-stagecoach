import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        // `npm run docs` moves this folder to ../docs for GitHub Pages
        outDir: 'build'
    }
})

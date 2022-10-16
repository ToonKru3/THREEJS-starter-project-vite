import { defineConfig } from 'vite'

export default defineConfig({
    root: './',
    publicDir: '../public',
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },
    server: {
        watch: {
            usePolling: true     // Change it's to true 
        }
    }
})
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
        resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    base: './',
    server: {
        port: 8000,
        open: true,
        cors: true
    }
})

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvg } from './src/components/svgIcon/index';
import { resolve } from 'path';
function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "src/assets/styles/index.scss";',
            },
        },
    },
    plugins: [vue(), createSvg('./src/assets/svg/')],
    resolve: {
        alias: [
            {
                find: /\/@\//,
                replacement: pathResolve('src') + '/',
            },
        ],
    },

    base: './',
    server: {
        port: 8000,
        open: true,
        cors: true,
    },
});

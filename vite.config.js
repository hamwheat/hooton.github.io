import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import postCssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
    base: '/hooton.github.io/',
    plugins: [
        vue(),
        vueDevTools(),
        postCssPxToRem({
            rootValue: 16,
            propList: ['*'],
            mediaQuery: true,
            minPixelValue: 2,
            exclude: /node_modules/i
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})

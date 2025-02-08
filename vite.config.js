import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/styles/main.scss" as *;`,
            },
        },
        postcss: './postcss.config.cjs'
    },
});
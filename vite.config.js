import { defineConfig } from 'vite';

// Vite-configuratie
export default defineConfig({
    // Configuratie voor CSS, hier gebruik je SCSS
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/styles/main.scss" as *;`, // Automatisch SCSS-lading
            },
        },
    },
    // Optimaliseer dependencies
    optimizeDeps: {
        include: ['gsap'], // Voeg GSAP toe aan de pre-bundling dependencies
    },
    // Optionele serverinstellingen
    server: {
        port: 3000, // Stel een aangepaste poort in
        open: true, // Open browser automatisch
    },
    // Optionele buildinstellingen
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Splits GSAP in een aparte bundel
                    gsap: ['gsap'],
                },
            },
        },
    },
});
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            open: true,
        },

        plugins: [tailwindcss()],
    },
    site: 'https://gaff0ireton.github.io',
    base: '/summer_vacation',
});
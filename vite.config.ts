import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import site from './src/config/site.json';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'official-site-url',
      transformIndexHtml: html => html.replaceAll('%SITE_URL%', new URL(site.url).href),
    },
  ],
});

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio-v2/', // required for GitHub Pages

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});

import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

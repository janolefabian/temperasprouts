import { defineConfig } from 'vite';

export default defineConfig({
  base: '/temperasprouts/', 
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths are used
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html', // Ensure the correct input file
    },
  },
});

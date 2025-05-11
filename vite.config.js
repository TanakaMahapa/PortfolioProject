import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths are used
  build: {
    outDir: 'dist',
  },
  server: {
    mimeTypes: {
      '.js': 'text/javascript',
    },
  },
});

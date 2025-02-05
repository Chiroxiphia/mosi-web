import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta donde se almacenará el build
    emptyOutDir: true
  },
  base: '', // Esto es importante para evitar errores de rutas en Vercel
  server: {
    port: 3000
  }
});




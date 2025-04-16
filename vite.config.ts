import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Certifique-se de que a base está configurada corretamente
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Pasta de saída para o build
  },
});

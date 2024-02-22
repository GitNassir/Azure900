import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Tilføj denne linje

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Tilføj dine aliaser her, hvis du har nogen
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Du kan tilføje flere entry points her hvis nødvendigt
      },
    },
    // base: '/min-undermappe/', // Kun nødvendig hvis du deployer til en undermappe
  },
});

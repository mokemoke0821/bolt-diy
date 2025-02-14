import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [UnoCSS(), react(), tsconfigPaths()],
  server: {
    port: 5174,
    host: true
  },
  build: {
    outDir: 'public/build',
    manifest: true,
    rollupOptions: {
      input: {
        app: './app/entry.client.tsx'
      }
    }
  },
  publicDir: 'public'
});

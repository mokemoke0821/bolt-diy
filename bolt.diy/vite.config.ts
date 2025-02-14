import { defineConfig } from 'vite'
import { vitePlugin as remix } from '@remix-run/dev'
import UnoCSS from 'unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    remix(),
    UnoCSS(),
    tsconfigPaths()
  ],
  server: {
    port: 5174,
    host: true
  }
})

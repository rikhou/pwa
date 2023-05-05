import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

const pwaOptions = {
  injectRegister: 'inline',
  registerType: 'prompt',
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'PWA test',
    short_name: 'PWA test',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  devOptions: {
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
  strategies:'injectManifest',
  filename:'claims-sw.ts',
  srcDir:'src',
  workbox: {
    sourcemap: true
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:5174
  },
  plugins: [
    react(),
    VitePWA(pwaOptions),
  ],
})

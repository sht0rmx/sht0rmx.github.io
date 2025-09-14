import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Vue Blog',
        short_name: 'Blog',
        description: 'Mini blog by sht0rmx',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/sht0rmx\.snipla\.com\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 24 * 60 * 60,
              }
            }
          },
          {
            urlPattern: /\.(?:js|css|png|jpg|svg|ico)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'assets-cache',
              expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
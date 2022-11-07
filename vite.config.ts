import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Inspect from 'vite-plugin-inspect'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import react from '@vitejs/plugin-react'
/**
 * 解析路径
 * @param basePath - 基础路径
 */
export function resolvePath(rootPath: string, basePath: string) {
  const root = fileURLToPath(new URL(rootPath, basePath))
  const src = `${root}src`

  return {
    root,
    src
  }
}

const vitePath = resolvePath('../../../', import.meta.url)

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    react(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'react'
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/components', 'src/store']
    }),
    Icons({
      compiler: 'react',
      customCollections: {
        custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`)
      },
      scale: 1,
      defaultClass: 'inline-block',
      autoInstall: true
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),

    // https://github.com/antfu/vite-plugin-inspect
    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect()
  ],
  server: {
    proxy: {
      '/api': {
        // target: 'http://47.95.215.156:3333',
        target: 'https://music-erkelost.vercel.app/',
        changeOrigin: true,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

// vite.config.ts
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/vite@4.0.0-alpha.0_@types+node@18.11.9/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/unplugin-auto-import@0.11.4/node_modules/unplugin-auto-import/dist/vite.js";
import { VitePWA } from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/vite-plugin-pwa@0.13.1_vite@4.0.0-alpha.0/node_modules/vite-plugin-pwa/dist/index.mjs";
import Inspect from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/vite-plugin-inspect@0.7.5_vite@4.0.0-alpha.0/node_modules/vite-plugin-inspect/dist/index.mjs";
import Icons from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/unplugin-icons@0.14.13/node_modules/unplugin-icons/dist/vite.mjs";
import { FileSystemIconLoader } from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/unplugin-icons@0.14.13/node_modules/unplugin-icons/dist/loaders.mjs";
import react from "file:///C:/Users/11963/Desktop/react-pwa-master/node_modules/.pnpm/@vitejs+plugin-react@2.2.0_vite@4.0.0-alpha.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\11963\\Desktop\\react-pwa-master";
var __vite_injected_original_import_meta_url = "file:///C:/Users/11963/Desktop/react-pwa-master/vite.config.ts";
function resolvePath(rootPath, basePath) {
  const root = fileURLToPath(new URL(rootPath, basePath));
  const src = `${root}src`;
  return {
    root,
    src
  };
}
var vitePath = resolvePath("../../../", __vite_injected_original_import_meta_url);
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    react(),
    AutoImport({
      imports: ["react"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/components", "src/store"]
    }),
    Icons({
      customCollections: {
        custom: FileSystemIconLoader(`${vitePath.src}/assets/svg`)
      },
      scale: 1,
      defaultClass: "inline-block",
      autoInstall: true
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Inspect()
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://music-erkelost.vercel.app/",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default,
  resolvePath
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxMTk2M1xcXFxEZXNrdG9wXFxcXHJlYWN0LXB3YS1tYXN0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXDExOTYzXFxcXERlc2t0b3BcXFxccmVhY3QtcHdhLW1hc3RlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvMTE5NjMvRGVza3RvcC9yZWFjdC1wd2EtbWFzdGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgSW5zcGVjdCBmcm9tICd2aXRlLXBsdWdpbi1pbnNwZWN0J1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcbmltcG9ydCB7IEZpbGVTeXN0ZW1JY29uTG9hZGVyIH0gZnJvbSAndW5wbHVnaW4taWNvbnMvbG9hZGVycydcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbi8qKlxuICogXHU4OUUzXHU2NzkwXHU4REVGXHU1Rjg0XG4gKiBAcGFyYW0gYmFzZVBhdGggLSBcdTU3RkFcdTc4NDBcdThERUZcdTVGODRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXRoKHJvb3RQYXRoOiBzdHJpbmcsIGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3Qgcm9vdCA9IGZpbGVVUkxUb1BhdGgobmV3IFVSTChyb290UGF0aCwgYmFzZVBhdGgpKVxuICBjb25zdCBzcmMgPSBgJHtyb290fXNyY2BcbiAgcmV0dXJuIHtcbiAgICByb290LFxuICAgIHNyY1xuICB9XG59XG5cbmNvbnN0IHZpdGVQYXRoID0gcmVzb2x2ZVBhdGgoJy4uLy4uLy4uLycsIGltcG9ydC5tZXRhLnVybClcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgICAnQC8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2BcbiAgICB9XG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbJ3JlYWN0J10sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogWydzcmMvY29tcG9uZW50cycsICdzcmMvc3RvcmUnXVxuICAgIH0pLFxuICAgIEljb25zKHtcbiAgICAgIGN1c3RvbUNvbGxlY3Rpb25zOiB7XG4gICAgICAgIGN1c3RvbTogRmlsZVN5c3RlbUljb25Mb2FkZXIoYCR7dml0ZVBhdGguc3JjfS9hc3NldHMvc3ZnYClcbiAgICAgIH0sXG4gICAgICBzY2FsZTogMSxcbiAgICAgIGRlZmF1bHRDbGFzczogJ2lubGluZS1ibG9jaycsXG4gICAgICBhdXRvSW5zdGFsbDogdHJ1ZVxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAvLyBzZWUgdW5vY3NzLmNvbmZpZy50cyBmb3IgY29uZmlnXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1ZpdGVzc2UnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4taW5zcGVjdFxuICAgIC8vIFZpc2l0IGh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9fX2luc3BlY3QvIHRvIHNlZSB0aGUgaW5zcGVjdG9yXG4gICAgSW5zcGVjdCgpXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovLzQ3Ljk1LjIxNS4xNTY6MzMzMycsXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vbXVzaWMtZXJrZWxvc3QudmVyY2VsLmFwcC8nLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93XG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlULE9BQU8sVUFBVTtBQUNsVSxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUVsQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFdBQVc7QUFUbEIsSUFBTSxtQ0FBbUM7QUFBc0osSUFBTSwyQ0FBMkM7QUFjek8sU0FBUyxZQUFZLFVBQWtCLFVBQWtCO0FBQzlELFFBQU0sT0FBTyxjQUFjLElBQUksSUFBSSxVQUFVLFFBQVEsQ0FBQztBQUN0RCxRQUFNLE1BQU0sR0FBRztBQUNmLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU0sV0FBVyxZQUFZLGFBQWEsd0NBQWU7QUFFekQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDdEMsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFFTixXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTztBQUFBLE1BQ2pCLEtBQUs7QUFBQSxNQUNMLE1BQU0sQ0FBQyxrQkFBa0IsV0FBVztBQUFBLElBQ3RDLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLG1CQUFtQjtBQUFBLFFBQ2pCLFFBQVEscUJBQXFCLEdBQUcsU0FBUyxnQkFBZ0I7QUFBQSxNQUMzRDtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLE1BQ2QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBSUQsUUFBUTtBQUFBLE1BQ04sY0FBYztBQUFBLE1BQ2QsZUFBZSxDQUFDLGVBQWUsdUJBQXVCO0FBQUEsTUFDdEQsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFJRCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBRU4sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBRWQsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDOUM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==

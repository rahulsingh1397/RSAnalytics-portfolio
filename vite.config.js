import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const base = isProduction ? '/RSAnalytics-portfolio/' : '/';
  
  return {
    plugins: [react(), tailwindcss()],
    base: base,
    assetsInclude: ["**/*.gltf", "**/*.glb"],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        external: ['public/images/alexa-reviews.jpg'],
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        }
      }
    },
    // Add server configuration for development
    server: {
      port: 3000,
      open: true
    }
  }
});

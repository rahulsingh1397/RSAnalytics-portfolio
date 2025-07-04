import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Remove the base URL for Vercel deployment
  base: "/",
  assetsInclude: ["**/*.gltf", "**/*.glb"],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      external: ['public/images/alexa-reviews.jpg']
    }
  },
  // Add server configuration for development
  server: {
    port: 3000,
    open: true
  }
});

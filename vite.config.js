import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/RSAnalytics-portfolio",
  assetsInclude: ["**/*.gltf", "**/*.glb"],  // ✅ Allow .gltf and .glb files
  build: {
    rollupOptions: {
      external: ['public/images/alexa-reviews.jpg']
    }
  }
});

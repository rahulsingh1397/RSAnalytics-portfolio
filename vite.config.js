import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: "/RSAnalytics-portfolio",
=======
  base: "/pedrotech-portfolio",
>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a
});

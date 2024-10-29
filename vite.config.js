import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import Inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
  ],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
});

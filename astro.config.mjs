// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },
  integrations: [mdx()],
});
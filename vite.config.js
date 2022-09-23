import { defineConfig } from "vite";
export default defineConfig({
  server: {
    base: "/public/",
    open: "../index.html",
    port: 4000, // default port for "antfu.browse-lite"
  },
});

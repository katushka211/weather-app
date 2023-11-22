import { defineConfig } from "vite";

export default defineConfig({
  base: "/weather-app/",
  resolve: {
    includePaths: ["node_modules", "./public"],
  },
});

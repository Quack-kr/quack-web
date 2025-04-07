import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";

const config = {
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true,
    base: "/",
    define: {
      "process.env": process.env,
    },
  },
} as UserConfig ;

export default defineConfig(config);

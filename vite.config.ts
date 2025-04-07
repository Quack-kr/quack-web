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
    proxy: {
      "/assets": {
        target: "https://s3.ap-northeast-2.amazonaws.com", // 백엔드 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, ""), // 필요에 따라 /api 제거
      },
    },
  },
} as UserConfig ;

export default defineConfig(config);

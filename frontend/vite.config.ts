import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, ".."), "");
  const n8nFormUrl = env.VITE_N8N_CONTACT_WEBHOOK_URL || "https://ronenc7.app.n8n.cloud/form/2f8dae89-1889-4f56-85e4-29415c62a99e";
  const n8nOrigin = new URL(n8nFormUrl).origin;
  const n8nPath = new URL(n8nFormUrl).pathname;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@models": path.resolve(__dirname, "./Models"),
      },
    },
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://127.0.0.1:3001",
          changeOrigin: true,
          secure: false,
        },
        "/n8n-contact": {
          target: n8nOrigin,
          changeOrigin: true,
          secure: true,
          rewrite: () => n8nPath,
        },
      },
    },
  };
});

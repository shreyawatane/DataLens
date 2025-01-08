import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        proxy: {
            '/langflow-api': {
                target: 'https://api.langflow.astra.datastax.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/langflow-api/, ''),
            }
        }
    }
});

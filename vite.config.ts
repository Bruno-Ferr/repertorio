import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Ativa `expect` globalmente
    environment: "jsdom", // Simula o ambiente do navegador
    setupFiles: "./setupTests.ts", // Arquivo de configuração opcional
  },
})

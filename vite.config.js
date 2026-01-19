/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                 // позволяет использовать describe, it, expect без импорта
    environment: 'jsdom',          // эмуляция браузера
    setupFiles: './src/setupTests.ts', // опционально: файл с глобальной настройкой
  },
});
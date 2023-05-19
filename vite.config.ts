/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/react-caesar-cipher/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    css: true,
    globals: true,
    setupFiles: ['src/setupTests.ts'],
  },
});

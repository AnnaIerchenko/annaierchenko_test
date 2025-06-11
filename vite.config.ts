import { defineConfig } from 'vite';
// import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src')}},
  test: {
    globals: true,
    environment: 'jsdom', 
    setupFiles: './src/setupTests.ts', 
    exclude: [...configDefaults.exclude, 'e2e'], // если e2e у тебя отдельно
  },
})

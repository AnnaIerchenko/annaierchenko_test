import { defineConfig, loadEnv } from 'vite';
// import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src')}},
  define: {
    'import.meta.env': {
      ...env
    }
  },
  test: {
    globals: true,
    environment: 'jsdom', 
    setupFiles: './src/setupTests.ts', 
    exclude: [...configDefaults.exclude, 'e2e'], 
    },
  };
});

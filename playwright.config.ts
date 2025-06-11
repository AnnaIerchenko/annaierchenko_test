import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:5173', // если Vite, измени под своё
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});

import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// 加载 .env 文件中的环境变量
dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : '70%',
  reporter: 'html',
  use: {
    userAgent: 'e2eTest',
    baseURL: `${process.env.VITE_CLIENT_HOST}:${process.env.VITE_CLIENT_PORT}`,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    headless: true,
    defaultBrowserType: 'chromium',
    video: 'retain-on-failure',
    contextOptions: { recordVideo: { dir: 'test-results/' } },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  expect: {
    toHaveScreenshot: { maxDiffPixels: 100 },
  },

  webServer: {
    command: 'pnpm dev --port 50123',
    port: 50123,
    reuseExistingServer: !process.env.CI,
  },
});

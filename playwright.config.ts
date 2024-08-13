import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: false,
    launchOptions:{
     // slowMo: 300
    },
    video: 'on',
    screenshot:"only-on-failure",
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   // {
   //   name: 'firefox',
   //   use: { ...devices['Desktop Firefox'] },
   // },
  ],
});

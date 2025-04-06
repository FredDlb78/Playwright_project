import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 5 : undefined, // Réduit à 5 workers pour plus de stabilité
  timeout: 60000,

  reporter: [
    ['list'],
    ['html', { 
      outputFolder: 'test-results/html-report',
      open: 'never'
    }],
    ['json', { 
      outputFile: 'test-results/json-results.json' 
    }],
    ...(process.env.CI ? [['github']] : [])
  ],

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 30000,
    navigationTimeout: 30000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }/* ,
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit', 
      use: { ...devices['Desktop Safari'] }
    } */
  ]
});
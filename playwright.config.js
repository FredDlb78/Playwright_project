import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Configuration de base
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 10 : undefined,
  timeout: 60000, // Timeout global de 60s

  // Configuration des rapports
  reporter: [
    ['list'], // Reporter console
    ['html', { 
      outputFolder: 'playwright-report',
      open: process.env.CI ? 'never' : 'on-failure'
    }],
    ...(process.env.CI ? [
      ['junit', { outputFile: 'test-results/results.xml' }],
      ['github'] // Annotations GitHub
    ] : [])
  ],

  // Paramètres globaux
  use: {
    // Options de trace et débogage
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    // Options de navigation
    actionTimeout: 30000,
    navigationTimeout: 30000,
    
    // Options spécifiques CI
    ignoreHTTPSErrors: true,
    bypassCSP: true
  },

  // Configuration multi-navigateurs
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Options spécifiques Chrome
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    }/* ,
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        // Options spécifiques Firefox
        viewport: { width: 1600, height: 1200 }
      }
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        // Options spécifiques WebKit
        viewport: { width: 1200, height: 800 }
      }
    } */
  ],

  // Web server pour les tests (optionnel)
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120 * 1000
  // }
});
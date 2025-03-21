import { defineConfig } from 'cypress'
// Do not import plugins directly here. Do it in the file below
import plugins from './cypress/plugins'

const finalConfig = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    allure: true,
    allureReuseAfterSpec: true,
    configPath: './cypress/configs/global.ts',
  },
  e2e: {
    defaultCommandTimeout: 80000,
    pageLoadTimeout: 80000,
    chromeWebSecurity: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporterOptions.json',
    },
    screenshotsFolder: 'cypress/reports/mochareports/screenshots',
    videosFolder: 'cypress/reports/mochareports/videos',
    setupNodeEvents(on, config) {
      // Setup plugins
      config = plugins(on, config)

      return config
    },
  },
})

export default finalConfig

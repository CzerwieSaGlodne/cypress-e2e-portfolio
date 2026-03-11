const { defineConfig } = require('cypress');

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

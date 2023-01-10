const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots'
  },
});

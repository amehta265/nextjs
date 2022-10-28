const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 1
    },
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
